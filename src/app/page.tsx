import LandingHeader from "@/components/landing_header";
import Page1 from "./page_1";
import Page2 from "./page_2";
import Page3 from "./page_3";
import Page4 from "./page_4";
import LandingFooter from "@/components/landing_footer";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </main>
      <LandingFooter />
    </>
  );
}
