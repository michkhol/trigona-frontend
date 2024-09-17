"use client";

import { useRef} from "react";
import CourseCheckout from "./course-checkout";
import { RegisterForm } from "./register-form";
import type { ModalCheckout } from "./course-checkout";

export default function RegisterAndCheckout({priceId, }: { priceId: string }) {
  const dialogRef = useRef<ModalCheckout>();

  function setModalDialog(mc: ModalCheckout) {
    dialogRef.current = mc
  }

  return (
      <div className="">
        <CourseCheckout setOpenDialog={setModalDialog}/>
        <RegisterForm priceId={priceId}  openDialogRef={dialogRef}/>
      </div>
  );
}

