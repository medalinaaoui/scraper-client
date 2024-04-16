"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Logo from "@/public/7th.png";
import TimeLine from "@/app/components/TimeLine";
import Loader from "@/app/components/Loader";

const AllWorksPage = ({ params }: any) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: [params.client, "client"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/all/${params.client}`
      ).then((res) => res.json()),
  });

  console.log(data);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="h-screen">
      <div className="w-full flex justify-center">
        <div className="w-24 aspect-square ">
          <Image
            src={Logo}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <h1 className="pl-8 text-right">أعمال</h1>
      <div className="flex flex-col items-center text-white gap-3">
        {data?.map((w: work) => (
          <div key={w.index}>{w.name}</div>
        ))}
      </div>
    </div>
  );
};
export default AllWorksPage;

interface work {
  source: string;
  index: number;
  type: string;
  name: string;
  url: string;
}
