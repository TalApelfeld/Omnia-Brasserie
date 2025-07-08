"use client";

import Image from "next/image";
import chefImg from "@/public/chef.jpeg";
import { motion } from "motion/react";

const ChefBioSection: React.FC = () => {
  return (
    <section
      id="chef"
      className="min-h-screen bg-[var(--background)] py-8 md:px-28 px-1 flex flex-col lg:flex-row gap-5 justify-center items-center text-[var(--Wine-Red)]  text-center"
    >
      <motion.div
        whileInView={{ opacity: [0, 1], transition: { duration: 2 } }}
        className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-7xl border-[1.5px] border-[var(--Wine-Red)] rounded-lg p-6 lg:p-12  shadow-lg"
      >
        <div>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl  text-navy mb-4 ">
              אסיל שריף – שף מסעדת אומניה בראסרי
            </h1>
          </header>
          <div className="space-y-6 text-[var(--Very-Dark-gray)] text-lg leading-relaxed">
            <p>
              שמו של השף אסיל שריף כבר מוכר היטב בסצנת הקולינריה המקומית. את
              דרכו החל בגליל, והצליח לפרוץ לתודעה הבינלאומית בתוכנית &quot;טופ
              שף דובאי&quot;, שם הרשים את השופטים בשילובים מפתיעים ובכישרון
              מולד.
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
      </motion.div>
    </section>
  );
};

export default ChefBioSection;
