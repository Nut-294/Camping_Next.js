"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { Heart } from "lucide-react";
type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};
export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
  // pending = จังหวะโหลด
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      size={size}
      className={`${className} capitalize`}
    >
      {pending ? (
        <>
          <LoaderCircle className="animate-spin" />
          <span>Please Wait</span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};

export const SignInCardButton = () => {
  return (
    //modal ไม่ทำให้เกิดการรีหน้า
    <SignInButton mode='modal'>
      <Button size="icon" variant='outline'>
        <Heart />
      </Button>
    </SignInButton>
  );
};
