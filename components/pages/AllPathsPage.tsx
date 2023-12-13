import { SectionTitleBlock } from "../SectionTitleBlock";
import { Container } from "../templates/Container";

let certificationPaths = [
  {
    id: 1,
    image: "front-end.png",
    title: "Desenvolvedor Web Junior",
  },
  {
    id: 2,
    image: "front-end.png",
    title: "Desenvolvedor Web Pleno",
  },
  {
    id: 3,
    image: "front-end.png",
    title: "Desenvolvedor Web Sênior",
  },
  {
    id: 4,
    image: "javascript.png",
    title: "Desenvolvedor JavaScript Junior",
  },
  {
    id: 5,
    image: "javascript.png",
    title: "Desenvolvedor JavaScript Pleno",
  },
  {
    id: 6,
    image: "javascript.png",
    title: "Desenvolvedor JavaScript Sênior",
  },
  {
    id: 13,
    image: "csharp.png",
    title: "Desenvolvedor C# Junior",
  },
  {
    id: 14,
    image: "csharp.png",
    title: "Desenvolvedor C# Pleno",
  },
  {
    id: 15,
    image: "csharp.png",
    title: "Desenvolvedor C# Sênior",
  },
];

export const AllPathsPage = () => {
  return (
    <Container>
      <SectionTitleBlock
        title="Certificações disponívels"
        subtitle="Escolha a certificação desejada"
      />
      <div className="row row-cols-2 mt-3">
        {certificationPaths.map((certificationPath) => {
          const image = `/assets/${certificationPath.image}`;
          console.log(image);

          return (
            <div className="card text-bg-dark" key={certificationPath.id}>
              <img src={image} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
