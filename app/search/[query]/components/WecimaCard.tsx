import { Button } from "@/app/components/Button";
import { SmallNoImage } from "@/app/components/NoImage";
import SmallPoster from "@/app/ui/smallPoster";
import Link from "next/link";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { useState } from "react";
import toast from "react-hot-toast";

const CimaCard = ({
  id,
  poster_path,

  title,
  url,
}: {
  id: number;
  poster_path: string;

  title: string;
  url: string;
}) => {
  const [showQuality, setShowQuality] = useState(false);

  interface Quality {
    index: number;
    quality: string;
    size: string;
    url: string;
  }
  const [quality, setQuality] = useState<Quality[]>([]);

  const mutation: UseMutationResult = useMutation({
    mutationFn: async (linkCinema) => {
      return await axios.post("/wecinema/quality", linkCinema);
    },
    onSuccess: (response: any) => {
      console.log("🚀 ~ quality: response:", response);
      setQuality(response?.data);
    },
    onError: (error: any) => {
      console.log("🚀 ~ error:", error);
      setShowQuality(false);
      toast.error("حدث خطأ ما", {
        style: {
          borderRadius: "10px",
          background: "#474747",
          color: "#fff",
        },
      });
    },
  });

  const handleWecinemaClick = () => {
    setShowQuality(true);
    mutation.mutate({ url });

    console.log("====>", url);
    console.log("wecinema", url);
  };

  return (
    <article className="wecinema-card grid gap-2 w-full">
      <div
        onClick={handleWecinemaClick}
        className="flex gap-4 overflow-hidden w-full"
      >
        <div className="flex items-center flex-col sm:gap-1">
          {poster_path === null || poster_path === undefined ? (
            <SmallNoImage
              id={id}
              className="lg:w-[5.625rem] w-14 sm:w-20 md:w-28"
            />
          ) : (
            <SmallPoster
              poster={poster_path}
              text={title}
              className="lg:w-[5.625rem] w-14 sm:w-20 md:w-28"
            />
          )}
        </div>

        <div className="flex gap-1 w-3/4">
          <h3 className="font-bold text-white truncate text-xs sm:text-base lg:text-lg ">
            {title}
          </h3>
        </div>
      </div>

      {showQuality && (
        <div className="flex gap-2 mt-4">
          {mutation.isPending ? (
            <Button disabled>...</Button>
          ) : (
            quality?.map((q) => (
              <Link
                key={q.index}
                href={q.url}
                className="flex h-10 items-center rounded-lg bg-green-600 px-12 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 active:bg-green-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
              >
                {q.quality}
              </Link>
            ))
          )}
        </div>
      )}

      <div className="h-[0.06rem] w-full bg-[#474747]"></div>
    </article>
  );
};
export default CimaCard;
