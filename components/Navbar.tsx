"use client";

import { GiCampingTent } from "react-icons/gi";
import { RxDividerVertical } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";

const menus = [
  { id: 1, title: "로그인", url: "/users/login" },
  { id: 2, title: "회원가입", url: "/users/signup" },
  { id: 3, title: "FAQ", url: "/faqs" },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <nav className="h-20 border border-b-gray-20 w-full shadow-sm p-4 sm:px-10 flex justify-between align-middle fixed top-0 bg-white">
      <div className="grow basis-0 hidden my-auto font-semibold text-lg sm:text-xl cursor-pointer sm:flex sm:gap-2 text-main-color">
        <GiCampingTent className="text-5xl" />
        <div className="my-auto">Mijubnb</div>
      </div>
      <div className="w-full sm:w-[280px] border border-gray-200 rounded-full shadow hover:shadow-lg cursor-pointer flex justify-between pl-6 pr-2">
        <div className="flex justify-center gap-1">
          <div className="my-auto font-semibold text-sm">어디든지</div>
          <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
          <div className="my-auto font-semibold text-sm">언제든</div>
          <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
          <div className="my-auto font-semibold text-sm">게스트</div>
        </div>
        <button
          type="button"
          className="bg-main-color text-white rounded-full w-8 h-8 my-auto"
        >
          <IoSearch className="text-lg m-auto font-semibold" />
        </button>
      </div>
      <div className="grow basis-0 hidden sm:flex gap-4 justify-end align-middle my-auto">
        <button
          type="button"
          className="font-semibold text-sm my-auto px-4 py-3 hover:bg-hover-color hover:text-white rounded-full"
        >
          당신의 공간을 등록해주세요
        </button>
        <button
          type="button"
          onClick={() => setShowMenu((val) => !val)}
          className="flex align-middle gap-3 rounded-full border border-gray-20 shadow-sm px-4 py-3 my-auto hover:shadow-lg relative"
        >
          <GiHamburgerMenu />
          <AiOutlineUser />
        </button>
        {showMenu && (
          <div className="border border-gray-200 shadow-lg py-2 flex flex-col absolute top-16 bg-white w-40 rounded-lg right-12">
            {menus?.map((menu) => (
              <button
                type="button"
                key={menu.id}
                onClick={() => router.push(menu.url)}
                className="h-10 hover:bg-hover-color hover:text-white text-sm text-gray-700 text-center"
              >
                {menu.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
