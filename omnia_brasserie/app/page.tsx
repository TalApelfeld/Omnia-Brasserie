import ChefBioSection from "@/components/ChefBioSection";
import MenuButton from "@/components/MenuButton";
import RestaurantBioSection from "@/components/RestaurantBioSection";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import VideoBackground from "@/components/VideoBackground";
import Image from "next/image";
import { Suspense } from "react";

const sampleImages = [
  "/omnia_photos/omnia_photo_1.jpeg",
  "/omnia_photos/omnia_photo_2.jpeg",
  "/omnia_photos/omnia_photo_3.jpeg",
  "/omnia_photos/omnia_photo_4.jpeg",
  "/omnia_photos/omnia_photo_5.jpeg",
  "/omnia_photos/omnia_photo_6.jpeg",
  "/omnia_photos/omnia_photo_7.jpeg",
  "/omnia_photos/omnia_photo_8.jpeg",
  "/omnia_photos/omnia_photo_9.jpeg",
  "/omnia_photos/omnia_photo_10.jpeg",
  "/omnia_photos/omnia_photo_11.jpeg",
  "/omnia_photos/omnia_photo_12.jpeg",
  "/omnia_photos/omnia_photo_13.jpeg",
  "/omnia_photos/omnia_photo_14.jpeg",
];

export default function Page() {
  console.log("Server render");
  return (
    <>
      {/* Fixed header */}
      <header className="fixed top-0 bg-[var(--header-background)] h-[10%] w-full flex justify-center z-[1]">
        <div className="w-[150px] h-full flex items-center justify-center ">
          <Image src="/logo.png" alt="logo" width={500} height={500} />
        </div>
      </header>

      {/* Fixed Button */}
      <Suspense fallback={<div>Loading...</div>}>
        <MenuButton />
      </Suspense>

      <main>
        {/* 1) Video section*/}
        <section>
          <VideoBackground
            videoSrc="/videos/omniaVideo.MP4"
            overlayOpacity={"light"}
          ></VideoBackground>
        </section>

        {/* 2) Chef section */}
        <ChefBioSection />

        {/* 3) Restaurant carousel */}
        <section>
          <RestaurantCarousel images={sampleImages} />
        </section>

        {/* 4) Omnia Resturant BIO */}
        <section>
          <RestaurantBioSection />
        </section>

        {/* 5) Something */}
        <section className="h-[100vh] bg-[var(--background)]">
          תפריט – מנות פתיחה ועיקריות התפריט של אומניה מציג איזון בין נגיעות
          גליליות מסורתיות למנות מוקפדות בסגנון ביסטרו. בין מנות הפתיחה תמצאו
          סלט עגבניות עם שנקליש, קובה נייה בלחם שראק, טרטר בקר עם באבא גנוש,. כל
          מנה נבנית בקפידה, עם דגש על חומרי גלם איכותיים ופרזנטציה מדויקת.
          בעיקריות מככבים נתחים מובחרים שנחתכים במיוחד עבור המסעדה: טומהוק – נתח
          עצום ומרשים המוגש עם העצם הארוכה, משלב עסיסיות של אנטריקוט עם מראה
          דרמטי שמגניב את השולחן. פורטרהאוס – נתח דו-צדדי שמחבר בין פילה רך
          לסינטה העטופה בפס שומן – הבחירה המושלמת למי שלא רוצה לבחור. ניו יורק –
          נתח סינטה קלאסי, דק יותר ובעל מרקם בשרני ונקי. לצדם תמצאו גם קלאסיקות
          נוספות כמו המבורגר 220 גרם, שניצל שייטל, קבב אדנה עסיסי, ומבחר תוספות
          טריות ומפתיעות. לסיום, מחכים לכם קינוחים מושקעים
        </section>

        <footer></footer>
      </main>
    </>
  );
}
