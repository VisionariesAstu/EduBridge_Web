import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/Edu Bridge Logo White.png";

export default function LandingHeader() {
  return (
    <nav className="flex justify-between items-center p-4 lg:w-10/12 mx-auto">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="Logo" width={55} height={55} />
      </div>
      <div className="flex items-center space-x-4">
        <Link href={"/auth/login"}>
          <Button className="px-8 text-white bg-secondary hover:bg-[#171236] font-semibold">
            Login
          </Button>
        </Link>
        <Link href={"/auth/signup"}>
          <Button
            variant="outline"
            className="hidden lg:block px-8 text-white bg-[#171236] font-semibold"
          >
            SignUp
          </Button>
        </Link>
      </div>
    </nav>
  );
}
