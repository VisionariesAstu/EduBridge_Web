import { Button } from "./button";
import Image from "next/image";

export default function CustomButton({ text }: { text: string }) {
  return (
    <Button className="bg-background hover:bg-[#181145] border-2 hover:border-white hover:text-white text-[#2e275f] font-bold w-11/12 py-4 rounded-full relative __className_09586a">
      <div className="absolute -right-7">
        <div className="h-10 w-10 flex border-[5px] border-[#2e275f] justify-center items-center bg-background rounded-full">
          <Image
            alt="open link to Find Tutor"
            width={20}
            height={20}
            src="/open_link.svg"
          />
        </div>
      </div>
      Find Tutor
    </Button>
  );
}
