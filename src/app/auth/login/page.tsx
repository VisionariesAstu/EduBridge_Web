import React from "react";
import RightImage from "/public/RoleImage.png";
import Logo from "/public/Logo.png";
import GoogleLogo from "/public/google_logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { InputWithIcon } from "@/components/ui/input";
import { login } from "@/server-actions/auth/login-action";
import {
  EnvelopeClosedIcon,
  EyeOpenIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import LoginForm from "@/components/form/login-form";
const Login = () => {
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
        <div className="flex justify-between w-full items-center mb-16">
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
        <LoginForm />
        <div className="flex w-full justify-center items-center mb-2">
          <div className="flex w-full h-[1px] bg-black"></div>
          <div className="px-5"> or</div>
          <div className="flex w-full h-[1px] bg-black"></div>
        </div>

        <Button className="w-full flex gap-3 text-gray-500 bg-white hover:text-black hover:bg-gray-100 mb-1">
          <img src={GoogleLogo.src} alt="" width={20} height={20} />
          Continue With Google
        </Button>
        <p className="text-sm mt-2">
          Dont have an account?
          <span>
            <Link href="/auth/signup" className="text-primary">
              {" "}
              Signup
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
