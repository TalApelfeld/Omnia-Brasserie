"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function MenuButton() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      {/* Open Button (always visible when menu is closed) */}
      {!menuClicked && (
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
      )}

      {/* AnimatePresence must wrap around conditional motion.div */}
      <AnimatePresence>
        {menuClicked && (
          <motion.div
            key="menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1 }}
            className="fixed flex flex-col justify-center gap-3 right-0 h-screen z-[50] bg-[var(--menu-background)] w-[80%] backdrop-blur-sm"
          >
            <Link
              href="/menus"
              className="text-white text-xl font-bold py-4 pr-10"
            >
              תפריטים
            </Link>
            <Link
              href="/events"
              className="text-white text-xl font-bold py-4 px-10"
            >
              אירועים
            </Link>
            <Link
              href="/contact"
              className="text-white text-xl font-bold py-4 px-10"
            >
              צור קשר
            </Link>
            <Link
              href="/reservations"
              className="text-white text-xl font-bold py-4 px-10"
            >
              הזמנות
            </Link>
            <Link
              href="/delivery"
              className="text-white text-xl font-bold py-4 px-10"
            >
              משלוחים
            </Link>

            {/* Close button */}
            <div
              className="fixed right-6 top-12 flex items-center justify-center bg-[var(--Wine-Red)] hover:bg-red-600/90 p-3 rounded-[6px]  z-30 cursor-pointer transition-all duration-300"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
