import imageBg from "../../assets/images/image-bg.avif";
import { AccountBox } from "../AccountBox";

export const HomePage = () => {
  return (
    <div
      className="h-100"
      style={{
        // backgroundImage: `url(${imageBg.src})`,
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${imageBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container mx-auto h-100">
        <div className="row h-100 align-items-center justify-content-end">
          <div className="col-5">
            <AccountBox />
          </div>
        </div>
      </div>
    </div>
  );
};
