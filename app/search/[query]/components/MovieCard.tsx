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

  const [showQuality, setShowQuality] = useState(false);

  interface Quality {
    index: number;
    quality: string;
    size: string;
    url: string;
  }
  const [quality, setQuality] = useState<Quality[]>([]);

  const mutation: UseMutationResult = useMutation({
    mutationFn: async (link) => {
      return await axios.post("/akwam/quality", link);
    },
    onSuccess: (response: any) => {
      console.log("page.tsx:18 ~ Register ~ response:", response);
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

  const handleClick = () => {
    setShowQuality(true);
    mutation.mutate({ url });
  };

  const [showDownloadLink, setShowDownloadLink] = useState(false);
  const [downloadLink, setDownloadLink] = useState<{ url: string }>({
    url: "",
  });

  const DownloadLinkMutation: UseMutationResult = useMutation({
    mutationFn: async (link) => {
      return await axios.post("/link", link);
    },
    onSuccess: (response: any) => {
      setDownloadLink(response?.data);
    },
    onError: (error: any) => {
      console.log("🚀 ~ error:", error);
      setShowDownloadLink(false);
      toast.error("حدث خطأ ما", {
        style: {
          borderRadius: "10px",
          background: "#474747",
          color: "#fff",
        },
      });
    },
  });

  const handleQualityClick = (url: string) => {
    setShowDownloadLink(true);
    DownloadLinkMutation.mutate({ url });
  };

  return (
    <article className="akwam-card grid gap-2 w-full">
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
              <Button onClick={() => handleQualityClick(q.url)} key={q.index}>
                {q.quality}
              </Button>
            ))
          )}
        </div>
      )}

      {showDownloadLink && (
        <div className="flex gap-2 mt-4">
          {DownloadLinkMutation.isPending ? (
            <Button className="bg-green-700" disabled>
              ...
            </Button>
          ) : (
            <Button className="bg-green-700">
              <Link href={downloadLink.url}>تحميل</Link>
            </Button>
          )}
        </div>
      )}

      <div className="h-[0.06rem] w-full bg-[#474747]"></div>
    </article>
  );
};
export default MovieOrSerieCard;
