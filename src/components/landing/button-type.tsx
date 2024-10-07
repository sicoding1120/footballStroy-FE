"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "../ui/button";

export interface ButtonStartProps {
  children?: React.ReactNode;
  typeBtn?: "redirect" | "modal" | "none";
  href?: string | any | never;
  onOpenChange?: any;
  isOpen?: any;
}

const ButtonStart = ({ href, children, typeBtn, isOpen, onOpenChange }: ButtonStartProps) => {

  if (typeBtn === "redirect") {
    return <Link href={href}>{children}</Link>;
  }

    return;
};

export default ButtonStart;
