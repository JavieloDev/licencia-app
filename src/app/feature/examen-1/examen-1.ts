import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

interface Pregunta {
  id: number;
  texto: string;
  opciones: string[];
  correcta: number;
  valor: number;
  imagen?: string;
}

@Component({
  selector: 'app-examen-1',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './examen-1.html',
  styleUrl: './examen-1.css',
  standalone: true
})
export class Examen1 {
  preguntas: Pregunta[] = [
    {
      id: 1,
      texto: 'La señal que realiza el agente de la autoridad en la vía con uno o los dos brazos extendidos horizontalmente como continuación de su hombro significa:',
      opciones: [
        'Que los usuarios de la vía deben detenerse de inmediato.',
        'Que todos los usuarios de la vía que se encuentren de frente o a espalda del agente deben detenerse de inmediato y que solamente los que se encuentren en el mismo sentido de dirección del brazo o los brazos pueden continuar en ese mismo sentido o realizar todas aquellas maniobras que no estén prohibidas en el cruce o intersección.',
        'Que los usuarios de la vía deben continuar la marcha.'
      ],
      correcta: 1,
      valor: 5,
      imagen: 'assets/images/examen-1/1.1.jpg'
    },
    {
      id: 2,
      texto: 'La doble línea continua en el pavimento significa:',
      opciones: [
        'El límite derecho de la calzada que puede cruzarse para efectuar una detención.',
        'Que la misma está próxima a continuar en una línea continua.',
        'Que ningún vehículo podrá cruzarla ni circular sobre ella.'
      ],
      correcta: 2,
      valor: 5,
      imagen: 'assets/images/examen-1/1.2.jpg'
    },
    {
      id: 3,
      texto: 'El conductor de un vehículo podrá realizar la marcha atrás siempre que existan condiciones de visibilidad, circulación y cuando:',
      opciones: [
        'El estado de la vía lo permita.',
        'Las condiciones del pavimento lo permitan.',
        'La distancia a recorrer no exceda de 20 metros.'
      ],
      correcta: 2,
      valor: 5,
      imagen: 'assets/images/examen-1/1.3.jpg'
    },
    {
      id: 4,
      texto: 'Si usted circula conduciendo su vehículo por una vía urbana y desea adelantar a otro está obligado a:',
      opciones: [
        'Efectuar el paso o adelantamiento de un vehículo en marcha por la senda derecha.',
        'Efectuar el paso o adelantamiento de un vehículo en marcha por la senda izquierda.',
        'Después de ejecutada la maniobra, incorporarse al carril por el que transitaba de inmediato.'
      ],
      correcta: 1,
      valor: 5,
      imagen: 'assets/images/examen-1/1.4.jpg'
    },
    {
      id: 5,
      texto: 'Mientras se conduce ¿Es correcto conducir con una sola mano sobre el volante?',
      opciones: [
        'Sí, porque no se reduce el margen de maniobra.',
        'No, porque se disipa el control y atención del vehículo.',
        'No, excepto para realizar las señales establecidas para los giros.'
      ],
      correcta: 2,
      valor: 5,
      imagen: 'assets/images/examen-1/1.5.jpg'
    },
    {
      id: 6,
      texto: 'Cuál es la distancia que debe usted guardar, como mínimo con el vehículo que le antecede.',
      opciones: [
        '5 metros por cada 20 Km/h de velocidad.',
        '10 metros por cada 15 Km/h de velocidad.',
        '5 metros por cada 15 Km/h de velocidad.'
      ],
      correcta: 2,
      valor: 5,
      imagen: 'assets/images/examen-1/1.6.jpg'
    },
    {
      id: 7,
      texto: 'No se autoriza a realizar la vuelta o giro en forma de U, en...',
      opciones: [
        'Los pasos a nivel.',
        'A menos de 150 metros anterior o posterior a una curva de visibilidad reducida.',
        'Los lugares en que no esté prohibido siempre que no ponga en riesgo la vida de los demás usuarios de la vía.'
      ],
      correcta: 1,
      valor: 5,
      imagen: 'assets/images/examen-1/1.7.jpg'
    },
    {
      id: 8,
      texto: 'El estacionamiento o parqueo de un vehículo podrá realizarse:',
      opciones: [
        'A una distancia no menor de 50 cm de otro vehículo.',
        'Con las ruedas del vehículo a distancia no mayor de 10 centímetro del contén de la acera o borde de la calzada.',
        'A una distancia no menor de 30 centímetros de otro vehículo.'
      ],
      correcta: 1,
      valor: 5,
      imagen: 'assets/images/examen-1/1.8.jpg'
    },
    {
      id: 9,
      texto: 'El estacionamiento o parqueo de vehículo se prohíbe en los lugares siguientes...',
      opciones: [
        'En el espacio de 20 m hacia atrás y 10 m hacia delante de la señal oficial de parada de ómnibus.',
        'Frente a los parterres en vías residenciales.',
        'Paralelo a la dirección de la circulación.'
      ],
      correcta: 0,
      valor: 5,
      imagen: 'assets/images/examen-1/1.9.jpg'
    },
    {
      id: 10,
      texto: 'En los camiones destinados a la transportación de personas, se podrá:',
      opciones: [
        'Viajar sentado sobre la carga, siempre que no ofrezca peligro.',
        'Viajar hasta 4 personas de pie por metros cuadrados.',
        'Viajar estando provisto de barandas de 30 cm de altura.'
      ],
      correcta: 1,
      valor: 5,
      imagen: 'assets/images/examen-1/1.10.jpg'
    },
    {
      id: 11,
      texto: 'Las luces de cruce y carretera de un vehículo deben ser de color...',
      opciones: [
        'Blanco o amarillo.',
        'Rojo.',
        'Marrón.'
      ],
      correcta: 0,
      valor: 5,
      imagen: 'assets/images/examen-1/1.11.jpg'
    },
    {
      id: 12,
      texto: 'El que conduzca cualquier vehículo, de uso personal está obligado a mantener concentrada toda la atención en su control y dirección, por lo que se prohíbe:',
      opciones: [
        'Entablar conversación con otra persona mientras conduce.',
        'Utilizar teléfonos u otros medios de comunicación mientras que el vehículo esté en marcha.',
        'Mantener más de 5 metros de distancia por cada 15 Km/h de velocidad entre vehículos.'
      ],
      correcta: 1,
      valor: 5,
      imagen: 'assets/images/examen-1/1.12.jpg'
    },
    {
      id: 13,
      texto: 'Las luces de cruce o corta deben estar situadas:',
      opciones: [
        'A no más de 40 cm. de los bordes exteriores del vehículo.',
        'Cerca del borde extremo del vehículo.',
        'En los bordes exteriores de las luces de posición.'
      ],
      correcta: 0,
      valor: 5,
      imagen: 'assets/images/examen-1/1.13.jpg'
    },
    {
      id: 14,
      texto: 'Cuando la potencia o fuerza del motor se trasmite a las ruedas delanteras, se entiende como...',
      opciones: [
        'Propulsión delantera.',
        'Tracción.',
        'Propulsión total.'
      ],
      correcta: 0,
      valor: 5,
      imagen: 'assets/images/examen-1/1.14.jpg'
    },
    {
      id: 15,
      texto: 'Se prohíbe a los peatones al circular por una vía:',
      opciones: [
        'Formar grupo en las aceras.',
        'Circular lo más próximo posible al contén de la acera o borde de la misma.',
        'Caminar por el lado derecho de la dirección en que transiten en zona urbana.'
      ],
      correcta: 0,
      valor: 5,
      imagen: 'assets/images/examen-1/1.15.jpg'
    },
    {
      id: 16,
      texto: 'El conductor de un ciclo debe:',
      opciones: [
        'Conducir en el sentido del tránsito en vías destinadas para vehículos rápidos.',
        'Conducir a menos de 1 metro de la acera.',
        'Conducir en marcha paralela a otro vehículo.'
      ],
      correcta: 0,
      valor: 5,
      imagen: 'assets/images/examen-1/1.16.jpg'
    },
    {
      id: 17,
      texto: 'Ningún vehículo cargado está autorizado a circular cuando:',
      opciones: [
        'La altura de la carga exceda de 4 metros sobre el terreno o pavimento.',
        'La altura máxima de la carga exceda de 2 metros sobre el terreno o pavimento.',
        'La altura máxima de la carga exceda de 1 metro sobre el terreno o pavimento.'
      ],
      correcta: 0,
      valor: 5,
      imagen: 'assets/images/examen-1/1.17.jpg'
    },
    {
      id: 18,
      texto: 'Cuando usted se aproxima a un paso a nivel sin guardabarreras, barreras u otras señales sonoras y lumínicas del ferrocarril está obligado a:',
      opciones: [
        'Moderar la velocidad y tomar precauciones.',
        'Detener la marcha o ceder el paso.',
        'Ceder el paso.'
      ],
      correcta: 1,
      valor: 5,
      imagen: 'assets/images/examen-1/1.18.jpg'
    },
    {
      id: 19,
      texto: 'La maniobra de marcha atrás debe realizarse siempre que:',
      opciones: [
        'La distancia a recorrer exceda los 20 metros.',
        'La velocidad no sea superior a 20 Km/h.',
        'La velocidad sea superior a 25 Km/h.'
      ],
      correcta: 1,
      valor: 5,
      imagen: 'assets/images/examen-1/1.19.jpg'
    },
    {
      id: 20,
      texto: 'Como norma general, está prohibido adelantar...',
      opciones: [
        'En los pasos peatonales.',
        'En las curvas de visibilidad reducida.',
        'En los caminos de tierra o terraplén.'
      ],
      correcta: 1,
      valor: 5,
      imagen: 'assets/images/examen-1/1.20.jpg'
    }
  ];

