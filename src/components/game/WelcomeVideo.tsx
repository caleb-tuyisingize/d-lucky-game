"use client";

export default function WelcomeVideo() {
  return (
    <video
      autoPlay
      muted
      playsInline
      className="absolute z-10 inset-0 w-full h-full object-cover"
      onEnded={(e) => (e.currentTarget.style.display = "none")}
    >
      <source src="./welcoming.mp4" type="video/mp4" />
    </video>
  );
}
