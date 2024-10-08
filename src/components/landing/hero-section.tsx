import React from "react";
import ButtonStart from "@/components/landing/button-type";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Button as Btn } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { FaInfo } from "react-icons/fa6";
import { videos } from "@/data/video";

const HeroSec = () => {
  return (
    <div className="w-full h-screen">
      <HeroTopic />
      <VideoCover />
    </div>
  );
};

const VideoCover = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef: any = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current?.play()?.catch((error: any) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <video
      key={currentVideoIndex} 
      className="w-full h-full object-cover fixed z-[1]"
      autoPlay
      ref={videoRef}
      onCanPlay={() => videoRef.current.play()}
      muted
      onEnded={handleVideoEnd} 
    >
      <source src={videos[currentVideoIndex]} type="video/mp4" />
    </video>
  );
};

const BtnInfo = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        className="btn rounded-full font-semibold w-8 h-8"
      >
        <FaInfo />
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="relative z-[999]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  possimus reiciendis dolores saepe aut aspernatur iusto animi
                  tempore velit. Facilis quos facere vitae vel, iusto accusamus
                  ut libero ex molestias!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const HeroTopic = () => {
  return (
    <div className="w-full h-screen absolute z-[10] bg-black/55 flex flex-col gap-6 items-center justify-center px-24">
      <div className="p-4 rounded-md flex flex-col gap-8 justify-center items-center">
        <h2 className="md:text-6xl text-3xl w-full font-semibold text-white capitalize text-center ">
          welcome to{" "}
          <span className="md:text-[4rem] text-5xl text-bg2">
            footballStory
          </span>{" "}
        </h2>
        <p className="text-sm md:w-2/3 w-full  text-white capitalize text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus
          reiciendis dolores saepe aut aspernatur iusto animi tempore velit.
          Facilis quos facere vitae vel, iusto accusamus ut libero ex
          molestias!Nullam pulvinar risus non risus hendrerit venenatis.
          Pellentesque sit amet hendrerit risus, sed porttitor quam.
        </p>
        <div className="flex gap-6 ">
          <ButtonStart href={"/auth/sign-in"} typeBtn="redirect">
            <Btn variant={"customHero"}>Get Started</Btn>
          </ButtonStart>
          <BtnInfo />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
