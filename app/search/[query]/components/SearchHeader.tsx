"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SearchHeader = ({ query }: { query: string }) => {
  const path = usePathname();

  return (
    <aside className="sm:mx-3 sm:w-1/4">
      <div className="flex flex-col gap-1 sm:gap-2">
        <div className="grid gap-1 max-sm:hidden">
          <h3 className="text-sm sm:text-base font-bold text-primary">
            إبحث في
          </h3>
          <div className="w-full h-[0.11rem] bg-primary"></div>
        </div>
        <nav className="w-full">
          <ul className="flex sm:flex-col gap-1 text-sm sm:text-base font-bold">
            <li
              className={`${
                path.split("/").length == 3 ? "active-search" : ""
              } hover:bg-maincards hover:text-white transition-all sm:py-1 sm:px-2 px-[0.15rem] rounded-lg`}
            >
              <Link href={`/search/${query}`}>السرفر 1</Link>
            </li>
            <li
              className={`${
                path.split("/")[3] == "movies" ? "active-search" : ""
              } hover:bg-maincards hover:text-white transition-all sm:py-1 sm:px-2 px-[0.15rem] rounded-lg`}
            >
              <Link href={`/search/${query}/server2`}>السرفر 2</Link>
            </li>
            <li
              className={`${
                path.split("/")[3] == "series" ? "active-search" : ""
              } hover:bg-maincards hover:text-white transition-all sm:py-1 sm:px-2 px-[0.15rem] rounded-lg`}
            >
              <Link href={`/search/${query}/series`}>مسلسلات</Link>
            </li>
            <li
              className={`${
                path.split("/")[3] == "users" ? "active-search" : ""
              } hover:bg-maincards hover:text-white transition-all sm:py-1 sm:px-2 px-[0.15rem] rounded-lg`}
            >
              <Link href={`/search/${query}/users`}>مستخدمين</Link>
            </li>
            <li
              className={`${
                path.split("/")[3] == "lists" ? "active-search" : ""
              } hover:bg-maincards hover:text-white transition-all sm:py-1 sm:px-2 px-[0.15rem] rounded-lg`}
            >
              <Link href={`/search/${query}/lists`}>قوائم</Link>
            </li>
            <li
              className={`${
                path.split("/")[3] == "cast-crew" ? "active-search" : ""
              } hover:bg-maincards hover:text-white transition-all sm:py-1 sm:px-2 px-[0.15rem] rounded-lg`}
            >
              <Link href={`/search/${query}/cast-crew`}>ممثلين ومخرجين</Link>
            </li>
          </ul>
        </nav>
        {/* <div className="w-full h-[0.11rem] bg-divider"></div> */}
      </div>
    </aside>
  );
};
export default SearchHeader;
