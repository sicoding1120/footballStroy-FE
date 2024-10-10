"use client";

import React from "react";
import Image from "next/image";
import { signInQoute } from "@/data/signIn-qoute";
import { AnimatePresence, motion } from "framer-motion";
import BreadcrumbsElement from "@/components/auth/breadcrumbs-element";
import InputForm from "@/components/auth/input-form";
import { SignInSchema } from "@/lib/schema.zod";
import { Button } from "@/components/ui/button";


const SignIn = () => {

  
  return (
    <main className="w-full flex h-screen">
      <section className="w-1/2 h-full flex flex-col justify-center gap-6 px-12 py-8">
        <BreadcrumbsElement root={"Sign In"} />
        <h2 className="text-6xl font-semibold capitalize">Sign In</h2>
        <p className="w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum quod doloribus sapiente</p>
        <div className="w-full pr-20 flex flex-col gap-8">
          <InputForm inputName={["email", "password"]} schema={SignInSchema} />
          <Button className="h-12 btn transition-all border-none text-bg2">Sign-in</Button>
          <hr />
        </div>
          <div className=" w-full flex gap-4 pr-20">
          <Button className=" w-1/2 h-12" variant={'outline'}>
            <Image
              src="/icons/google.png"
              alt="alt"
              width={40}
              height={40}
              className="w-8 h-8 object-cover"
            />
          </Button>
            <Button className=" w-1/2 h-12" variant={'outline'}> <Image
              src="/icons/facebook.png"
              alt="alt"
              width={40}
              height={40}
              className="w-8 h-8 object-cover"
            />
          </Button>
          </div>
      </section>
      <RightSide />
    </main>
  );
};

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

const QuoteRightSide = ({ quote, author }: { quote: any; author: any }) => {
  return (
    <div className="w-1/2 h-screen absolute z-[5] bg-black/40 flex justify-center items-center">
      <div className="w-2/3 h-1/2 bg-black/60 rounded-3xl p-8">
        <div className="w-full h-full flex flex-col justify-center items-center gap-12">
          <motion.h3
            key={quote}
            className="text-white text-center text-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >{`" ${quote} "`}</motion.h3>
          <motion.p
            className="text-white text-sm"
            key={author}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            by {author}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

const ImageRightSide = ({ image }: { image: any }) => {
  return (
    <motion.div
      key={image}
      className="inset-0 w-full h-full transition-all"
      initial={{ opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeIn" }}
    >
      <Image
        src={image}
        alt="alt"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default SignIn;
