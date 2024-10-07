import { ImageBoxProps } from "@/interface/props.interface";
import { ImageBoxData } from "@/data/about";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { imagesPlayer } from "@/data/images";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section className="w-full h-full bg-white relative z-[9] flex pt-24">
      <LeftAside />
      <RightAside />
    </section>
  );
};

const LeftAside = () => {
  return (
    <div className="w-1/2 px-14 py-24 flex items-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-md text-slate-400 ml-2 uppercase font-bold">
            about
          </p>
          <h2 className="text-5xl capitalize font-semibold">
            {" "}
            about FootballStory
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          deserunt atque adipisci odio dolorem ex! Reiciendis sapiente labore
          vero. Adipisci expedita, aut sint voluptatibus facilis sapiente
          laborum dolor repudiandae doloremque! Odio, doloribus? Sit amet quas
          eum nam perspiciatis distinctio, repudiandae aut, qui incidunt dolore
          fugit assumenda laborum magni odit quia voluptatum natus aliquid nisi?
          Soluta cumque esse qui debitis velit!
        </p>
        <Button variant={"customAbout"}>get more</Button>
      </div>
    </div>
  );
};

const RightAside = () => {
  return (
    <div className="w-1/2 flex justify-center items-center px-24 pt-14 pb-8 bg-white">
      <div className="w-full h-full grid grid-cols-2 gap-2">
        {ImageBoxData.map((items: ImageBoxProps, index: number) => (
          <div
            className=" w-full h-[350px] rounded-2xl overflow-hidden"
            key={index}
          >
            <ImageBox
              timer={items.timer}
              initialAnimate={items.initialAnimate}
              exitAnimate={items.exitAnimate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageBox = ({ timer, initialAnimate, exitAnimate }: ImageBoxProps) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * imagesPlayer.length);
      } while (randomIndex === currentImage);

      setCurrentImage(randomIndex);
    }, timer);

    return () => clearInterval(interval);
  }, [currentImage, timer]);

  return (
    <div className="w-full h-[350px] relative">
      <AnimatePresence>
        <motion.div
          key={currentImage}
          className="absolute inset-0"
          initial={initialAnimate}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={exitAnimate}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={imagesPlayer[currentImage]}
            alt="Random Image"
            width={350}
            height={350}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default About;
