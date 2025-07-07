import ChefBioSection from "@/components/ChefBioSection";
import Footer from "@/components/Footer";
import MenuButton from "@/components/MenuButton";
import MenuSection from "@/components/MenuSection";
import RestaurantBioSection from "@/components/RestaurantBioSection";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import VideoBackground from "@/components/VideoBackground";
import Image from "next/image";
import { Suspense } from "react";

const resturantImages = [
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

const foodImages = [
  "/omnia_food/food_1.jpeg",
  "/omnia_food/food_2.jpeg",
  "/omnia_food/food_3.jpeg",
  "/omnia_food/food_4.jpeg",
  "/omnia_food/food_5.jpeg",
  "/omnia_food/food_6.jpeg",
  "/omnia_food/food_7.jpeg",
  "/omnia_food/food_8.jpeg",
  "/omnia_food/food_9.jpeg",
  "/omnia_food/food_10.jpeg",
  "/omnia_food/food_11.jpeg",
  "/omnia_food/food_12.jpeg",
  "/omnia_food/food_13.jpeg",
  "/omnia_food/food_14.jpeg",
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
          <RestaurantCarousel images={resturantImages} />
        </section>

        {/* 4) Omnia Resturant BIO */}
        <section>
          <RestaurantBioSection />
        </section>

        <section>
          <RestaurantCarousel images={foodImages} />
        </section>

        {/* 6) Menu */}
        <section>
          <MenuSection />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
