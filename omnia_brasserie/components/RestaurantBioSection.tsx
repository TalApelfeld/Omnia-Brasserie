export default function RestaurantBioSection() {
  return (
    <div className="h-screen bg-amber-300 flex flex-col items-center text-center p-6">
      <div className="flex gap-1 w-full justify-center">
        {/* <span
              className="h-[3px] w-[40%] bg-[var(--Wine-Red)] rounded-2xl"
              style={{ transform: "translateY(200%)" }}
            /> */}

        <h1 className="text-[var(--Wine-Red)] text-2xl mb-5 font-hebrew">
          אומניה בראסרי
        </h1>

        {/* <span
              className="h-[3px] w-[40%] bg-[var(--Wine-Red)] rounded-2xl"
              style={{ transform: "translateY(200%)" }}
            /> */}
      </div>
      <p className="text-[var(--Charcoal-gray)] text-lg font-hebrew">
        אומניה בראסרי מביאה לתל אביב חוויית בשרים מודרנית עם שורשים עמוקים. כל
        נתח שמוגש במסעדה מגיע מעדרי אנגוס מובחרים של משפחת דבאח, עם יישון מוקפד
        של עד 45 יום, שמעניק לבשר עומק וטעם ייחודי. המסעדה ממוקמת ברחוב הארבעה,
        בלב אזור התרבות של תל אביב, ומשלבת עיצוב אלגנטי עם אווירה חמה ונגישה.
        הלקוחות נהנים משירות נעים ולא מתאמץ, מהפסקת צהריים מושלמת ועד לארוחת ערב
        חגיגית. בנוסף, אומניה מציעה הטבות כמו תפריט עסקי משתלם, happy hour בין
        השעות 17:00–19:30 פתיחה בשבת – מה שממקם אותה גם כיעד נוח לקהל המקומי
        והבינלאומי כאחד.
      </p>
    </div>
  );
}
