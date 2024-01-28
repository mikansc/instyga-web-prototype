"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const IAuth = () => {
  const router = useRouter();
  const setVariable = () => {
    window.localStorage?.setItem("iauth", "true");
    router.replace("/");
  };
  return (
    <div className="text-white">
      Autorizar uso do app?
      <Button onClick={setVariable}>Gravar Variável</Button>
    </div>
  );
};
export default IAuth;
