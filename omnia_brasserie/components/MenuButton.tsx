"use client";

import Link from "next/link";
import { useState } from "react";

export default function MenuButton() {
  const [menuClicked, setMenuClicked] = useState(false);

  return menuClicked ? (
    ////  Open Menu - Layout
    <div className="fixed h-screen z-[20] bg-[var(--menu-background)] w-full backdrop-blur-sm">
      <div className="mt-[25%] bg-white/10 backdrop-blur-md rounded-3xl mx-8 p-8 flex flex-col items-center justify-center gap-8">
        <Link
          href="/menus"
          className="text-white text-2xl font-bold py-4 px-8 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 text-center w-48"
        >
          תפריטים
        </Link>
        <Link
          href="/events"
          className="text-white text-2xl font-bold py-4 px-8 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 text-center w-48"
        >
          אירועים
        </Link>
        <Link
          href="/contact"
          className="text-white text-2xl font-bold py-4 px-8 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 text-center w-48"
        >
          צור קשר
        </Link>
        <Link
          href="/reservations"
          className="text-white text-2xl font-bold py-4 px-8 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 text-center w-48"
        >
          הזמנות
        </Link>
        <Link
          href="/delivery"
          className="text-white text-2xl font-bold py-4 px-8 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 text-center w-48"
        >
          משלוחים
        </Link>
      </div>

      {/* Close button */}
      <div
        className="fixed right-6 top-12 flex items-center justify-center bg-red-500/80 hover:bg-red-600/90 p-3 rounded-full z-30 cursor-pointer transition-all duration-300"
        onClick={() => setMenuClicked(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          width={"10px"}
          height={"10px"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  ) : (
    //// Closed Menu - Layout (Button)
    <div
      className="fixed right-6 top-[5%] translate-y-[-45%] flex items-center justify-center gap-2 bg-[#00000069] hover:bg-[#aca0a0] p-1 rounded-xl z-20 cursor-pointer transition-all duration-300"
      onClick={() => setMenuClicked(true)}
    >
      <span className="text-[white]">HE</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        width={25}
        height={25}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
