"use client";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
const Search = () => {
  //ดึงข้อมูลจาก URL
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    //ดึงค่าจาก Params "search"
    searchParams.get("search")?.toString() || ""
  );

  //หน่วงเวลา refresh ตอนพิมค้นหา
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    //ถ้ามี่ค่าที่พิมมา
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);

  // console.log("searchParams", searchParams.get('search));
  return (
    <Input
      type="text"
      placeholder="Search Camping..."
      className="max-w-xs"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
};
export default Search;
