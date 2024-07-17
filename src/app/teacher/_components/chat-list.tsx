import { InputWithIcon } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Profile from "../../../../public/profile.jpg";
import React from "react";
const MessageList = [
  {
    name: "Alice Johnson",
    message: "Let's start the meeting.",
    time: "10:15 AM",
  },
  {
    name: "David Anderson",
    message: "Let's discuss the project in detail this afternoon.",
    time: "2:30 PM",
  },
  {
    name: "John Smith",
    message: "Are you there?",
    time: "3:50 PM",
  },
  {
    name: "James Thomas",
    message: "I have a question about the code implementation.",
    time: "11:00 AM",
  },
  {
    name: "Sophia Martinez",
    message: "I'll be late to the meeting.",
    time: "9:00 AM",
  },
  {
    name: "Michael Brown",
    message: "I finished the task.",
    time: "11:30 AM",
  },
  {
    name: "Olivia Taylor",
    message: "Can we reschedule the call for tomorrow morning?",
    time: "4:20 PM",
  },
  {
    name: "Emily Davis",
    message: "Can you review this document?",
    time: "1:45 PM",
  },
  {
    name: "Ava Lee",
    message: "Good job on the presentation! It was very insightful.",
    time: "3:10 PM",
  },
  {
    name: "Daniel Wilson",
    message: "I'm heading out now.",
    time: "5:00 PM",
  },
];
const ChatList = () => {
  const shortenText = (text: string) => {
    if (text.length > 35) {
      return text.slice(0, 35) + "...";
    }
    return text;
  };
  return (
    <div className="flex flex-col  w-80 p-3 border-r-[1px] border-gray-400 hide-scrollbar  overflow-y-auto">
      <InputWithIcon
        icon={<MagnifyingGlassIcon className="w-5 h-5 " />}
        placeholder="Search"
        className="w-full"
      />
      <div className="flex flex-col w-full mt-6 ">
        {MessageList.map((items, index) => (
          <div className="p-3 hover:bg-gray-300 flex gap-3 justify-center items-center cursor-pointer w-full bg-white border-b-[1px] border-gray-400">
            <Image
              src={Profile}
              alt=""
              className="rounded-full w-10 h-10 border-[1px] border-gray-400"
            />
            <div className="flex flex-col w-full gap-1">
              <div className="flex justify-between items-center w-full">
                <span className="font-bold text-[#25324B] text-sm ">
                  {items.name}
                </span>
                <span className="text-xs">{items.time}</span>
              </div>
              <span className="text-xs text-gray-500">
                {shortenText(items.message)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
