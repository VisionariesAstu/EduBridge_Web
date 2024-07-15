import React from "react";
import RightImage from "/public/RoleImage.png";
import Logo from "/public/Logo.png";
import GoogleLogo from "/public/google_logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { InputWithIcon } from "@/components/ui/input";
import {
  EnvelopeClosedIcon,
  EyeOpenIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

const SignUp = () => {
  return (
    <div className="flex w-full min-h-screen bg-[url('/texture.png')] bg-white text-black">
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
        <div className="flex flex-col gap-3 w-full mb-5">
          <InputWithIcon
            icon={<PersonIcon color="gray" />}
            type="text"
            placeholder="Full Name"
            className=""
          />
          <InputWithIcon
            icon={<EnvelopeClosedIcon color="gray" />}
            type="email"
            placeholder="Email"
            className=""
          />
          <div className="flex w-full relative items-center">
            <InputWithIcon
              icon={<LockClosedIcon color="gray" />}
              type="password"
              placeholder="Password"
              className="w-full"
            />
            <div className="absolute right-3 ">
              <EyeOpenIcon color="gray" className="cursor-pointer" />
            </div>
          </div>
          <div className="flex w-full relative items-center">
            <InputWithIcon
              icon={<LockClosedIcon color="gray" />}
              type="password"
              placeholder="Confirm"
              className="w-full"
            />
            <div className="absolute right-3 ">
              <EyeOpenIcon color="gray" className="cursor-pointer" />
            </div>
          </div>
        </div>

        <Button className="w-full mb-3">SignUp</Button>
        <div className="flex w-full justify-center items-center mb-2">
          <div className="flex w-full h-[1px] bg-black"></div>
          <div className="px-5"> or</div>
          <div className="flex w-full h-[1px] bg-black"></div>
        </div>

        <Button className="w-full flex gap-3 text-gray-500 bg-[#CEE5E6] hover:bg-[#b5d3d4] mb-1">
          <img src={GoogleLogo.src} alt="" width={20} height={20} />
          Continue With Google
        </Button>
        <p className="text-sm">
          Already have an account?
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

export default SignUp;
