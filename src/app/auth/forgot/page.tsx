import React from "react";
import RightImage from "/public/RoleImage.png";
import Logo from "/public/Logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { InputWithIcon } from "@/components/ui/input";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
const Forgot = () => {
  return (
    <div className="flex w-full min-h-screen bg-[url('/textured.svg')] bg-contain bg-opacity-75 bg-blend-multiply bg-white text-black">
      <div className="flex justify-center  h-screen w-1/2 max-lg:hidden p-5 relative">
        <Image
          src={RightImage}
          alt="Right Image"
          fill
          className="object-cover rounded-lg p-10"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-1/2  p-32 max-lg:w-full max-md:p-10">
        <div className="flex justify-between w-full items-center mb-10">
          <div className="flex flex-col">
            <span className="text-primary font-bold">Hello!</span>
            <span className="text-gray-700 text-sm">Forgot Your Password</span>
          </div>
          <div className="flex">
            <img src={Logo.src} alt="" className="w-14" />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full mb-5">
          <InputWithIcon
            icon={<EnvelopeClosedIcon color="gray" />}
            type="email"
            placeholder="Email"
            className=""
          />
        </div>
        <Button className="w-full mb-3">Forgot Password</Button>
        <p className="text-sm">
          Do you remember your password?
          <span>
            <Link href="/auth/login" className="text-[#44C079]">
              {" "}
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Forgot;
