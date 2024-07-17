import React from "react";
import Header from "../_components/header";
import { InputWithIcon } from "@/components/ui/input";
import {
  DotsVerticalIcon,
  DrawingPinFilledIcon,
  EyeOpenIcon,
  FaceIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PaperPlaneIcon,
  PilcrowIcon,
  PinTopIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Profile from "../../../../public/profile.jpg";
import { global } from "styled-jsx/css";
import ChatList from "../_components/chat-list";
const ChatMessages = [
  {
    turn: "You",
    message: "How are you?",
    time: "20 min ago",
  },
  {
    turn: "John",
    message: "I'm fine.",
    time: "19 min ago",
  },
  {
    turn: "You",
    message: "Did you finish the report for the project?",
    time: "18 min ago",
  },
  {
    turn: "John",
    message: "Yes, I did. I sent it to you via email.",
    time: "17 min ago",
  },
  {
    turn: "You",
    message: "Great! I'll review it by the end of the day.",
    time: "16 min ago",
  },
  {
    turn: "John",
    message: "Perfect. Let me know if you have any feedback.",
    time: "15 min ago",
  },
  {
    turn: "You",
    message: "Will do. Thanks!",
    time: "14 min ago",
  },
  {
    turn: "John",
    message: "You're welcome.",
    time: "13 min ago",
  },
  {
    turn: "You",
    message: "By the way, did you hear about the new project they're planning?",
    time: "12 min ago",
  },
  {
    turn: "John",
    message: "No, I haven't. What is it about?",
    time: "11 min ago",
  },
  {
    turn: "You",
    message:
      "It's a new marketing campaign. They want to launch it next quarter.",
    time: "10 min ago",
  },
  {
    turn: "John",
    message: "That sounds interesting. Do you know who will be leading it?",
    time: "9 min ago",
  },
  {
    turn: "You",
    message:
      "Yes, Sarah will be in charge. She mentioned she might need our help with the data analysis.",
    time: "8 min ago",
  },
  {
    turn: "John",
    message: "I'm always up for a new challenge. When do we start?",
    time: "7 min ago",
  },
  {
    turn: "You",
    message:
      "She's having a meeting next week to discuss the details. I'll forward you the invite.",
    time: "6 min ago",
  },
  {
    turn: "John",
    message: "Thanks! I appreciate it.",
    time: "5 min ago",
  },
  {
    turn: "You",
    message: "No problem. See you at the meeting!",
    time: "4 min ago",
  },
  {
    turn: "John",
    message: "See you then!",
    time: "3 min ago",
  },
];

const Messages = () => {
  return (
    <div className="flex w-full flex-col mt-20">
      <div className="fixed top-0 right-0 left-72 z-10">
        <Header name="Message" />
      </div>

      <div className="flex w-full h-[calc(100vh-20px)]  ">
        <ChatList />
        <div className="flex-grow pr-10 hide-scrollbar overflow-y-auto relative">
          <div className="flex justify-between items-center py-3 px-5 border-b border-gray-400 w-full">
            <div className="flex gap-2">
              <Image
                src={Profile}
                alt=""
                className="rounded-full w-14 h-14 border-[1px] border-gray-400"
              />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-[#25324B]  ">John Doe</span>
                <span className=" text-gray-500">Recruiter at Nomad</span>
              </div>
            </div>
            <div className="flex gap-3 text-gray-500">
              <DrawingPinFilledIcon className="cursor-pointer w-5 h-5" />
              <DotsVerticalIcon className="cursor-pointer w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full justify-center items-center mt-9 ">
            <Image
              src={Profile}
              alt=""
              className="rounded-full w-20 h-20 border-[1px] border-gray-400"
            />
            <span className="font-bold text-[#25324B] text-lg">John Doe</span>
            <span className="text-sm text-gray-700">Recruiter at Nomad</span>
            <p className="text-sm text-gray-500">
              This is the very beginning of your direct message with Jan Mayer
            </p>
          </div>
          <div className="w-full px-10 mt-5 flex gap-5">
            <div className="bg-gray-400 w-full h-[1px]"></div>
            <div className="bg-gray-400 w-full h-[1px]"></div>
          </div>
          <div className="px-5 mt-5 flex flex-col gap-3">
            {ChatMessages.map((items, index) => (
              <>
                {items.turn !== "You" ? (
                  <div className="flex gap-2 w-full justify-end ">
                    <div className="flex flex-col justify-center w-full items-end">
                      <span className="font-bold text-[#25324B] text-sm ">
                        You
                      </span>
                      <span className="text-sm text-gray-500 w-3/4 text-right">
                        {items.message}
                      </span>
                    </div>
                    <Image
                      src={Profile}
                      alt=""
                      className="rounded-full w-8 h-8 border-[1px] border-gray-400"
                    />
                  </div>
                ) : (
                  <div className="flex gap-2 w-full ">
                    <Image
                      src={Profile}
                      alt=""
                      className="rounded-full w-8 h-8 border-[1px] border-gray-400"
                    />
                    <div className="flex flex-col justify-center w-full gap-2">
                      <span className="font-bold text-[#25324B] text-sm ">
                        {items.turn}
                      </span>
                      <div className="text-sm text-gray-500 w-3/4 ">
                        <div className="border border-gray-400 p-1 w-fit rounded-r-md rounded-br-md rounded-bl-md">
                          {items.message}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="flex relative w-full mt-3 mb-5">
            <div className="flex w-full relative items-center mx-5">
              <InputWithIcon
                icon={<LockClosedIcon color="gray" className="w-5 h-5" />}
                type="text"
                placeholder="Message"
                className="w-full h-12"
              />
              <div className="absolute right-3 flex gap-4 items-center">
                <FaceIcon color="gray" className="cursor-pointer w-5 h-5" />
                <div className="flex bg-primary py-1 px-2">
                  <PaperPlaneIcon
                    color="white"
                    className="cursor-pointer w-5 h-5 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
