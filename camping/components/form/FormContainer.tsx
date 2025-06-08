"use client";
import { useActionState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

// พวก return เป็น jsx ได้แค่ 1 element เท่านั้น
const FormContainer = ({ action, children }: { action:actionFunction,children: React.ReactNode }) => {
  const [state, formAction] = useActionState(action, initialState);
  // console.log('state',state);
  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
