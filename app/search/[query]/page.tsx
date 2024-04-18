"use client";
import { useQuery } from "@tanstack/react-query";
import AkwamCard from "./components/AkwamCard";
import { useEffect, useState } from "react";
import AkwamCardSerie from "./components/AkwamCardSerie";

const Search = ({ params }: any) => {
  const { data, isError, isLoading, error, refetch } = useQuery({
    queryKey: [`${params.query} search`],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/akwam/${params.query}`
      ).then((res) => res.json()),
  });
  console.log("🚀 ~ Search ~ data:", data);
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
            {data?.map((media: any) => {
              switch (media.type) {
                case "Movie":
                  return (
                    <AkwamCard
                      key={media.index}
                      media_type={media.type}
                      id={media.index}
                      title={media.name}
                      poster_path={media.poster}
                      url={media.url}
                    />
                  );
                  break;
                case "Serie":
                  return (
                    <AkwamCardSerie
                      key={media.index}
                      media_type={"Movie"}
                      id={media.index}
                      title={media.name}
                      poster_path={media.poster}
                      url={media.url}
                    />
                  );
                  break;

                default:
                  return null; // Handle unknown media types if necessary
              }
            })}
          </div>
        </>
      )}
    </div>
  );
};
export default Search;
