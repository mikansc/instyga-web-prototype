import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import Logo from "../../assets/images/instyga-logo.svg";

export const ThankYouPage = () => {
  return (
    <div
      className="xl:container d-flex justify-content-center align-items-center w-full m-auto py-8"
      style={{ height: "100vh", width: "50vw" }}
    >
      <Image src={Logo} className="py-4 mb-10" alt="Instyga" width={380} />
      <h1 className="text-2xl leading-8 font-bold text-blue-600 mb-8">
        Muito obrigado!
      </h1>
      <p className="text-base leading-6 font-extralight mb-4">
        Acompanhe o seu e-mail para saber as novidades. Nós nos comprometemos a
        não encher a sua caixa de entrada com spam. 😉
      </p>
      <p className="text-base leading-6 font-light">
        Aproveite e{" "}
        <a
          href="https://www.linkedin.com/company/instyga"
          target="_blank"
          rel="noreferrer"
          className="text-base text-blue-500 leading-6 font-light"
        >
          <span>siga a Instyga no Linkedin</span>
          <FaLinkedin className="inline ml-1" />
        </a>
      </p>
    </div>
  );
};
