import LogoDarkImg from "assets/images/logo-dark.svg";
import LogoLightImg from "assets/images/logo-light.svg";
import Image from "next/image";

export const Logo = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const logoVariant = {
    light: LogoLightImg,
    dark: LogoDarkImg,
  };

  return (
    <Image src={logoVariant[variant]} alt="Bem vindo à Instyga" width={205} />
  );
};
