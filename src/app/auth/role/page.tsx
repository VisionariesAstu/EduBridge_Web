import React from "react";
import RightImage from "/public/RoleImage.png";
import Image from "next/image";
import Logo from "/public/Logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Role = () => {
  return (
    <div className="flex w-full min-h-screen bg-[url('/textured.svg')] bg-blend-multiply bg-contain bg-white text-black">
      <div className="flex justify-center h-screen w-1/2 max-lg:hidden p-5 relative">
        <Image
          src={RightImage}
          alt="Right Image"
          fill
          className="object-cover p-10 rounded-lg overflow-clip"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-1/2  p-32 max-lg:w-full max-md:p-10">
        <div className="flex justify-between w-full items-center mb-10">
          <div className="flex flex-col">
            <span className="text-primary font-bold">Hello!</span>
            <span className="text-gray-700 text-sm">
              Sign Up to Get Started
            </span>
          </div>
          <div className="flex">
            <img src={Logo.src} alt="" className="w-14" />
          </div>
        </div>
        <p className="font-semibold mb-5">Join as a Student or Teacher</p>
        <div className="flex gap-10 mb-10">
          <button className="border rounded-md cursor-pointer p-10 hover:bg-slate-400 transition-all duration-500 ease-in-out focus:bg-slate-400">
            Student
          </button>
          <button className="border rounded-md cursor-pointer p-10 hover:bg-slate-400 transition-all duration-500 ease-in-out focus:bg-slate-400">
            Teacher
          </button>
        </div>
        <Button className="w-full mb-1">Create new Account</Button>
        <p className="text-sm">
          Already have an account?{" "}
          <span>
            {" "}
            <Link href="/">Login</Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Role;
