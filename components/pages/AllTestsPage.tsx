import { SectionTitleBlock } from "../SectionTitleBlock";
import { Container } from "../templates/Container";
// competencies: [
//   "Código",
//   "Linguagem",
//   "Desenvolvimento de Software",
//   "Interpretação de código",
//   "Debugging",
// ],

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
                      <span
                        key={competency}
                        className="badge bg-secondary me-1"
                      >
                        {competency}
                      </span>
                    ))}
                    {test.certifications.map((certification) => (
                      <span
                        key={certification}
                        className="badge bg-primary me-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-title="This top tooltip is themed via CSS variables."
                      >
                        {certification}
                      </span>
                    ))}
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
