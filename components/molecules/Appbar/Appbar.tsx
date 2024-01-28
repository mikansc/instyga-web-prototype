"use client";

import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export const Appbar = ({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) => {
  const { user } = useUser();

  const isLoggedIn = Boolean(user);

  const isDeveloperRollout = localStorage.getItem("iauth");

  return (
    <div className="w-full flex justify-between items-center">
      <Logo variant={variant} />
      {isDeveloperRollout && (
        <div className="flex gap-4 items-center">
          {!isLoggedIn ? (
            <Button asChild className="bg-blue-600">
              <a href="/api/auth/login">Login</a>
            </Button>
          ) : (
            <Button asChild className="bg-blue-600">
              <a href="/api/auth/logout">Logout</a>
            </Button>
          )}
          <Button asChild variant="link" className="text-white">
            <Link href="/">Cadastrar</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
