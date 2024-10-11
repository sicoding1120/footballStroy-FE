import React from "react";
import BreadcrumbsElement from "../auth/breadcrumbs-element";
import { Button } from "../ui/button";
import Image from "next/image";
import FormElement from "../auth/form-element";
import { InputSideProps, LeftSideProps } from "@/interface/props.interface";

const LeftSide = ({ name, children, onSubmit, form }: LeftSideProps) => {
  return (
    <section className="w-1/2 h-full flex flex-col justify-center gap-8 px-12 py-8">
      <BreadcrumbsElement root={name} />
      <h2 className="text-6xl font-semibold capitalize">{name}</h2>
      <p className="w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        voluptatum quod doloribus sapiente
      </p>
      <InputSide form={form} title={name} onSubmit={onSubmit}>
        {children}
      </InputSide>
      <ButtonSide />
    </section>
  );
};

const InputSide = ({ children, title, onSubmit, form }: InputSideProps) => {
  return (
    <div className="w-full pr-20 flex flex-col">
      <FormElement form={form}>{children}</FormElement>
      <Button
        className="h-12 btn mt-6 transition-all border-none text-bg2"
        onClick={onSubmit}
      >
        {title}
      </Button>
      <hr />
    </div>
  );
};

const ButtonSide = () => {
  return (
    <div className=" w-full flex gap-4 pr-20">
      <Button className=" w-1/2 h-12" variant={"outline"}>
        <Image
          src="/icons/google.png"
          alt="alt"
          width={40}
          height={40}
          className="w-8 h-8 object-cover"
        />
      </Button>
      <Button className=" w-1/2 h-12" variant={"outline"}>
        {" "}
        <Image
          src="/icons/facebook.png"
          alt="alt"
          width={40}
          height={40}
          className="w-8 h-8 object-cover"
        />
      </Button>
    </div>
  );
};

export default LeftSide;
