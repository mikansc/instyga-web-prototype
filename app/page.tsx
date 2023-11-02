import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto row text-center h-100">
        <div className="col border-end h-100">
          <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <p className="display-6 w-75 mx-auto fw-light">
              Quero me avaliar e desenvolver habilidades
            </p>
            <Link href="/account/register">
              <span className="btn btn-primary mt-4">Para profissionais</span>
            </Link>
          </div>
        </div>
        <div className="col h-100">
          <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <p className="display-6 w-75 mx-auto fw-light">
              Quero recrutar e avaliar profissionais
            </p>
            <Link href="/corporate/register">
              <button className="btn btn-primary mt-4">Para empresas</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
