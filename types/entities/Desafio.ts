export type Desafio = {
  id: string;
  titulo: string;
  trilha: string;
  habilidades: string[];
  tags: string[];
  logoUrl: string;
  estoria: string;
  instrucoes: string;
  atividades: string[];
  materialComplementar: MaterialComplementar[];
  // githubUrl: string;
  // repositorioBaseId: string;
};

type MaterialComplementar = {
  titulo: string;
  url: string;
  tipo: string;
};