  resultado: number | null = null;
  resultadoTexto: string = '';
  examenRevisado: boolean = false;
  respuestasUsuario: { [key: number]: number } = {};
  currentYear: number = new Date().getFullYear();
  mostrarImagenes: boolean = true;

  constructor() {
    if (window.innerWidth < 1024) {
      this.mostrarImagenes = false;
    }
  }

  toggleImagenes(): void {
    this.mostrarImagenes = !this.mostrarImagenes;
  }

  seleccionarRespuesta(preguntaId: number, opcionIndex: number): void {
    this.respuestasUsuario[preguntaId] = opcionIndex;
  }

  verResultado(): void {
    // Calcular resultado SIEMPRE, incluso si hay preguntas sin contestar
    let total = 0;

    this.preguntas.forEach(pregunta => {
      // Si la pregunta está contestada Y es correcta, suma puntos
      if (this.respuestasUsuario[pregunta.id] !== undefined &&
        this.respuestasUsuario[pregunta.id] === pregunta.correcta) {
        total += pregunta.valor;
      }
      // Si no está contestada o es incorrecta, suma 0 (automático)
    });

    // Asignar el resultado SIEMPRE
    this.resultado = total;

    // Verificar si faltan preguntas por contestar (solo para informar)
    const preguntasFaltantes: number[] = [];
    for (let i = 1; i <= 20; i++) {
      if (this.respuestasUsuario[i] === undefined) {
        preguntasFaltantes.push(i);
      }
    }

    // Mostrar alerta de preguntas faltantes (si hay)
    if (preguntasFaltantes.length > 0) {
      alert(`Falta${preguntasFaltantes.length > 1 ? 'n' : ''} la pregunta${preguntasFaltantes.length > 1 ? 's' : ''} ${preguntasFaltantes.join(', ')} por contestar - Se tomarán como 0 puntos`);
    }

    // Determinar si aprobó o no (nota mínima 70)
    if (total >= 70) {
      this.resultadoTexto = `✅ Usted ha Aprobado el Examen con ${total} Puntos`;
      alert('🎉 Felicitaciones, ha aprobado el examen. Le recomendamos que si conduce en la vía pública aplique estos conocimientos.');
    } else {
      this.resultadoTexto = `❌ Usted ha Suspendido este Examen con ${total} Puntos`;
      alert('⚠️ Usted no ha aprobado el examen. Las preguntas no contestadas valen 0 puntos. Estudie más y vuelva a intentarlo.');
    }

    console.log('📊 Resultado calculado:', this.resultado);
    console.log('❓ Preguntas faltantes:', preguntasFaltantes.length > 0 ? preguntasFaltantes : 'Ninguna');
  }

  revisarExamen(): void {
    if (this.resultado === null) {
      this.verResultado();
    }
    this.examenRevisado = true;
  }

  cerrarRevision(): void {
    this.examenRevisado = false;
  }

  getRespuestaCorrecta(preguntaId: number): string {
    const pregunta = this.preguntas.find(p => p.id === preguntaId);
    if (pregunta) {
      return `Inciso ${String.fromCharCode(65 + pregunta.correcta)}`; // A, B, C
    }
    return '';
  }

  getPuntajePregunta(preguntaId: number): number {
    const pregunta = this.preguntas.find(p => p.id === preguntaId);
    if (pregunta && this.respuestasUsuario[preguntaId] === pregunta.correcta) {
      return pregunta.valor;
    }
    return 0;
  }

  reiniciarExamen(): void {
    this.respuestasUsuario = {};
    this.resultado = null;
    this.resultadoTexto = '';
    this.examenRevisado = false;
  }

  getLetraRespuesta(index: number): string {
    return index === 0 ? 'A' : index === 1 ? 'B' : 'C';
  }
}
