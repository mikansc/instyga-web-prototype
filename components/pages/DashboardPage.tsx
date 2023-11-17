/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Container } from "../templates/Container";

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
  return (
    <Container>
      <div className="row pt-5">
        <div className="p-4 d-flex justify-content-space-between text-bg-dark shadow">
          <div className="flex-grow-1">
            <span className="d-block">Trilha em Andamento:</span>
            <h2>Desenvolvedor .NET</h2>
          </div>
          <div>
            <span className="d-block">Avaliações Concluidas:</span>
            <span className="display-3 d-block text-center">12</span>
          </div>
        </div>

        {/* <div className="mt-5">
          <h2 className="display-6 mb-2">Avaliações em destaque</h2>

          <div
            id="carouselExampleCaptions"
            className="carousel carousel-dark slide border"
            data-bs-ride="carousel"
            style={{ maxWidth: "100%", height: 400 }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="utilizando-migrations.png"
                  className="d-block w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  alt="..."
                />
              </div>
              <div
                className="carousel-item"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src="poo-avancado.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div
                className="carousel-item"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img src="trouble.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}
      </div>
      <div className="my-5">
        <h2 className="display-6 mb-2">Pratique!</h2>
        <p className="lead">
          Testes de questões multipla escolha, para você testar seu conhecimento
          de forma gratuíta.
        </p>
      </div>

      <div className="row row-cols-3 mt-3 row-gap-4">
        {courses.map((course) => (
          <div className="m-col" key={course.id}>
            <div className="card">
              <Image
                src={`https://picsum.photos/seed/${course.id * 50}/400/200`}
                width={400}
                height={200}
                className="card-img-top"
                alt={course.title}
              />
              <div className="card-body">
                <h5 className="card-tile">{course.title}</h5>
                <p className="card-text py-3 border-bottom">
                  {course.description}
                </p>
                <a href="#" className="card-link">
                  Começar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                iniciando...
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h2>Atenção!</h2>
              <h3>Você está prestes a iniciar uma avaliação.</h3>
              <p>
                Ao começar uma avaliação você será redirecionado para um outro
                ambiente.
              </p>
              <p>
                As avaliações acontecem em um simulador. Reserve de 15 à 45
                minutos para realizar uma avaliação.
              </p>
              <p>Leia as instruções atentamente antes de começar.</p>
              <p>
                Para segurança será necessário manter microfone e camera abertas
                no momento da avaliação.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Começar!
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DashboardPage;
