import Image from "next/image";
import Link from "next/link";
import { FaRegFileImage } from "react-icons/fa";

const CrewCard = ({ data }: any) => {
  return (
    <article className="grid gap-2 w-full">
      <div className=" flex justify-between items-center w-full py-6">
        <div className="flex gap-1 sm:gap-2 items-center">
          <Link href={`/cast-crew/${data?.id}`}>
            {data?.profile_path === null || data?.profile_path === undefined ? (
              <div className="sm:w-32 w-14 h-14 sm:h-32 aspect-square rounded-full bg-maincards flex justify-center items-center">
                <span className="text-divider text-2xl lg:text-5xl">
                  <FaRegFileImage />
                </span>
              </div>
            ) : (
              <div className="sm:w-32 w-12 h-12 sm:h-32 aspect-square">
                <Image
                  src={`https://image.tmdb.org/t/p/w342${data?.profile_path}`}
                  alt={`${data?.username} profile`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover border-primary sm:border-[0.10px] rounded-full cursor-pointer hover:outline-[0.10px] hover:outline hover:outline-primary "
                />
              </div>
            )}
          </Link>

          <h1 className="max-sm:text-xxs truncate sm:text-lg lg:text-2xl font-bold">
            {data?.name}
          </h1>

          <div className="flex gap-1 sm:gap-3 items-center">
            <span className="max-sm:text-xxs">
              {data?.known_for_department === "Acting" ? "ممثل(ة)" : "مخرج(ة)"}
            </span>
            <span className="max-sm:text-xxs">من أشهر أعماله :</span>
            <div className="flex gap-1 items-center">
              {data?.known_for?.slice(0, 2).map((work: any) => (
                <span
                  className="movie_tags max-sm:text-xxs sm:w-32 w-14 truncate bg-[#0E0E0E] text-white py-[0.04rem] sm:py-[0.11rem] px-1 sm:px-3 rounded-md font-semibold"
                  key={work.id}
                >
                  <Link
                    href={
                      work.media_type === "movie"
                        ? `/movies/${work.id}`
                        : `/series/${work.id}`
                    }
                  >
                    {work.media_type === "movie" ? work.title : work.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[0.06rem] w-full bg-[#474747]"></div>
    </article>
  );
};
export default CrewCard;
