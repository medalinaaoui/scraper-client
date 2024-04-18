"use client";
import { useQuery } from "@tanstack/react-query";
import MovieOrSerieCard from "../components/AkwamCard";
import { useEffect, useState } from "react";
import PersonCard from "../components/PersonCard";

const Search = ({ params }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading, error, refetch } = useQuery({
    queryKey: [`${params.query} user search`],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user/search/${params.query}?page=${currentPage}`
      ).then((res) => res.json()),
  });
  const decodedQuery = decodeURIComponent(params.query);
  useEffect(() => {
    refetch();
  }, [currentPage]);

  const handleNextPage = () => {
    // Move to the next page
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    // Move to the previous page, but not below page 1
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="grid gap-5">
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <span className="main-loader"></span>
        </div>
      ) : (
        <>
          <div className="grid gap-1">
            <h2 className="text-sm sm:text-base font-bold text-primary">
              {`تم العثور على ${data?.total_results} تطابقاً لكلمة "${decodedQuery}"`}
            </h2>
            <div className="w-full h-[0.11rem] bg-primary"></div>
          </div>
          <div className="flex flex-col min-h-screen gap-3">
            {data?.results?.map((user: any) => (
              <PersonCard key={user.user_id} data={user} user={user.user_id} />
            ))}
          </div>
          <div className="join flex w-full justify-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="join-item btn max-sm:btn-sm bg-primary text-white"
            >
              «
            </button>
            <button className="join-item btn max-sm:btn-sm bg-primary text-white">
              الصفحة {currentPage}
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === data?.total_pages}
              className="join-item btn max-sm:btn-sm bg-primary text-white"
            >
              »
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Search;
