import Image from "next/image";
import Link from "next/link";
import { SectionTitleBlock } from "./SectionTitleBlock";

let certificationPaths = [
  {
    id: 1,
    image: "front-end.png",
    title: "Desenvolvedor Web Junior",
    description: "Trilha de certificação para desenvolvedor web junior",
  },
  {
    id: 2,
    image: "front-end.png",
    title: "Desenvolvedor Web Pleno",
    description: "Trilha de certificação para desenvolvedor web pleno",
  },
  {
    id: 3,
    image: "front-end.png",
    title: "Desenvolvedor Web Sênior",
    description: "Trilha de certificação para desenvolvedor web sênior",
  },
  {
    id: 4,
    image: "javascript.png",
    title: "Desenvolvedor JavaScript Junior",
    description: "Trilha de certificação para desenvolvedor JavaScript junior",
  },
  {
    id: 5,
    image: "javascript.png",
    title: "Desenvolvedor JavaScript Pleno",
    description: "Trilha de certificação para desenvolvedor JavaScript pleno",
  },
  {
    id: 6,
    image: "javascript.png",
    title: "Desenvolvedor JavaScript Sênior",
    description: "Trilha de certificação para desenvolvedor JavaScript sênior",
  },
  {
    id: 13,
    image: "csharp.png",
    title: "Desenvolvedor C# Junior",
    description: "Trilha de certificação para desenvolvedor C# junior",
  },
  {
    id: 14,
    image: "csharp.png",
    title: "Desenvolvedor C# Pleno",
    description: "Trilha de certificação para desenvolvedor C# pleno",
  },
  {
    id: 15,
    image: "csharp.png",
    title: "Desenvolvedor C# Sênior",
    description: "Trilha de certificação para desenvolvedor C# sênior",
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
                <div className="flex-grow-1 mx-3">
                  <h5 className="card-title">{certificationPath.title}</h5>
                  <p className="card-text">{certificationPath.description}</p>
                </div>
                <div className="align-self-center">
                  <Link
                    href={`prototype/paths/${String(certificationPath.id)}`}
                    className="btn btn-primary"
                  >
                    Ver certificação
                  </Link>
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
