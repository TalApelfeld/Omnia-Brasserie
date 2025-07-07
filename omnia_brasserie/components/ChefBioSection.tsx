"use client";

import React from "react";
import Image from "next/image";
import chefImg from "@/public/chef.jpeg";

const ChefBioSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[var(--background)] py-12 px-6 flex flex-col lg:flex-row gap-5 justify-center items-center text-[var(--Wine-Red)] font-hebrew text-center">
      <div className="">
        <header className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 ">
            השף אסיל שריף
          </h2>
        </header>
        <div className="space-y-6 text-[var(--Charcoal-gray)] text-lg leading-relaxed">
          <p>
            שמו של השף אסיל שריף כבר מוכר היטב בסצנת הקולינריה המקומית. את דרכו
            החל בגליל, והצליח לפרוץ לתודעה הבינלאומית בתוכנית &quot;טופ שף
            דובאי&quot;, שם הרשים את השופטים בשילובים מפתיעים ובכישרון מולד.
          </p>
          <p>
            כיום, שריף מוביל את המטבח של אומניה בראסרי בתל אביב, כשהוא שומר על
            טביעת האצבע הגלילית לצד דיוק ואסתטיקה של בראסרי אירופאי.
          </p>
          <p>
            לצדו פועל המסעדן חמודי ברגות – איש קולינריה מנוסה שחתום על הצלחות
            כמו אלמרסא בעכו, ראסיף ובר סמא. ביחד הם יוצרים שפה קולינרית עשירה,
            מרתקת ובעיקר – טעימה.
          </p>
        </div>
      </div>

      <Image
        src={chefImg}
        alt="chef img"
        height={500}
        width={500}
        className="object-cover [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1),rgba(0, 0, 0, 0.8),rgba(0,0,0,0))] rounded-[3px]"
      />
    </section>
  );
};

export default ChefBioSection;
