import Image from "next/image";
import { blinker, fugaz_one } from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button";
import Hero from "../../public/Hero.jpg";
import { PlayIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page1() {
  return (
    <section about="EduBridges Hero Section" className="lg:w-10/12 lg:mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between px-4">
        <div className="flex flex-col space-y-4 mx-auto w-10/12 lg:w-8/12 py-14">
          <h1
            className={`scroll-m-20 text-3xl text-white font-extrabold leading-snug tracking-normal lg:text-5xl lg:tracking-wide w-11/12 lg:leading-tight ${fugaz_one.className}`}
          >
            Your{" "}
            <span className="font-extrabold bg-secondary pr-2 pl-0.5 pt-1 rounded-md ">
              Trusted
            </span>{" "}
            Home Teaching Partner
          </h1>

          <p
            className={`text-white tracking-wide text-xl lg:text-[1.6rem] lg:w-10/12 ${blinker.className}`}
          >
            What Kind of Teaching Tutor are looking for ?
          </p>
          <Link href={"/auth/login"} className="lg:my-14">
            <div className="lg:w-40 py-5 lg:justify-center hidden lg:flex m-0">
              <CustomButton text="Find Tutor" />
            </div>
          </Link>

          <div className="hidden lg:flex w-9/12 space-x-5">
            <div className="w-2/3 relative">
              <Image
                src={Hero}
                className="rounded-2xl"
                fill
                objectFit="cover"
                alt="Student Interacting with online tutor via tablet and laptop"
              />
            </div>

            <div className="flex flex-col mt-2">
              <p className={`text-xs w-10/12 text-white ${blinker.className}`}>
                You can find the Tutor at anytime, from anywhere and you also
                get to Schedule live sessions
              </p>
              <div
                className={`flex items my-4 items-center text-xs w-10/12 text-white ${blinker.className}`}
              >
                <div className="h-6 w-6 mr-3 bg-white rounded-full flex justify-center items-center">
                  <PlayIcon className="ml-0.5" color="black" />
                </div>
                Play this Story
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-8/12 mx-auto h-96 lg:h-auto space-y-4 p-3 lg:pl-12 lg:py-12">
          <div className="h-3/4 w-full relative">
            <Image
              src={Hero}
              fill
              className="rounded-2xl"
              objectFit="cover"
              alt="Student Interacting with online tutor via tablet and laptop"
            />
          </div>

          <div className="flex space-x-3 h-1/4 justify-between w-full">
            {[1, 2, 3].map((_, i) => (
              <div className="w-1/3 relative">
                <Image
                  src={Hero}
                  fill
                  className="rounded-lg"
                  objectFit="cover"
                  alt="Student Interacting with online tutor via tablet and laptop"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link href={"/auth/login"}>
        <div className="mx-auto my-10 w-3/4 flex justify-center lg:hidden">
          <CustomButton text="Find Tutor" />
        </div>
      </Link>
      <div className="mx-auto my-14 space-x-4 w-11/12 flex justify-center lg:hidden">
        <div className="w-full relative">
          <Image
            src={Hero}
            fill
            objectFit="cover"
            className="rounded-2xl"
            alt="Student Interacting with online tutor via tablet and laptop"
          />
        </div>
        <div className="flex flex-col mt-2">
          <p className={`text-xs  text-white ${blinker.className}`}>
            You can find the Tutor at anytime, from anywhere and you also get to
            Schedule live sessions
          </p>
          <div
            className={`flex items my-4 items-center text-xs w-10/12 text-white ${blinker.className}`}
          >
            <div className="h-6 w-6 mr-3 bg-white rounded-full flex justify-center items-center">
              <PlayIcon className="ml-0.5" color="black" />
            </div>
            Play this Story
          </div>
        </div>
      </div>
      <div className="h-10">.</div>
    </section>
  );
}
