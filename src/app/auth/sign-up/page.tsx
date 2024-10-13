"use client";

import FormFieldElement from "@/components/auth/form-fields";
import AuthLayout from "@/layouts/auth";
import { SignUpSchema } from "@/lib/schema.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { user } from "@nextui-org/theme";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUp = () => {
  const [data, setData] = React.useState<any>();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    mode: "all",
    defaultValues: {
      username: "",
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
        "https://fsbackends.vercel.app/auth/register",
        {
          username: form.getValues().username,
          email: form.getValues().email,
          password: form.getValues().password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Jika menggunakan cookie di backend
        }
      );
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
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
