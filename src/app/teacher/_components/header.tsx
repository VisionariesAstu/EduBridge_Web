"use client";
import { Button } from "@/components/ui/button";
import { BellIcon } from "@radix-ui/react-icons";
import React from "react";
interface props {
  name: string;
}
const Header = ({ name }: props) => {
  return (
    <div className=" bg-white flex justify-between w-full items-center border-b-[1px] h-20 border-gray-400 py-5 px-10">
      <span className="font-bold text-[#25324B]">{name}</span>
      <div className={`flex gap-10 justify-center items-center`}>
        <Button
          variant="ghost"
          className={`border-2 border-[#385EC0] text-sm text-[#25324B] font-bold ${
            name === "Home" ? "hidden" : ""
          }`}
        >
          Back to Home
        </Button>
        <BellIcon width={20} height={20} />
      </div>
    </div>
  );
};

export default Header;
