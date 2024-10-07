import { ImageBoxProps } from "@/interface/props.interface";
export const ImageBoxData: ImageBoxProps[] = [
  {
    timer: 2000,
    initialAnimate: {
      y: 350,
      opacity: 0,
    },
    exitAnimate: {
      y: -350,
      opacity: 0,
    },
  },
  {
    timer: 2000,
    initialAnimate: {
      x: 300,
      opacity: 0,
    },
    exitAnimate: {
      x: -300,
      opacity: 0,
    },
  },
  {
    timer: 2000,
    initialAnimate: {
      x: -300,
      opacity: 0,
    },
    exitAnimate: {
      x: 300,
      opacity: 0,
    },
  },
  {
    timer: 2000,
    initialAnimate: {
      y: -350,
      opacity: 0,
    },
    exitAnimate: {
      y: 300,
      opacity: 0,
    },
  },
];
