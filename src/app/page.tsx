"use client";
import Brand from "@/components/landing/brand-section";
import Features from "@/components/landing/features-section";
import HeroSec from "@/components/landing/hero-section";
import React, { useEffect, useRef } from "react";
import About from "@/components/landing/about-section";

export default function Home() {
  const audioRef = useRef(null); // Refs untuk mengakses elemen audio

  let currentSoundIndex: number = 0;

  useEffect(() => {
    const sounds: any = [];

    const audio: any = audioRef.current;
    audio.src = sounds[currentSoundIndex];
    audio.play();

    // Event Listener untuk beralih ke sound berikutnya
    audio.onended = () => {
      ++currentSoundIndex;
      if (currentSoundIndex < sounds.length) {
        audio.src = sounds[currentSoundIndex];
        audio.play(); // Putar lagu berikutnya
      }
    };
  }, [currentSoundIndex]);

  return (
    <main className="w-full h-full">
      <HeroSec />
      <Features />
      <Brand />
      <About />
      <audio ref={audioRef} />
    </main>
  );
}


