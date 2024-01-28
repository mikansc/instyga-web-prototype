"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export const PainelPage = () => {
  const { user } = useUser();
  return (
    <div>
      PainelPage
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
};
