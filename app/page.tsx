import { IndexPage } from "@/components/pages/Index/IndexPage";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  const data = await getSession();

  if (data?.user) {
    redirect("/painel");
  }
  return <IndexPage />;
}
