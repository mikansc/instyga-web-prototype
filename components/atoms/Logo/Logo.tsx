import LogoDarkImg from "assets/images/logo-dark.svg";
import LogoLightImg from "assets/images/logo-light.svg";
import Image from "next/image";

export const Logo = ({
  variant = "light",
  ...props
}: {
  variant?: "light" | "dark";
}) => {
  const logoVariant = {
    light: LogoLightImg,
    dark: LogoDarkImg,
  };

  return (
    <Image {...props} src={logoVariant[variant]} alt="Bem vindo à Instyga" />
  );
};
