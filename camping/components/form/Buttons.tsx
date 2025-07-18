"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle, RotateCw } from "lucide-react";
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
    <SignInButton mode="modal">
      <Button size="icon" variant="outline">
        <Heart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  // console.log("is",isFavorite)
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" variant="outline">
      {pending ? <RotateCw className="animate-spin"/> : isFavorite ? <Heart fill="black"/>: <Heart />}
    </Button>
  );
};
