"use client";
import { motion } from "motion/react";

export default function MenuSection() {
  return (
    <div className=" bg-[var(--background)] text-center py-12 px-6">
      <motion.div
        whileInView={{ opacity: [0, 1], transition: { duration: 2 } }}
        className="md:px-28 max-w-3xl mx-auto"
      >
        <div className="flex w-full justify-center items-center mb-8">
          <span className="h-[2px] w-[40%] bg-[var(--Wine-Red)] rounded-2xl" />

          <h1 className="text-[var(--Wine-Red)] text-2xl">
            תפריט מנות פתיחה ועיקריות
          </h1>

          <span className="h-[2px] w-[40%] bg-[var(--Wine-Red)] rounded-2xl" />
        </div>
        <div className="text-[var(--Charcoal-gray)] text-lg">
          <p className="mb-2">
            התפריט של אומניה מציג איזון בין נגיעות גליליות מסורתיות למנות
            מוקפדות בסגנון ביסטרו.
          </p>

          <p className="mb-6">
            בין מנות הפתיחה תמצאו סלט עגבניות עם שנקליש, קובה נייה בלחם שראק,
            טרטר בקר עם באבא גנוש, כל מנה נבנית בקפידה, עם דגש על חומרי גלם
            איכותיים ופרזנטציה מדויקת.
          </p>

          <p className="mb-4">
            בעיקריות מככבים נתחים מובחרים שנחתכים במיוחד עבור המסעדה:
          </p>

          <p className="mb-6">
            <span className="text-[var(--Rich-Sepia)]">טומהוק</span>– נתח עצום
            ומרשים המוגש עם העצם הארוכה, משלב עסיסיות של אנטריקוט עם מראה דרמטי
            שמגניב את השולחן.
          </p>

          <p className="mb-6">
            <span className="text-[var(--Rich-Sepia)]">פורטרהאוס</span>– נתח
            דו-צדדי שמחבר בין פילה רך לסינטה העטופה בפס שומן – הבחירה המושלמת
            למי שלא רוצה לבחור.
          </p>

          <p className="mb-6">
            <span className="text-[var(--Rich-Sepia)]">ניו יורק</span>– נתח
            סינטה קלאסי, דק יותר ובעל מרקם בשרני ונקי.
          </p>
          <p>
            לצדם תמצאו גם קלאסיקות נוספות כמו המבורגר 220 גרם, שניצל שייטל, קבב
            אדנה עסיסי, ומבחר תוספות טריות ומפתיעות. לסיום, מחכים לכם קינוחים
            מושקעים
          </p>
        </div>
      </motion.div>
    </div>
  );
}
