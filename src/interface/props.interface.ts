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

export interface CardPricingProps {
  typeCard: "normal" | "recommended";
  title: string;
  price: number;
  pricingTypeTime: "month" | "year";
  decs: string;
  list: ListPricingProps[];
}

export interface ListPricingProps {
  title: string | any;
  type: "access" | "notAccess";
  className?: string;
  classNameIcons?:string
}
