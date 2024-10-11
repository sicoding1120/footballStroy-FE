'use client'

import { signInQoute } from "@/data/signIn-qoute";
import { AnimatePresence } from "framer-motion";
import React from "react";
import ImageRightSide from "./img-rightside-auth";
import QuoteRightSide from "./qoutes-auth";

const RightSide = () => {
    
  const [currentQuote, setCurrentQuote] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * signInQoute.length);
      } while (randomIndex === currentQuote);
      setCurrentQuote(randomIndex);
    }, 8000); // Durasi 5 detik

    return () => clearInterval(interval);
  }, [currentQuote]);

  return (
    <AnimatePresence>
      <section className="w-1/2 h-full">
        <QuoteRightSide
          quote={signInQoute[currentQuote].quote}
          author={signInQoute[currentQuote].author}
        />
        <ImageRightSide image={signInQoute[currentQuote].img} />
      </section>
    </AnimatePresence>
  );
};

export default RightSide;
