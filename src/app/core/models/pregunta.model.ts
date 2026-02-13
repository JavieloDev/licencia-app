export interface Pregunta {
  id: number;
  texto: string;
  opciones: string[];
  correcta: number;
  valor: number;
  imagen?: string;
}
