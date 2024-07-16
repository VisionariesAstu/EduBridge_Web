import { Button } from "./button";

export default function CustomButton({
  text,
  primary = false,
}: {
  text: string;
  primary?: boolean;
}) {
  const buttonStyle = !primary
    ? "bg-background hover:bg-[#181145] border-2 hover:border-white hover:text-white text-[#2e275f]"
    : "bg-[#181145] hover:bg-background border-2 hover:border-white hover:text-[#2e275f] text-white ";

  const iconStyle = !primary
    ? "bg-background border-[#2e275f]"
    : "border-[#F1EBFF] bg-[#2e275f]";

  const color = !primary ? "#2e275f" : "#F1EBFF";

  return (
    <Button
      className={`${buttonStyle} font-bold w-11/12 py-4 rounded-full relative __className_09586a`}
    >
      <div className="absolute -right-7">
        <div
          className={`${iconStyle} h-10 w-10 flex border-[5px] justify-center items-center rounded-full`}
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="mingcute:arrow-right-up-fill" clip-path="url(#clip0_114_16)">
              <g id="Group">
                <path
                  id="Vector"
                  d="M22.5 6.14844C22.9973 6.14844 23.4742 6.34549 23.8258 6.69624C24.1774 7.04699 24.375 7.52271 24.375 8.01875V17.9938C24.375 18.4898 24.1774 18.9655 23.8258 19.3163C23.4742 19.667 22.9973 19.8641 22.5 19.8641C22.0027 19.8641 21.5258 19.667 21.1742 19.3163C20.8225 18.9655 20.625 18.4898 20.625 17.9938V12.5337L9.25374 23.8765C8.89995 24.217 8.42623 24.4053 7.93461 24.4008C7.44299 24.3964 6.97281 24.1994 6.62533 23.8525C6.27785 23.5056 6.08088 23.0364 6.07685 22.546C6.07281 22.0556 6.26202 21.5832 6.60374 21.2306L17.9712 9.88906H12.5C12.0027 9.88906 11.5258 9.69201 11.1742 9.34126C10.8225 8.99051 10.625 8.51479 10.625 8.01875C10.625 7.52271 10.8225 7.04699 11.1742 6.69624C11.5258 6.34549 12.0027 6.14844 12.5 6.14844H22.5Z"
                  fill={color}
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_114_16">
                <rect
                  width="30"
                  height="29.925"
                  fill="white"
                  transform="translate(0 0.537506)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      {text}
    </Button>
  );
}
