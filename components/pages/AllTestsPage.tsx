import { Badge } from "../elements/Badge";
import { SectionTitleBlock } from "./SectionTitleBlock";

let tests = [
  {
    id: 1,
    title: "Construção de página HTML",
    competencies: ["Código", "Linguagem"],
    certifications: ["Desenvolvedor Front-end", "Desenvolvedor Full-stack"],
  },
  {
    id: 2,
    title: "Estilização CSS",
    competencies: ["Código", "Linguagem"],
    certifications: ["Desenvolvedor Front-end", "Desenvolvedor Full-stack"],
  },
  {
    id: 3,
    title: "JavaScript na construção de páginas",
    competencies: ["Código", "Linguagem"],
    certifications: ["Desenvolvedor Front-end", "Desenvolvedor Full-stack"],
  },
  {
    id: 4,
    title: "Orientação à objetos com C#",
    competencies: ["Código", "Linguagem"],
    certifications: ["Desenvolvedor Back-end", "Desenvolvedor Full-stack"],
  },
  {
    id: 5,
    title: "Construção de APIs com C#",
    competencies: ["Código", "Linguagem"],
    certifications: ["Desenvolvedor Back-end", "Desenvolvedor Full-stack"],
  },
  {
    id: 6,
    title: "Construção de páginas com Razor",
    competencies: ["Código", "Linguagem"],
    certifications: ["Desenvolvedor Back-end", "Desenvolvedor Full-stack"],
  },
];

export const AllTestsPage = () => {
  return (
    <>
      <SectionTitleBlock
        title="Avaliações disponíveis"
        subtitle="Escolha a avaliação desejada"
      />
      <div className="list-group">
        {tests.map((test) => {
          return (
            <div
              className="list-group-item list-group-item-action"
              key={test.id}
            >
              <div className="d-flex w-100 justify-content-between my-3">
                <div className="">
                  <h5 className="card-title">{test.title}</h5>
                  <div className="d-flex mt-2">
                    {test.competencies.map((competency) => (
                      <Badge key={competency} color="secondary">
                        {competency}
                      </Badge>
                    ))}
                    {test.certifications.map((certification) => {
                      return (
                        <Badge
                          link="/dashboard/paths/1"
                          key={certification}
                          color="primary"
                          tip={`Esta avaliação é parte da certificação ${certification}`}
                        >
                          {certification}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
                <div className="">
                  <button className="btn btn-primary">Iniciar</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
