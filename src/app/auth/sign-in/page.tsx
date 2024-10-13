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
     try {
       const response = await axios.post(
         "https://fsbackends.vercel.app/auth/login",
         form.getValues() // pastikan data sesuai dengan yang diperlukan untuk login
       );

       console.log("Login response data:", response.data);
     } catch (error:any) {
       if (error.response) {
         // Respons error dari server
         console.error("Error response data:", error.response.data);
         console.error("Error status:", error.response.status);
       } else if (error.request) {
         // Request dikirim tetapi tidak ada respons
         console.error("No response received:", error.request);
       } else {
         // Error lainnya
         console.error("Error during login:", error.message);
       }
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
