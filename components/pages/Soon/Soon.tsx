import Image from "next/image";
import styles from "./Soon.module.scss";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "../../../assets/images/instyga-logo.svg";

export const Soon = () => {
  console.log(styles);
  return (
    <div
      className="xl:container d-flex justify-content-center align-items-center w-full m-auto py-8"
      style={{ height: "100vh", width: "50vw" }}
    >
      <Image src={Logo} className="py-4 mb-10" alt="Instyga" width={380} />
      <span className="text-lg leading-8 font-extralight mb-12">
        Em breve, você poderá fazer parte da plataforma de empregabilidade mais
        promissora que já surgiu no mercado. Para receber as novidades,
        inscreva-se na nossa lista de contato.
      </span>
      <form className="my-8">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="digite seu nome..."
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="email@exemplo.com"
          />
        </div>

        <span
          className="text-xs leading-6 font-light block mt-8"
          style={{ color: "#A0A0A0" }}
        >
          Ao clicar em enviar, você aceita que a Instyga entre em contato com
          você para divulgação do andamento do projeto, e está ciente de que não
          compartilharemos seus dados com terceiros em nenhuma hipótese, exceto
          se houver ordem judicial autorização prévia e expressa do usuário.
        </span>
        <div className="my-4  ">
          <Label>
            <Checkbox name="terms" id="terms" />
            <span className="ml-2 text-xs leading-6 font-light">
              Concordo com os termos acima
            </span>
          </Label>
        </div>
        <Button className="d-block w-28" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};
