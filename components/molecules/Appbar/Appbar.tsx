import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Appbar = ({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <Logo variant={variant} />
      <div className="flex gap-4 items-center">
        <Button asChild className="bg-blue-600">
          {/* <Link href="/painel">Login</Link> */}
          <a href="/api/auth/login">Login</a>
        </Button>
        <Button asChild className="bg-blue-600">
          {/* <Link href="/painel">Login</Link> */}
          <a href="/api/auth/logout">Logout</a>
        </Button>

        <Button asChild variant="link" className="text-white">
          <Link href="/">Cadastrar</Link>
        </Button>
      </div>
    </div>
  );
};
