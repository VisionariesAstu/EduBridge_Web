import LandingHeader from "@/components/nav/landing_header";
import Page1 from "./page_1";

export default function Home() {
  return (
    <div>
      <LandingHeader />
      <main>
        <Page1 />
        {/* <Page2 /> */}
      </main>
    </div>
  );
}
