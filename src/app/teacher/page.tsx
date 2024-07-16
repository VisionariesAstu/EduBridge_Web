import React from "react";
import TeacherSideBar from "@/components/sidebar/teacher-sidebar";
import { BellIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { InputWithIcon } from "@/components/ui/input";
import JobPostComponent from "./_components/job-post-component";

const Home = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between w-full items-center border-b-[1px] border-gray-400 py-5 px-10">
        <span className="font-bold text-[#25324B]">Home</span>
        <BellIcon width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4 m-4">
        <div className="bg-white rounded-lg mb-4 flex h-40 border-[1px] border-gray-400 justify-center items-center">
          advertising section
        </div>
        <div className="w-1/2 border-gray-400">
          <InputWithIcon
            icon={<MagnifyingGlassIcon />}
            placeholder="Search"
            className=""
          />
        </div>

        <div className="flex gap-3 text-sm">
          <button className="flex bg-none focus:border-b-2 border-gray-400">
            Best Matches
          </button>
          <button className="flex focus:border-b-2 border-gray-400">
            Recent Jobs
          </button>
          <button className="flex focus:border-b-2 border-gray-400">
            Saved Jobs
          </button>
        </div>
        <JobPostComponent />
        <JobPostComponent />
      </div>
    </div>
  );
};

export default Home;
