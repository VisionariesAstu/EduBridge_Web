import React from "react";
import TeacherSideBar from "@/components/sidebar/teacher-sidebar";
import { BellIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { InputWithIcon } from "@/components/ui/input";
import JobPostComponent from "./_components/job-post-component";
import Header from "./_components/header";

const Home = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="fixed top-0 right-0 left-72 z-10">
        <Header name="Home" />
      </div>
      <div className="flex flex-col gap-4 m-4">
        <div className="bg-white rounded-lg mb-4 flex h-40 border-[1px] border-gray-400 justify-center items-center">
          advertising section
        </div>
        <div className="w-1/2 border-gray-400">
          <InputWithIcon
            icon={<MagnifyingGlassIcon className="w-5 h-5" />}
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
