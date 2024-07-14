import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode_toggle";
import Image from "next/image";

export default function LandingHeader() {
  return (
    <nav className="flex justify-between items-center p-4 ">
      <div className="flex items-center space-x-4">
        <Image
          src="/Edu Bridge Wide Logo White.png"
          alt="logo"
          width={160}
          height={60}
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button className="px-10 mt-1text-white bg-secondary hover:bg-[#171236] text-lg font-semibold">
          Login
        </Button>
        <div className="theme-toggle lg:block hidden">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
