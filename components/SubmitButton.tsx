"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      disabled={pending}
      className="py-2 rounded-md bg-slate-300 hover:shadow-sm disabled:opacity-70"
    >
      {pending ? "submitting..." : "submit"}
    </button>
  );
};
export default SubmitButton;
