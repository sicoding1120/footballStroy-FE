import React from "react";
import RightSide from "@/components/layouts/rightside-auth";
import LeftSide from "@/components/layouts/leftside-auth";
import { AuthLayoutProps } from "@/interface/props.interface";

const AuthLayout = ({ name, children, onSubmit, form, link }: AuthLayoutProps) => {
  return (
    <main className="w-full flex h-screen">
      <LeftSide name={name} onSubmit={onSubmit} form={form} link={link}>
        {children}
      </LeftSide>
      <RightSide />
    </main>
  );
};

export default AuthLayout;
