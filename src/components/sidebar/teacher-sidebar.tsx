"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/edu_bridge_colored_logo.png";
import Profile from "../../../public/profile.jpg";
import {
  HomeIcon,
  ChatBubbleIcon,
  GroupIcon,
  ReaderIcon,
  GearIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Data = [
  {
    name: "Dashboard",
    path: "",
    icon: HomeIcon,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: ChatBubbleIcon,
  },
  {
    name: "All Applicants",
    path: "/all-applicants",
    icon: GroupIcon,
  },
  {
    name: "Job Listing",
    path: "/job-listing",
    icon: ReaderIcon,
  },
  {
    name: "My Schedule",
    path: "/my-schedule",
    icon: ReaderIcon,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: GearIcon,
  },
  {
    name: "help and support",
    path: "/help-and-support",
    icon: QuestionMarkCircledIcon,
  },
];

const TeacherSideBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex flex-col h-screen w-72 pt-3 pb-10 px-1 border-r-[1px] border-gray-400">
      <div className="flex gap-2 justify-start items-center w-full px-7 mb-8">
        <Image src={Logo} alt="" className="w-12 h-12" />
        <span className="font-black text-xl text-[#25324B]">EduBridge</span>
      </div>
      <div className="flex flex-col flex-grow">
        {Data.map((items, index) => (
          <>
            <Link
              href={"/teacher" + items.path}
              className={`${
                pathname === "/teacher" + items.path
                  ? "border-primary"
                  : "border-white"
              } w-full px-3 cursor-pointer group border-l-4   transition-all duration-300 ease-linear hover:border-primary`}
            >
              <div
                className={`${
                  pathname === "/teacher" + items.path ? "bg-gray-200" : ""
                } flex px-4  group-hover:bg-gray-200 items-center justify-between gap-4 py-2 transition-all duration-300 ease-linear`}
              >
                <div className="flex gap-4 items-center">
                  <items.icon
                    className="text-primary font-black"
                    style={{ fontWeight: "bold", fontSize: "24px" }}
                  />

                  <span className="text-gray-500 text-sm">{items.name}</span>
                </div>
                {items.name === "Messages" ? (
                  <div className="bg-primary text-white rounded-full w-5 h-5 flex justify-center items-center text-xs font-bold">
                    1
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>

            {index === 4 ? (
              <>
                <div className="w-full h-[1px] bg-gray-400 mt-7 mb-5"></div>
                <span className="text-gray-500 text-xs px-7 mb-3">
                  SETTINGS
                </span>
              </>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
      <div className="flex gap-3 justify-center items-center cursor-pointer">
        <Image
          src={Profile}
          alt=""
          className="rounded-full w-10 h-10 border-[1px] border-gray-400"
        />
        <div className="flex flex-col ">
          <span className="font-bold text-[#25324B] text-sm ">
            Mohammed Ali
          </span>
          <span className="text-xs">mohammedali@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default TeacherSideBar;
