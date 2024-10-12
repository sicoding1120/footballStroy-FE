"use client";

import FormFieldElement from "@/components/auth/form-fields";
import AuthLayout from "@/layouts/auth";
import { SignUpSchema } from "@/lib/schema.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUp = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    mode: "all",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://befootballstory.vercel.app/auth/register",
        form.getValues()
      );
    } catch (error) {
      if (error) throw error;
    }
  };

  return (
    <AuthLayout
      name={"Sign Up"}
      form={form}
      onSubmit={handleOnSubmit}
      link="/auth/sign-in"
    >
      <FormFieldElement
        placeholder="your username"
        form={form.control}
        name={"username"}
        typeForm={"normal"}
        typeInput={"text"}
      />
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

export default SignUp;
