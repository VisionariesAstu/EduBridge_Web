import { blinker } from "@/styles/fonts";

export default function DetailCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-l-4 border-secondary w-full p-5 flex flex-col space-y-3">
      <h4
        className={`text-[#F1EBFF] ${blinker.className} font-semibold text-2xl lg:text-3xl mb-3 w-10/12`}
      >
        {title}
      </h4>
      <p
        className={`${blinker.className} text-white text-xs lg:text-sm -translate-y-2 mb-3 lg:mb-5 lg:-translate-y-4`}
      >
        {description}
      </p>
    </div>
  );
}
