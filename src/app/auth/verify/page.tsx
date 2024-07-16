import React from "react";
import RightImage from "/public/RoleImage.png";
import Logo from "/public/Logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { InputWithIcon } from "@/components/ui/input";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
const Verify = () => {
  return (
    <div className="flex w-full min-h-screen bg-[url('/textured.svg')] bg-blend-multiply bg-contain bg-white text-black">
      <div className="flex justify-center  h-screen w-1/2 max-lg:hidden p-5 relative">
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
            <span className="text-gray-700 text-sm">Verify Your Code</span>
          </div>
          <div className="flex">
            <img src={Logo.src} alt="" className="w-14" />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full mb-5">
          <InputWithIcon
            icon={<EnvelopeOpenIcon color="gray" />}
            type="text"
            placeholder="OTP Code"
            className=""
          />
        </div>
        <Button className="w-full mb-3">Verify Code</Button>
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

export default Verify;
