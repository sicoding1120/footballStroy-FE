"use client";

import React, { useEffect } from "react";
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

  useEffect(() => {
    const formData = form.getValues(); // Ambil nilai form langsung
    setData(formData);
  }, [form]);

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fsbackends.vercel.app/auth/login",
        data
      );
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
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
