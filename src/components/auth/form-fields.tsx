import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { FormFieldElementProps } from "@/interface/props.interface";

const FormFieldElement = ({
  name,
  decs,
  typeForm,
  typeInput,
  form,
}: FormFieldElementProps) => {
  if (typeForm == "decs") {
    return (
      <FormField
        control={form}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{name}</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} className="h-14" />
            </FormControl>
            <FormDescription>{decs}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <FormField
      control={form}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{name}</FormLabel>
          <FormControl>
            <Input
              placeholder="shadcn"
              {...field}
              type={typeInput}
              className="h-12"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldElement;
