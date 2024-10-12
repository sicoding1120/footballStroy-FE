"use client";

import React from "react";
import AuthLayout from "@/layouts/auth";
import FormFieldElement from "@/components/auth/form-fields";
import { SignInSchema } from "@/lib/schema.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

const SignIn = () => {
    const [data, setData] = React.useState<any>();
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

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
        setData(form.getValues());

    await axios.post("https://fsbackends.vercel.app/auth/login", data);
  };

  return (
    <AuthLayout
      name={"Sign In"}
      form={form}
      onSubmit={handleOnSubmit}
      link="/auth/sign-up"
    >
      <FormFieldElement
        placeholder="your email"
        form={form.control}
        name={"email"}
        typeForm={"normal"}
        typeInput={"email"}
      />
      <FormFieldElement
        placeholder="your password"
        form={form.control}
        name={"password"}
        typeForm={"normal"}
        typeInput={"password"}
      />
    </AuthLayout>
  );
};
export default SignIn;
