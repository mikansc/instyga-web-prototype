import Image from "next/image";
import { SectionTitleBlock } from "./SectionTitleBlock";

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
    <>
      <SectionTitleBlock
        title="Certificações disponíveis"
        subtitle="Escolha a certificação desejada"
      />
      <div className="list-group">
        {certificationPaths.map((certificationPath) => {
          const image = `/assets/${certificationPath.image}`;
          console.log(image);

          return (
            <div
              className="list-group-item list-group-item-action"
              key={certificationPath.id}
            >
              <div
                className="d-flex w-100 justify-content-between my-3"
                style={{
                  height: "80px",
                }}
              >
                <div className="">
                  <Image
                    src={image}
                    width={80}
                    height={80}
                    alt="..."
                    className="img-thumbnail d-block"
                  />
                </div>
                <div className="">
                  {/* <div className="card-img-overlay"> */}
                  <h5 className="card-title">{certificationPath.title}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="align-self-center">
                  <button className="btn btn-primary">Ver certificação</button>
                </div>
              </div>
            </div>
            // </div>
          );
        })}
      </div>
    </>
  );
};
