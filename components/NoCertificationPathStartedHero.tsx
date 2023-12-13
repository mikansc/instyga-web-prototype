import Link from "next/link";
import { SectionTitleBlock } from "./SectionTitleBlock";

export const NoCertificationPathStartedHero = () => {
  return (
    <div className="col">
      <div className="card shadow">
        <div className="card-body">
          <SectionTitleBlock
            title={"Comece sua Jornada"}
            subtitle={
              "Escolha uma avaliação ou uma trilha de certificação e comece a estudar agora mesmo!"
            }
          />
          <Link href="/dashboard/all-paths" className="btn btn-primary">
            Escolher uma certificação
          </Link>
          <Link href="/dashboard/all-tests" className="btn btn-link">
            Escolher uma avaliação individual
          </Link>
        </div>
      </div>
    </div>
  );
};
