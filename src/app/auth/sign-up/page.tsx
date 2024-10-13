'use client';

import FormFieldElement from "@/components/auth/form-fields";
import AuthLayout from "@/layouts/auth";
import axiosInstance from "@/lib/instance.axios";
import { SignUpSchema } from "@/lib/schema.zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
    const response = await axiosInstance.post(
      "/auth/register",
      form.getValues(),
      
    );
     console.log("Response data:", response.data); // log hasil dari server
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
       console.error("Error during registration:", error.message);
     }
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
