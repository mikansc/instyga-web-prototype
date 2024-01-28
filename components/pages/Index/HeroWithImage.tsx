import imageBg from "../../../assets/images/home-bg.png";

export const HeroWithImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        height: "60%",
        background: `linear-gradient(#000000, #0000003D, #000000), url(${imageBg.src}), #000`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      {children}
    </div>
  );
};
