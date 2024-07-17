"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import Spinner from "react-spinkit";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { InputWithIcon } from "../ui/input";
import Link from "next/link";
import { login } from "@/server-actions/auth/login-action";
import { LoginSchema } from "@/config/schemas";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function LoginForm() {
  const { pending } = useFormStatus();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    const userData = {
      email: values.email,
      password: values.password,
    };

    const response = await login(userData);

    if (response?.error) toast.error(response?.error);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 w-full mb-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      icon={<EnvelopeClosedIcon color="gray" />}
                      type="email"
                      placeholder="Email"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      icon={<LockClosedIcon color="gray" />}
                      type="password"
                      placeholder="Password"
                      required
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full justify-start my-5 mb-7 text-primary">
            <Link href="/auth/forgot" className="text-xs">
              Forgot Password?
            </Link>
          </div>

          <Button disabled={pending} className="w-full py-5 mb-3">
            {pending ? <Spinner name="three-bounce" /> : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
