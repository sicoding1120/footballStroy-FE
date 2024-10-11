'use client'

import FormFieldElement from '@/components/auth/form-fields';
import AuthLayout from '@/layouts/auth';
import { SignUpSchema } from '@/lib/schema.zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

    const handleOnSubmit = () => {};

  return (
    <AuthLayout name={"Sign Up"} form={form} onSubmit={handleOnSubmit}>
      <FormFieldElement
        form={form.control}
        name={"username"}
        typeForm={"normal"}
        typeInput={"text"}
      />
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
}

export default SignUp