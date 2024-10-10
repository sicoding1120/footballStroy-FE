"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignUpSchema } from "@/lib/schema.zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import {
  FormFieldComponenstProps,
  FormItemComponentsProps,
} from "@/interface/props.interface";

const InputForm = ({ inputName,schema }: { inputName: string[], schema:any }) => {
  return <FormComponents inputName={inputName} schema={schema} />;
};

const FormComponents = ({inputName, schema}: {inputName: string[], schema: any}) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(SignInSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4">
        {inputName.map((name:string | any,index:number) => (
          <FormFieldComponents name={name} form={form} key={index}/>
        ))}
      </form>
    </Form>
  );
};

const FormFieldComponents = ({ name, form }: FormFieldComponenstProps) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItemComponents name={name} field={field} useDecs={false} />
      )}
    />
  );
};

const FormItemComponents = ({
  name,
  field,
  useDecs,
  decs,
}: FormItemComponentsProps) => {
  if (useDecs == true) {
    return (
      <FormItem>
        <FormLabel>{name}</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormDescription>{decs}</FormDescription>
        <FormMessage />
      </FormItem>
    );
  }

  return (
    <FormItem>
      <FormLabel>{name}</FormLabel>
      <FormControl>
        <Input {...field} className="h-12" />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default InputForm;
