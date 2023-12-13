import { SectionTitleBlock } from "../SectionTitleBlock";
import { Badge } from "../elements/Badge";
import { Container } from "../templates/Container";

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
];

export const AllTestsPage = () => {
  return (
    <Container>
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
                          link="/certifications/1"
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
    </Container>
  );
};
