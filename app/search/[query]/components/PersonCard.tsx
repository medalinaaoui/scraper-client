import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import FollowUnFollow from "@/app/components/FollowUnFollow";

const PersonCard = ({ data, user }: any) => {
  return (
    <article className="grid gap-2 w-full">
      <div className=" flex justify-between items-center w-full py-6">
        <div className="flex max-sm:flex-1 gap-1 sm:gap-2 items-center">
          <Link href={`/profile/${user}`}>
            <div className="sm:w-32 w-14 h-14 sm:h-32 aspect-square">
              <Image
                src={data?.profile_picture_url}
                alt={`${data?.username} profile`}
                width={100}
                height={100}
                className="w-full h-full object-cover border-primary sm:border-[0.10px] rounded-full cursor-pointer hover:outline-[0.10px] hover:outline hover:outline-primary "
              />
            </div>
          </Link>
          <div className="flex flex-1 flex-col gap-1 sm:gap-2 ">
            <div className="flex gap-1 sm:gap-3 w-full items-center">
              <div className="flex flex-col">
                <h1 className="text-sm truncate sm:text-lg lg:text-2xl font-bold">
                  {data?.full_name}
                </h1>
                <span className="text-xs sm:text-sm lg:text-sm text-secondary font-light">
                  {data?.username}@
                </span>
              </div>
              <FollowUnFollow user={user} username={data?.username} />
            </div>
          </div>
        </div>
        <div className="flex max-sm:hidden gap-3 justify-between sm:gap-5 ">
          <Link
            href={`profile/${data?.user_id}`}
            className="cursor-pointer flex flex-col items-center"
          >
            <span className="text-lg sm:text-3xl text-white">
              {data.followers_count}
            </span>
            <span className="text-secondary font-light">متابع</span>
          </Link>
          <div className="bg-divider w-[0.08rem] rounded-sm h-auto"></div>

          <Link
            href={`profile/${data?.user_id}`}
            className="cursor-pointer flex flex-col items-center"
          >
            <span className="text-lg sm:text-3xl text-white">
              {data.following_count}
            </span>
            <span className="text-secondary font-light">يتابع</span>
          </Link>

          <div className="bg-divider w-[0.08rem] rounded-sm h-auto"></div>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-3xl text-white">
              {data.watched_movies
                ? data.watched_movies.split(",").length || 0
                : 0}
            </span>
            <span className="text-secondary font-light">فيلم</span>
          </div>
          <div className="bg-divider w-[0.08rem] rounded-sm h-auto"></div>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-3xl text-white">
              {data.watched_series
                ? data.watched_series.split(",").length || 0
                : 0}
            </span>
            <span className="text-secondary font-light">مسلسل</span>
          </div>
        </div>
      </div>
      <div className="h-[0.06rem] w-full bg-[#474747]"></div>
    </article>
  );
};
export default PersonCard;
