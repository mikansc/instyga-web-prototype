export const CurrentCertificationPathHero = () => {
  return (
    <div className="p-4 d-flex justify-content-space-between text-bg-dark shadow">
      <div className="flex-grow-1">
        <span className="d-block">Trilha em Andamento:</span>
        <h2 className="h1">Desenvolvedor .NET Júnior</h2>
      </div>
      <div className="me-5">
        <span className="d-block">Avaliações Concluidas:</span>
        <span className="h1 d-block text-center">3</span>
      </div>
      <div>
        <span className="d-block">Avaliações Restantes:</span>
        <span className="h1 d-block text-center">1</span>
      </div>
    </div>
  );
};
