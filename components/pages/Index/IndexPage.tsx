import { Container } from "@/components/atoms/Container";
import { Appbar } from "../../molecules/Appbar";
import { Headline } from "./Headline";
import { HeroWithImage } from "./HeroWithImage";

export const IndexPage = () => {
  return (
    <div style={{ height: "100%" }}>
      <HeroWithImage>
        <Container>
          <Appbar variant="dark" />
        </Container>
      </HeroWithImage>
      <Headline />
    </div>
  );
};
