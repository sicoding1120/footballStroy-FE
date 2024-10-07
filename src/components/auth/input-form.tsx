"use client";

import React from "react";

export interface InputFormProps {
  label: string;
  children?: React.ReactNode;
}

const InputForm = ({ label, children }: InputFormProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      {children}
    </div>
  );
};

export default InputForm;
