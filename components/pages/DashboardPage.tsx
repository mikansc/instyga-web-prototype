/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { CurrentCertificationPathHero } from "../templates/CurrentCertificationPathHero";
import { NoCertificationPathStartedHero } from "../templates/NoCertificationPathStartedHero";
import { SectionTitleBlock } from "./SectionTitleBlock";

let courses = [
  {
    id: 1,
    image: "/assets/images/placeholder-400.svg",
    title: "Segurança no ASP.NET",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quia.",
  },
  {
    id: 2,
    image: "/assets/images/placeholder-400.svg",
    title: "Introdução ao JavaScript",
    description:
      "Descubra a linguagem que alimenta a web e aprenda a criar sites interativos.",
  },
  {
    id: 3,
    image: "/assets/images/placeholder-400.svg",
    title: "React para Iniciantes",
    description:
      "Explore o poder do React para criar aplicações dinâmicas do lado do cliente.",
  },
  {
    id: 4,
    image: "/assets/images/placeholder-400.svg",
    title: "Essenciais do Node.js",
    description:
      "Mergulhe no desenvolvimento backend com Node.js e construa aplicações escaláveis.",
  },
  {
    id: 5,
    image: "/assets/images/placeholder-400.svg",
    title: "Programação em Python",
    description:
      "Aprenda Python do zero e comece sua jornada em ciência de dados ou desenvolvimento web.",
  },
  {
    id: 6,
    image: "/assets/images/placeholder-400.svg",
    title: "Dominando o Django",
    description:
      "Domine o framework Django e construa aplicações web robustas com Python.",
  },
  {
    id: 7,
    image: "/assets/images/placeholder-400.svg",
    title: "Análise de Dados com R",
    description:
      "Analise e visualize dados com R, uma poderosa linguagem de programação estatística.",
  },
  {
    id: 8,
    image: "/assets/images/placeholder-400.svg",
    title: "Fundamentos de UX/UI Design",
    description:
      "Crie designs centrados no usuário e melhore a experiência do usuário de produtos digitais.",
  },
  {
    id: 9,
    image: "/assets/images/placeholder-400.svg",
    title: "Essenciais de DevOps",
    description:
      "Entenda a cultura e práticas de DevOps para otimizar a entrega de software.",
  },
  {
    id: 10,
    image: "/assets/images/placeholder-400.svg",
    title: "Visão Geral de Inteligência Artificial",
    description:
      "Obtenha insights sobre IA, suas capacidades e seu impacto na tecnologia futura.",
  },
  {
    id: 11,
    image: "/assets/images/placeholder-400.svg",
    title: "Fundamentos do Blockchain",
    description:
      "Explore os conceitos fundamentais do blockchain e suas aplicações em diversas indústrias.",
  },
];

const DashboardPage = () => {
  const hasSignedToACertification = false;
  return (
    <>
      <div className="row">
        {hasSignedToACertification ? (
          <CurrentCertificationPathHero />
        ) : (
          <NoCertificationPathStartedHero />
        )}
      </div>

      <SectionTitleBlock
        title={"Pratique!"}
        subtitle={
          "Testes de questões multipla escolha, para você testar seu conhecimento de forma gratuíta."
        }
      />
      <div className="row row-cols-4 mt-3 row-gap-4">
        {courses.map((course) => (
          <div className="m-col card-group" key={course.id}>
            <div className="card">
              <Image
                src={`https://picsum.photos/seed/${course.id * 50}/400/200`}
                width={400}
                height={120}
                className="card-img-top"
                alt={course.title}
              />
              <div className="card-body">
                <h5 className="card-tile">{course.title}</h5>
                <p className="card-text py-3">{course.description}</p>
              </div>
              <div className="card-footer">
                <a href="#" className="card-link">
                  Começar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
