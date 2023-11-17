import imageBg from "../../assets/images/image-bg.avif";
import { AccountBox } from "../AccountBox";
import { Container } from "../templates/Container";

export const HomePage = () => {
  return (
    <div
      className="h-100"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${imageBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <Container>
        <div className="row h-100 align-items-center justify-content-end">
          <div className="col-5">
            <AccountBox />
          </div>
        </div>
      </Container>
    </div>
  );
};
