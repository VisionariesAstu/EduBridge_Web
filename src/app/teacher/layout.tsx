import type { Metadata } from "next";
import "../../styles/globals.css";
import TeacherSideBar from "@/components/sidebar/teacher-sidebar";

export const metadata: Metadata = {
  title: "Teachers Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen bg-[url('/textured.svg')] bg-blend-multiply bg-contain bg-white text-black">
      <div className="fixed">
        <TeacherSideBar />
      </div>
      <div className="ml-72">{children}</div>
    </div>
  );
}
