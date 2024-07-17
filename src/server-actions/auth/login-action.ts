"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { LoginSchema } from "@/config/schemas";

export async function login(userData: unknown) {
  const result = LoginSchema.safeParse(userData);

  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issues) => {
      errorMessage =
        errorMessage + issues.path[0] + ":" + issues.message + ". ";
    });

    return {
      error: errorMessage,
    };
  }

  const { email, password } = result.data;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new Error("Invalid email or password");

  const isValid = await bcrypt.compare(password!.toString(), user.password);

  if (!isValid) throw new Error("Invalid email or password");

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET ?? "", {
    expiresIn: "1h",
  });

  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600,
    path: "/",
  });

  redirect("/console");
}
