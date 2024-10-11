import React, { JSXElementConstructor } from "react";
import AuthLayout from "../layouts/auth";

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
  classNameIcons?: string;
}

export interface FormItemComponentsProps {
  name: "email" | "password" | "username";
  field: any;
  useDecs: boolean;
  decs?: string;
}

export interface FormFieldComponenstProps {
  name: "email" | "password" | "username";
  form: any;
}

export interface FormElementProps {
  children: React.ReactNode;
  form:any
}

export interface FormFieldElementProps {
  name: string;
  decs?: string;
  typeForm: "decs" | "normal";
  typeInput: string;
  form:any
}

export interface InputSideProps {
  title: string;
  onSubmit: any;
  children: React.ReactNode;
  form:any
}

export interface LeftSideProps {
  name: string;
  children: React.ReactNode;
  onSubmit: any;
  form:any
}

export interface AuthLayoutProps {
  name: string;
  children: React.ReactNode;
  onSubmit: any;
  form:any
}
