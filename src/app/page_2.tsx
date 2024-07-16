import Image from "next/image";
import { blinker, fugaz_one } from "@/styles/fonts";
import Hero from "../../public/Hero.jpg";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Page2() {
  return (
    <section about="Testimonies" className="bg-[#F1EBFF] py-8">
      <div className="flex flex-col lg:flex-row lg:justify-between px-4 lg:space-x-10 lg:w-10/12 lg:mx-auto lg:py-12">
        <div className="lg:w-1/2 w-full">
          <div className="w-full my-10 p-5 h-80 lg:h-full lg:w-11/12 relative lg:my-0">
            <Image
              src={Hero}
              alt="Student Interacting with online tutor via tablet and laptop"
              objectFit="cover"
              className="rounded-2xl"
              fill
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h4
            className={`text-secondary ${blinker.className} font-bold text-lg lg:text-xl mb-3`}
          >
            # Testimonies
          </h4>
          <h1
            className={`scroll-m-20 text-3xl text-[#2e275f] font-extrabold leading-snug tracking-normal lg:text-5xl w-11/12 lg:leading-tight ${fugaz_one.className}`}
          >
            What people are{" "}
            <span className="text-white bg-secondary px-2 rounded-md ">
              saying
            </span>{" "}
            about us !
          </h1>
          <div className="w-full mx-auto mb-2 mt-10 bg-[#2e275f] flex flex-col px-5 py-6 lg:px-6 lg:py-7 rounded-lg">
            <div
              className={`text-5xl lg:text-7xl text-white ${fugaz_one.className}`}
            >
              ”
            </div>
            <p className="text-white text-[11px] lg:text-sm -translate-y-2 mb-3 lg:mb-5 lg:-translate-y-4">
              What Kind of Teaching Tutor are looking for What Kind of Teaching
              Tutor are looking for What Kind of Teaching Tutor are looking for
              What Kind of Teaching Tutor are looking for What Kind of Teaching
              Tutor What Kind of Teaching Tutor..
            </p>
            <div className="w-ful flex justify-between items-center">
              <div className="flex space-x-4 items-center">
                <div className="w-9 h-9 lg:w-11 lg:h-11 relative rounded-full">
                  <Image
                    src={Hero}
                    alt="Student Interacting with online tutor via tablet and laptop"
                    objectFit="cover"
                    className="rounded-full"
                    fill
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-white text-[11px] lg:text-sm font-bold">
                    Abebech Beltu
                  </h4>
                  <p className="text-white text-[9px] lg:text-xs">Student</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="w-5 h-5 lg:w-7 lg:h-7 flex justify-center items-center bg-white rounded-full">
                  <ArrowLeftIcon className="w-3 h-3 lg:w-4 lg:h-4" />
                </button>
                <button className="w-5 h-5 lg:w-7 lg:h-7 flex justify-center items-center bg-white rounded-full">
                  <ArrowRightIcon className="w-3 h-3 lg:w-4 lg:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
