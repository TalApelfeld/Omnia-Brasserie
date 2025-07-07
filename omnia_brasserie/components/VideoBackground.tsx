"use client";
import React, { use } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  overlayOpacity?: "light" | "medium" | "dark";
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  overlayOpacity = "medium",
}) => {
  const overlayClass = {
    light: "bg-black bg-opacity-30",
    medium: "bg-black bg-opacity-50",
    dark: "bg-black bg-opacity-70",
  }[overlayOpacity];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Video Background */}
      <video
        className="w-full object-contain lg:object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
