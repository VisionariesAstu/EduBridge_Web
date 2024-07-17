"use client";

import {
  EnvelopeClosedIcon,
  EyeOpenIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import { InputWithIcon } from "../ui/input";
import Link from "next/link";
import { login } from "@/server-actions/auth/login-action";
import { LoginSchema } from "@/config/schemas";
import toast from "react-hot-toast";

export default function LoginForm() {
  async function clientAction(formData: FormData) {
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = LoginSchema.safeParse(userData);

    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issues) => {
        errorMessage =
          errorMessage + issues.path[0] + ":" + issues.message + ". ";
      });

      toast.error(errorMessage);
      return;
    }

    const response = await login(result.data);

    if (response?.error) toast.error(response?.error);
  }

  return (
    <form action={clientAction} method="POST" className="w-full">
      <div className="flex flex-col gap-3 w-full mb-1">
        <InputWithIcon
          icon={<EnvelopeClosedIcon color="gray" />}
          type="email"
          placeholder="Email"
          name="email"
          className=""
          required
        />
        <div className="flex w-full relative items-center">
          <InputWithIcon
            icon={<LockClosedIcon color="gray" />}
            type="password"
            placeholder="Password"
            name="password"
            required
            className="w-full"
          />
          <div className="absolute right-3 ">
            <EyeOpenIcon color="gray" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start my-5 mb-7 text-primary">
        <Link href="/auth/forgot" className="text-xs">
          Forgot Password?
        </Link>
      </div>
    </form>
  );
}
