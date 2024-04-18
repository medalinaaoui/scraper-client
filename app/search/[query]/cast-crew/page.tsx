"use client";
import { useQuery } from "@tanstack/react-query";
import MovieOrSerieCard from "../components/AkwamCard";
import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import CimaCard from "../components/WecimaCard";
const Search = ({ params }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading, error, refetch } = useQuery({
    queryKey: [`${params.query} crew search`],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/crew/search/${params.query}?page=${currentPage}`
      ).then((res) => res.json()),
  });
  const decodedQuery = decodeURIComponent(params.query);
  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

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
          {/* <div className="flex flex-col min-h-screen gap-3">
            {data?.map((movie: any) => (
              <CimaCard
                key={movie.index}
                media_type={movie.type}
                id={movie.index}
                title={movie.name}
                poster_path={movie.poster}
                url={movie.url}
              />
            ))}
          </div> */}
        </>
      )}
    </div>
  );
};
export default Search;
