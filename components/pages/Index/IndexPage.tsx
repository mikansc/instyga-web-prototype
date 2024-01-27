import { Container } from "@/components/atoms/Container";
import imageBg from "../../../assets/images/home-bg.png";
import { Appbar } from "../../molecules/Appbar";

export const IndexPage = () => {
  return (
    <div
      style={{
        height: "100%",
        background: "#000",
      }}
    >
      <div
        style={{
          height: "60%",

          background: `linear-gradient(#000000, #0000003D, #000000), url(${imageBg.src}), #000`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        <Container>
          <Appbar variant="dark" />
        </Container>
        <div>Em construção</div>
      </div>
    </div>
  );
};
