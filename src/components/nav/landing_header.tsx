import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingHeader() {
  return (
    <nav className="flex justify-between items-center p-4 lg:w-10/12 mx-auto">
      <div className="flex items-center space-x-4">
        <Image
          src="/Edu Bridge Wide Logo White.png"
          alt="logo"
          width={160}
          height={60}
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button className="px-8 text-white bg-secondary hover:bg-[#171236] font-semibold">
          Login
        </Button>
        <Button
          variant="outline"
          className="hidden lg:block px-8 text-white bg-[#171236] font-semibold"
        >
          SignUp
        </Button>
      </div>
    </nav>
  );
}
