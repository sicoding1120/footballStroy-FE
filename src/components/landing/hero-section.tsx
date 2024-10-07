import React from 'react'
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
import { useEffect, useRef, useState } from "react";
import { FaInfo } from "react-icons/fa6";



const HeroSec = () => {
   const videos = [
    "/videos/ucl.mp4",
    "/videos/uecl.mp4",
    "/videos/uel.mp4",
    "/videos/unl.mp4",
    "/videos/usc.mp4",
    "/videos/epl.mp4",
  ];

  // State untuk menyimpan index video saat ini
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const videoRef: any = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current?.play()?.catch((error: any) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [currentVideoIndex]);

  // Event handler saat video selesai diputar
  const handleVideoEnd = () => {
    // Ganti ke video selanjutnya
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };



  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen absolute z-[10] bg-black/55 flex flex-col gap-6 items-center justify-center px-24">
        <div className="p-4 rounded-md flex flex-col gap-8 justify-center items-center">
          <h2 className="md:text-6xl text-3xl w-full font-semibold text-white capitalize text-center ">
            wellcome to{" "}
            <span className="md:text-[4rem] text-5xl text-bg2">footballStory</span>{" "}
          </h2>
          <p className="text-sm md:w-2/3 w-full  text-white capitalize text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            laudantium cum eius vero? Exercitationem eaque repellat mollitia
            temporibus magni deserunt laboriosam minus, similique voluptatum
            corrupti! Ratione illum tenetur quod repellendus.
          </p>
          <div className="flex gap-6 ">
            <ButtonStart href={"/auth/sign-in"} typeBtn="redirect">
              <button className="bg-bg2 text-colors-bg2 shadow rounded-full btn hover:bg-bg2/60 cursor-pointer border-none md:px-24 px-16">
                Get Started
              </button>
            </ButtonStart>
            <Button onClick={onOpen} className="btn rounded-full font-semibold w-8 h-8">
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
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor
                        cupidatat consequat elit dolor adipisicing. Mollit dolor
                        eiusmod sunt ex incididunt cillum quis. Velit duis sit
                        officia eiusmod Lorem aliqua enim laboris do dolor
                        eiusmod. Et mollit incididunt nisi consectetur esse
                        laborum eiusmod pariatur proident Lorem eiusmod et.
                        Culpa deserunt nostrud ad veniam.
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
          </div>
        </div>
      </div>
      <video
        key={currentVideoIndex} // Tambahkan `key` agar React mengenali perubahan video
        className="w-full h-full object-cover fixed z-[1]"
        autoPlay
        ref={videoRef}
        onCanPlay={() => videoRef.current.play()}
        muted
        onEnded={handleVideoEnd} // Tambahkan event handler `onEnded`
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>{" "}
    </div>
  );

}

export default HeroSec