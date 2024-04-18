import LikeReview from "@/app/components/likeReview";
import GroupedPosters from "@/app/ui/groupedPosters";
import Link from "next/link";

type Props = {
  userList: UserList;
};
const ListCard = ({ userList }: Props) => {
  return (
    <article className="grid gap-2 h-24 sm:h-40 text-white md:h-64 lg:h-[15.6rem]">
      <div className="flex flex-row-reverse gap-2 justify-between overflow-hidden  w-[45vw] sm:w-[55vw] lg:w-[40vw]">
        <GroupedPosters posters={userList.works_id} />
        <div className="flex flex-col">
          <Link className="" href={`/lists/${userList.id}`}>
            <h3 className="font-semibold line-clamp-3 md:line-clamp-4 lg:line-clamp-6 max-sm:text-xxs sm:text-base lg:text-lg  ">
              {userList.title}
            </h3>
            <p className="text-secondary line-clamp-1 md:line-clamp-2 lg:line-clamp-6 max-sm:text-xxs sm:text-base lg:text-lg  ">
              {userList?.works_id?.length} أعمال
            </p>
          </Link>
        </div>
      </div>
      <div className="h-[0.06rem] w-full bg-[#474747]"></div>
    </article>
  );
};
export default ListCard;
