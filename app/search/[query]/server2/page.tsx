"use client";
import { useQuery } from "@tanstack/react-query";
import MovieOrSerieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const Search = ({ params }: any) => {
  const { data, isError, isLoading, error, refetch } = useQuery({
    queryKey: [`${params.query} server 2`],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/wecinema/${params.query}`
      ).then((res) => res.json()),
  });
  const decodedQuery = decodeURIComponent(params.query);
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
              {`تم العثور على ${data?.length} تطابقاً لكلمة "${decodedQuery}"`}
            </h2>
            <div className="w-full h-[0.11rem] bg-primary"></div>
          </div>
          <div className="flex flex-col min-h-screen gap-3">
            {data?.map((movie: any) => (
              <MovieOrSerieCard
                key={movie.id}
                media_type={"movie"}
                id={movie.id}
                title={movie.name}
                poster_path={""}
                url={movie.url}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Search;
