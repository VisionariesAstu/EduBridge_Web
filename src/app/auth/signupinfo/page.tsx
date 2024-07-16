import React from "react";
import RightImage from "/public/RoleImage.png";
import Logo from "/public/Logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InputWithIcon } from "@/components/ui/input";
import { PersonIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryName } from "./countryLists";
const SignUp = () => {
  return (
    <div className="flex w-full min-h-screen bg-[url('/textured.svg')] bg-blend-multiply bg-contain bg-white text-black">
      <div className="w-1/2 py-10 px-16 h-screen">
        <div className="flex justify-center h-full w-full max-lg:hidden relative">
          <Image
            src={RightImage}
            alt="Right Image"
            fill
            className="object-cover rounded-lg overflow-clip"
          />
        </div>
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
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {CountryName.map((items) => (
                <SelectItem className="text-black" value={items.name}>
                  {items.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full mb-3">Create Account</Button>

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
