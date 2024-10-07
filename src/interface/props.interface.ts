import { JSXElementConstructor } from "react";

export interface FeatureCardProps {
  Logos?: React.ReactNode | any | JSXElementConstructor<any>;
  title?: string;
  decs?: string;
}

export interface ImageBoxProps {
    timer: number;
    initialAnimate: object | any;
    exitAnimate: object | any;
}