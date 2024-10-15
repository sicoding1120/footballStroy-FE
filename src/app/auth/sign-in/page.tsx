"use client";

import AuthLayout from "@/layouts/auth";
import FormFieldElement from "@/components/auth/form-fields";
import { SignInSchema } from "@/lib/schema.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axiosInstance from "@/lib/instance.axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    try {
      toast.info("waiting response....");
      const response = await axiosInstance.post(
        "/auth/login",
        form.getValues()
      );
      toast.success("Sign In Success");

      const accessToken = response.data.data.access_token;
      const targetDomain = `https://footballstorydash.vercel.app/e/${response.data.data.id}`;

      window.addEventListener("message", (event) => {
        if (event.origin === targetDomain) {
          console.log("Pesan berhasil diproses oleh Frontend 2:", event.data);
        } else {
          console.warn("Respons dari origin yang tidak sah:", event.origin);
        }
      });
      setTimeout(() => {
        window.postMessage(accessToken, targetDomain);
        console.log("Token telah dikirim:", accessToken);
        router.push(targetDomain);
      }, 2000);
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
      <ToastContainer limit={5} />
    </AuthLayout>
  );
};
export default SignIn;
