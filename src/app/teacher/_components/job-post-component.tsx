import React from "react";
import Image from "next/image";
import Profile from "../../../../public/profile.jpg";
import { HeartIcon } from "@radix-ui/react-icons";
const JobPostComponent = () => {
  return (
    <div className="flex flex-col border border-gray-500 p-4 w-3/4 rounded-lg gap-2 bg-white">
      <div className="flex w-full gap-3 mb-3">
        <div className="flex ">
          <Image src={Profile} alt="" className="w-20 rounded-full" />
        </div>
        <div className="flex flex-col w-full text-sm gap-1">
          <div className="flex justify-between">
            <span className="text-[#25324B] font-semibold">John Doe</span>
            <HeartIcon className="w-5 h-5 hover:cursor-pointer" />
          </div>
          <p>Experienced Tutor (25+ years). Specialized in middle school</p>
          <span className="text-gray-600 ">Addis Ababa</span>
        </div>
      </div>
      <div className=" text-sm">
        <div className="flex gap-5 mb-4">
          <span className="bg-slate-200 text-gray-600 px-3 rounded-[5px]">
            Physics
          </span>
          <span className="bg-slate-200 text-gray-600 px-3 rounded-[5px]">
            Maths
          </span>
          <span className="bg-slate-200 text-gray-600 px-3 rounded-[5px]">
            English
          </span>
        </div>
        <p className="text-gray-600 mb-3">
          Hello. I'm Vinita. Having tutored children of class 4 to 10 for over
          25 years now, it has become my passion to help children overcome their
          difficulties as well as help parents understand and participate in
          their child's ....
        </p>
        <p>Fixed-Price - Budget: 10000Birr</p>
      </div>
    </div>
  );
};

export default JobPostComponent;
