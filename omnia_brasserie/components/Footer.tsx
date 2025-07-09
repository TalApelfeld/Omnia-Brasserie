import Image from "next/image";

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--Wine-Red)] py-6">
      <div className="w-[250px] flex items-center justify-center translate-y-[-25%]">
        <Image src="/logoWhite.png" alt="logo" width={500} height={500} />
      </div>

      {/* Inventation and Details */}
      <div className="translate-y-[-20%]">
        <div className="text-center text-[var(--background)] text-lg font-bold">
          <p>בקרו אותנו !</p>
          <p>תהנו מעסקיות ו - Happy Hour לאורך השבוע</p>
        </div>

        {/* Details - Location, Phone, Hours */}
        <div className="w-[90%] h-[600px]  bg-[var(--Wine-Red)] rounded-lg  ">
          <div className="flex items-center gap-4 py-4 border-b border-gray-300">
            {/* Location Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#c9c3b3"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            {/* Divider */}
            <div className="w-[1px] bg-gray-300 h-[80px]"></div>

            {/* Location Section */}
            <div className="text-right">
              <div className="text-lg font-semibold text-[var(--background)]  mb-1">
                מיקום
              </div>
              <div className="text-sm text-[var(--header-background)]">
                גבעון 19, תל אביב-יפו
              </div>
              <a
                href="https://www.google.com/maps?q=32.0701003,34.7856039"
                className="text-blue-400 text-sm hover:underline"
              >
                נווט לכתובת
              </a>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center gap-4 py-4 border-b border-gray-300">
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#c9c3b3"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            {/* Divider */}
            <div className="w-[1px] bg-gray-300 h-[80px]"></div>

            {/* Phone details Section */}
            <div className="text-right">
              <div className="text-lg font-semibold text-[var(--background)] mb-1">
                טלפון
              </div>
              <a href="tel:037715793" className="text-blue-400 hover:underline">
                037715793
              </a>
            </div>
          </div>

          {/* Hours Section */}
          <div className="flex items-start gap-4 pt-4">
            {/* Clock Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#c9c3b3"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            {/* Divider */}
            <div className="w-[1px] bg-gray-300 h-[440px]"></div>

            {/* Hours Details Section */}
            <div className="text-right flex-1">
              <div className="text-lg font-semibold text-[var(--background)] mb-4">
                ימי פעילות
              </div>

              <div className="space-y-3 text-sm">
                {/* Sunday */}
                <div className="grid grid-cols-[1fr_auto_1fr]  ">
                  {/* Day */}
                  <div className="text-[var(--header-background)]">
                    יום ראשון
                  </div>

                  {/* Hours */}
                  <div className="text-left">
                    <div className="text-[var(--background)]">
                      12:00 - 17:00
                    </div>
                    <div className="text-[var(--background)]">
                      17:00 - 22:00
                    </div>
                  </div>

                  {/* Happy Hour OR Lunch */}
                  <div className="text-blue-400 text-xs">
                    <div className="place-self-center">עסקיות</div>
                  </div>
                </div>

                {/* Monday */}
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="text-[var(--header-background)]">יום שני</div>
                  <div className="text-left">
                    <div className="text-[var(--background)]">
                      12:00 - 17:00
                    </div>
                    <div className="text-[var(--background)]">
                      17:00 - 19:30
                    </div>
                    <div className="text-[var(--background)]">
                      19:30 - 22:00
                    </div>
                  </div>
                  <div className="text-blue-400 text-xs flex flex-col gap-1.5">
                    <div className="place-self-center">עסקיות</div>
                    <div className="place-self-center">Happy hour</div>
                  </div>
                </div>

                {/* Tuesday */}
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="text-[var(--header-background)]">
                    יום שלישי
                  </div>
                  <div className="text-left">
                    <div className="text-[var(--background)]">
                      12:00 - 17:00
                    </div>
                    <div className="text-[var(--background)]">
                      17:00 - 19:30
                    </div>
                    <div className="text-[var(--background)]">
                      19:30 - 22:00
                    </div>
                  </div>
                  <div className="text-blue-400 text-xs flex flex-col gap-1.5">
                    <div className="place-self-center">עסקיות</div>
                    <div className="place-self-center">Happy hour</div>
                  </div>
                </div>

                {/* Wednesday */}
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="text-[var(--header-background)]">
                    יום רביעי
                  </div>
                  <div className="text-left">
                    <div className="text-[var(--background)]">
                      12:00 - 17:00
                    </div>
                    <div className="text-[var(--background)]">
                      17:00 - 19:30
                    </div>
                    <div className="text-[var(--background)]">
                      19:30 - 22:00
                    </div>
                  </div>
                  <div className="text-blue-400 text-xs flex flex-col gap-1.5">
                    <div className="place-self-center">עסקיות</div>
                    <div className="place-self-center">Happy hour</div>
                  </div>
                </div>

                {/* Thursday */}
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="text-[var(--header-background)]">
                    יום חמישי
                  </div>
                  <div className="text-left">
                    <div className="text-[var(--background)]">
                      12:00 - 17:00
                    </div>
                    <div className="text-[var(--background)]">
                      17:00 - 19:30
                    </div>
                    <div className="text-[var(--background)]">
                      19:30 - 22:00
                    </div>
                  </div>
                  <div className="text-blue-400 text-xs flex flex-col gap-1.5">
                    <div className="place-self-center">עסקיות</div>
                    <div className="place-self-center">Happy hour</div>
                  </div>
                </div>

                {/* Friday */}
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="text-[var(--header-background)]">
                    יום שישי
                  </div>
                  <div className="text-left">
                    <div className="text-[var(--background)] place-self-center">
                      12:00 - 23:00
                    </div>
                  </div>
                </div>

                {/* Saturday */}
                <div className="grid grid-cols-[1fr_auto_1fr]">
                  <div className="text-[var(--header-background)]">יום שבת</div>
                  <div className="text-left">
                    <div className="text-[var(--background)]">
                      12:00 - 23:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
