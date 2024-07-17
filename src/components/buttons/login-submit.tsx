"use-client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import Spinner from "react-spinkit";

export default function SubmitLogin() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full py-5 mb-3">
      {pending ? <Spinner name="three-bounce" /> : "Login"}
    </Button>
  );
}
