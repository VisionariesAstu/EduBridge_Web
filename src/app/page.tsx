import Image from "next/image";
import LandingHeader from "@/components/nav/landing_header";
import { blinker, fugaz_one } from "@/styles/fonts";

export default function Home() {
  return (
    <div>
      <LandingHeader />
      <main>
        <div className="flex flex-col space-y-5 items-center justify-center mx-auto w-10/12 py-14">
          <h1
            className={`scroll-m-20 text-5xl text-white font-extrabold leading-snug tracking-tight lg:text-6xl ${fugaz_one.className}`}
          >
            Your{" "}
            <span className="font-extrabold tracking-tight bg-secondary pr-2 pl-0.5 pt-1 rounded-md ">
              Trusted
            </span>{" "}
            Home Teaching Partner
          </h1>

          <p
            className={`text-white  text-2xl lg:text-3xl ${blinker.className}`}
          >
            What Kind of Teaching Tutor are looking for ?
          </p>
        </div>

        <div className="flex flex-col w-10/12 mx-auto space-y-5">
          <Image
            src="/Hero_1.png"
            width={500}
            height={500}
            alt="Student Interacting with online tutor via tablet and laptop"
          />

          <div className="flex space-x-3 justify-evenly w-full">
            <Image
              src="/Hero_1.png"
              width={110}
              height={110}
              alt="Student Interacting with online tutor via tablet and laptop"
            />
            <Image
              src="/Hero_1.png"
              width={110}
              height={110}
              alt="Student Interacting with online tutor via tablet and laptop"
            />
            <Image
              src="/Hero_1.png"
              width={110}
              height={110}
              alt="Student Interacting with online tutor via tablet and laptop"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
