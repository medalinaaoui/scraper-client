import { Button } from "@/app/components/Button";
import { SmallNoImage } from "@/app/components/NoImage";
import SmallPoster from "@/app/ui/smallPoster";
import Link from "next/link";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { registerSuccess } from "@/store/userSlice";
import { useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import mainAxios from "axios";
const MovieOrSerieCard = ({
  id,
  poster_path,
  media_type,
  title,
  url,
}: {
  id: number;
  poster_path: string;
  media_type: string;
  title: string;
  url: string;
}) => {
  // const router = useRouter();

  const mutation: UseMutationResult = useMutation({
    mutationFn: async (link) => {
      return await axios.post("/akwam/quality", link);
    },
    onSuccess: (response: any) => {
      console.log("page.tsx:18 ~ Register ~ response:", response);
      toast.success("quality", {
        style: {
          borderRadius: "10px",
          background: "#474747",
          color: "#fff",
        },
      });
    },
    onError: (error: any) => {
      toast.error("didn't get the quality", {
        style: {
          borderRadius: "10px",
          background: "#474747",
          color: "#fff",
        },
      });
    },
  });

  const handleClick = () => {
    setShowQuality(true);
    mutation.mutate({ url });
  };

  const [showQuality, setShowQuality] = useState(false);

  return (
    <article className="grid gap-2 w-full">
      <div onClick={handleClick} className="flex gap-4 overflow-hidden w-full">
        <div className="flex items-center flex-col sm:gap-1">
          {poster_path === null ||
          poster_path === undefined ||
          poster_path === "" ? (
            <SmallNoImage
              id={id}
              serie={media_type === "tv"}
              className="lg:w-[5.625rem] w-14 sm:w-20 md:w-28"
            />
          ) : (
            <SmallPoster
              serie={media_type === "tv"}
              id={id}
              poster={`https://image.tmdb.org/t/p/w342${poster_path}`}
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
            <Button>720p</Button>
          )}
        </div>
      )}

      <div className="h-[0.06rem] w-full bg-[#474747]"></div>
    </article>
  );
};
export default MovieOrSerieCard;
