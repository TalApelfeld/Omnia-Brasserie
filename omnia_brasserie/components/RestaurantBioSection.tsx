"use client";

import React from "react";
import { motion } from "motion/react";

export default function RestaurantBioSection() {
  return (
    <div className=" bg-[var(--background)] flex flex-col items-center text-center px-6  py-12">
      <motion.div
        whileInView={{ opacity: [0, 1], transition: { duration: 2 } }}
        className="md:px-28 max-w-3xl"
      >
        <div className="flex w-full justify-center items-center mb-8">
          <span className="h-[2px] w-[40%] bg-[var(--Wine-Red)] rounded-2xl" />

          <h1 className="text-[var(--Wine-Red)] text-2xl  font-hebrew">
            אומניה בראסרי
          </h1>

          <span className="h-[2px] w-[40%] bg-[var(--Wine-Red)] rounded-2xl" />
        </div>
        <div className="text-[var(--Charcoal-gray)] text-lg">
          <p className=" mb-2">
            אומניה בראסרי מביאה לתל אביב חוויית בשרים מודרנית עם שורשים עמוקים.
            כל נתח שמוגש במסעדה מגיע מעדרי אנגוס מובחרים של משפחת דבאח, עם יישון
            מוקפד של עד 45 יום, שמעניק לבשר עומק וטעם ייחודי.
          </p>

          <p className="mb-2">
            המסעדה ממוקמת ברחוב הארבעה, בלב אזור התרבות של תל אביב, ומשלבת עיצוב
            אלגנטי עם אווירה חמה ונגישה. הלקוחות נהנים משירות נעים ולא מתאמץ,
            מהפסקת צהריים מושלמת ועד לארוחת ערב חגיגית.
          </p>

          <p>
            בנוסף, אומניה מציעה הטבות כמו תפריט עסקי משתלם, happy hour בין השעות
            17:00–19:30 פתוחה בשבת – מה שממקם אותה גם כיעד נוח לקהל המקומי
            והבינלאומי כאחד.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
