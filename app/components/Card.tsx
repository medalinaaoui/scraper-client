"use client";

import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BsStars } from "react-icons/bs";

const Card = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
  };
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <Input
        value={searchTerm}
        onChange={(e: any) => setSearchTerm(e.target.value)}
        placeholder="إسم الفيلم أو المسلسل..."
      />
      <Button className="" onClick={handleSearch}>
        <strong className="pt-1">إبحث</strong>
      </Button>
    </div>
  );
};
export default Card;
