import Image from "next/image";

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--carousel-background)] py-6">
      <div className="w-[250px] flex items-center justify-center translate-y-[-25%]">
        <Image src="/logo.png" alt="logo" width={500} height={500} />
      </div>

      <div className="w-[90%] mx-auto bg-gray-100 rounded-lg p-6 translate-y-[-20%]">
        {/* Location Section */}
        <div className="flex items-center justify-between py-4 border-b border-gray-300">
          <div className="text-right">
            <div className="text-lg font-semibold text-gray-800 mb-1">
              מיקום
            </div>
            <div className="text-sm text-gray-600">רעננה, תל אביב-יפו</div>
            <a href="#" className="text-blue-400 text-sm hover:underline">
              נווט למכונית
            </a>
          </div>
          {/* <MapPin className="w-6 h-6 text-gray-600" /> */}
        </div>

        {/* Phone Section */}
        <div className="flex items-center justify-between py-4 border-b border-gray-300">
          <div className="text-right">
            <div className="text-lg font-semibold text-gray-800 mb-1">
              טלפון
            </div>
            <a href="tel:037715793" className="text-blue-400 hover:underline">
              037715793
            </a>
          </div>
          {/* <Phone className="w-6 h-6 text-gray-600" /> */}
        </div>

        {/* Hours Section */}
        <div className="flex items-start justify-between pt-4">
          <div className="text-right flex-1">
            <div className="text-lg font-semibold text-gray-800 mb-4">
              ימי פעילות
            </div>

            <div className="space-y-3 text-sm">
              {/* Sunday */}
              <div className="flex justify-between items-center">
                <div className="text-gray-800">היום</div>
                <div className="text-left">
                  <div className="text-gray-600">12:00 - 17:00</div>
                  <div className="text-blue-400">17:00 - 19:30</div>
                  <div className="text-gray-600">19:30 - 22:00</div>
                </div>
                <div className="text-blue-400 text-xs">
                  <div>עסקינות</div>
                  <div>Happy hour</div>
                </div>
              </div>

              {/* Monday */}
              <div className="flex justify-between items-center">
                <div className="text-gray-800">יום שני</div>
                <div className="text-left">
                  <div className="text-gray-600">12:00 - 17:00</div>
                  <div className="text-blue-400">17:00 - 19:30</div>
                  <div className="text-gray-600">19:30 - 22:00</div>
                </div>
                <div className="text-blue-400 text-xs">
                  <div>עסקינות</div>
                  <div>Happy hour</div>
                </div>
              </div>

              {/* Tuesday */}
              <div className="flex justify-between items-center">
                <div className="text-gray-800">יום שלישי</div>
                <div className="text-left">
                  <div className="text-gray-600">12:00 - 17:00</div>
                  <div className="text-blue-400">17:00 - 19:30</div>
                  <div className="text-gray-600">19:30 - 22:00</div>
                </div>
                <div className="text-blue-400 text-xs">
                  <div>עסקינות</div>
                  <div>Happy hour</div>
                </div>
              </div>

              {/* Wednesday */}
              <div className="flex justify-between items-center">
                <div className="text-gray-800">יום רביעי</div>
                <div className="text-left text-gray-600">
                  <div>12:00 - 23:00</div>
                </div>
              </div>

              {/* Thursday */}
              <div className="flex justify-between items-center">
                <div className="text-gray-800">יום חמישי</div>
                <div className="text-left text-gray-600">
                  <div>12:00 - 23:00</div>
                </div>
              </div>

              {/* Friday */}
              <div className="flex justify-between items-center">
                <div className="text-gray-800">יום שישי</div>
                <div className="text-left">
                  <div className="text-gray-600">12:00 - 17:00</div>
                  <div className="text-blue-400">17:00 - 22:00</div>
                </div>
                <div className="text-blue-400 text-xs">
                  <div>עסקינות</div>
                </div>
              </div>

              {/* Saturday */}
              <div className="flex justify-between items-center">
                <div className="text-gray-800">יום שבת</div>
                <div className="text-left">
                  <div className="text-gray-600">12:00 - 17:00</div>
                  <div className="text-blue-400">17:00 - 19:30</div>
                  <div className="text-gray-600">19:30 - 22:00</div>
                </div>
                <div className="text-blue-400 text-xs">
                  <div>עסקינות</div>
                  <div>Happy hour</div>
                </div>
              </div>
            </div>
          </div>
          {/* <Clock className="w-6 h-6 text-gray-600 mt-1" /> */}
        </div>
      </div>
    </div>
  );
}
