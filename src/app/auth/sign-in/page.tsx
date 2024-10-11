"use client";

import React from "react";
import AuthLayout from "@/layouts/auth";
import FormFieldElement from "@/components/auth/form-fields";
import { SignInSchema } from "@/lib/schema.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignIn = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const email = form.watch("email");
  const password = form.watch("password");
  const value = form.getValues();

  console.log("Email:", email);
  console.log("Password:", password);
  console.log("values:", value);

  const handleOnSubmit = () => {};

  return (
    <AuthLayout name={"Sign In"} form={form} onSubmit={handleOnSubmit}>
      <FormFieldElement
        form={form.control}
        name={"email"}
        typeForm={"normal"}
        typeInput={"email"}
      />
      <FormFieldElement
        form={form.control}
        name={"password"}
        typeForm={"normal"}
        typeInput={"password"}
      />
    </AuthLayout>
  );
};
export default SignIn;
