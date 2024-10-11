"use client";

import { FormElementProps } from "@/interface/props.interface";
import React from "react";
import { Form } from "../ui/form";


const FormElement = ({ children, form}: FormElementProps) => {
  return (
    <Form {...form}>
      <form className="flex flex-col gap-2">{children}</form>
    </Form>
  );
};

export default FormElement;
