import CustomButton from "@/components/ui/custom_button";
import { blinker, fugaz_one } from "@/styles/fonts";
import Link from "next/link";

export default function Page3() {
  return (
    <section about="Testimonies" className="bg-[#F1EBFF] py-8">
      <div className="flex flex-col lg:flex-row lg:justify-between px-4 lg:space-x-10 lg:w-10/12 lg:mx-auto lg:py-12">
        <div className="lg:w-1/2 w-full">
          <div className="w-full my-10 p-5 h-80 lg:h-full lg:w-11/12 relative lg:my-0"></div>
        </div>
        <div className="lg:w-1/2 px-2">
          <h1
            className={`scroll-m-20 text-3xl text-[#2e275f] font-extrabold leading-snug tracking-normal lg:text-5xl w-11/12 lg:leading-tight ${fugaz_one.className}`}
          >
            <span className="text-white bg-secondary px-2 rounded-md ">
              Professional
            </span>{" "}
            and certified tutors who you can trust
          </h1>
          <div className="w-full mx-auto mb-2 mt-10 flex flex-col py-6 lg:py-7 rounded-lg">
            <p
              className={`text-[#2e275f] text-[11px] lg:text-sm -translate-y-2 mb-3 lg:mb-5 lg:-translate-y-4 ${blinker.className}`}
            >
              Tap into the world's largest network of credentialled and
              experienced therapists who can help you with a range of issues
              including depression, anxiety, relationships, trauma, grief, and
              more.
              <br />
              <br />
              With our therapists. you get the same professionalism and quality
              you would expect from an in-office therapist. but with the ability
              to communicate when and how you want.
            </p>
            <Link href={"/auth/login"}>
              <div className="w-2/5 flex justify-center">
                <CustomButton text="Find Tutor" primary={true} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
