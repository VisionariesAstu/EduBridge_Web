import DetailCard from "@/components/details_card";
import { fugaz_one } from "@/styles/fonts";

export default function Page4() {
  return (
    <section about="How It Works" className="py-8">
      <div className="flex flex-col lg:justify-between px-4 lg:space-x-10 lg:w-10/12 lg:mx-auto p-12">
        <div className="mx-auto w-full flex justify-center">
          <h1
            className={`text-3xl text-white font-extrabold leading-snug tracking-normal lg:text-4xl lg:leading-tight ${fugaz_one.className}`}
          >
            How it <span className="bg-secondary px-2 rounded-md ">Works</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full my-12">
          <div className="lg:w-1/2 w-full my-10 flex flex-col space-y-5">
            <DetailCard
              title="Get Matched with the best Tutor for you"
              description="Answer a few questions to find a credentialed therapist who fits your needs and preferences. Tap into the largest network of credentialed providers."
            />
            <DetailCard
              title="Communicate you way"
              description="Talk to you therapist however you feel comfortable text. chat. phone, or video."
            />
            <DetailCard
              title="Tutor When you need it"
              description="You can message your therapist at anytime. from anywhere. You also get to schedule live sessions when it's convenient for you."
            />
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </section>
  );
}
