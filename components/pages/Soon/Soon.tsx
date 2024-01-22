import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaLinkedin } from "react-icons/fa6";
import Logo from "../../../assets/images/instyga-logo.svg";

export const Soon = () => {
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
        <div className="d-flex align-items-center">
          <Button className="w-36 bg-blue-950" type="submit">
            Enviar
          </Button>
          <div className="inline-block ml-4">
            <a
              href="https://www.linkedin.com/company/instyga"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-500 leading-6 font-light"
            >
              <FaLinkedin className="inline mr-2" />
              <span>Instyga no Linkedin</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
