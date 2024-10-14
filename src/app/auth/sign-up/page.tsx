"use client";

import FormFieldElement from "@/components/auth/form-fields";
import AuthLayout from "@/layouts/auth";
import axiosInstance from "@/lib/instance.axios";
import { SignUpSchema } from "@/lib/schema.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const router = useRouter();
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
        form.getValues()
      );
      toast.info("waiting response....")
      console.log("Response data:", response);
      toast.success("Sign Up Success");
      setTimeout(() => {
        router.push("/auth/sign-in");
      }, 3000);
    } catch (error: any) {
      if (error.response) {
        // Respons error dari server
        toast.error("error response data from server");
      } else if (error.request) {
        // Request dikirim tetapi tidak ada respons
        toast.error("No response received from server");
      } else {
        // Error lainnya
        toast.error("Error during registration");
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
      <ToastContainer limit={5}/>
    </AuthLayout>
  );
};

export default SignUp;
