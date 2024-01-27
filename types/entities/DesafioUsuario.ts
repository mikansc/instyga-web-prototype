import { Desafio } from "./Desafio";
import { Usuario } from "./Usuario";

export type DesafioUsuario = {
  desafio: Desafio;
  usuario: Usuario;
  status: string;
  dataInicio: string;
  dataFim: string;
  // prId: string;
};
