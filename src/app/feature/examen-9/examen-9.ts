import {Component} from '@angular/core';
import {Pregunta} from '../../core/models/pregunta.model';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-examen-9',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './examen-9.html',
  styleUrl: './examen-9.css',
  standalone: true
})
export class Examen9 {
  preguntas: Pregunta[] = [
    {
      id: 1,
      texto: 'Circulando en la corriente vehicular usted requiere adelantar al vehículo que circula delante. Para realizar la maniobra de adelantamiento usted está obligado a:',
      opciones: [
        'Efectuar el paso por la senda izquierda.',
        'No incorporarse por la senda o carril por la que transitaba hasta que la longitud adelantada sea superior a los 5 metros de distancia con respecto a la posición del vehículo adelantado.',
        'Realizar la maniobra una vez accionada las luces direccionales e intermitentes o, en su defecto, las de brazo correspondiente.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.1.jpg'
    },
    {
      id: 2,
      texto: 'Circulando en la corriente vehicular usted requiere adelantar al vehículo que circula delante. Para realizar la maniobra de adelantamiento usted está obligado a:',
      opciones: [
        'Efectuar el adelantamiento por la senda derecha, cuando el vehículo a adelantar circule por la senda izquierda a baja velocidad.',
        'Superar la velocidad máxima para lograr la maniobra con rapidez y evitar permanecer paralelo al vehículo que se adelanta por espacio superior a los 100 metros.',
        'Incorporarse a la senda o carril por la que transitaba después que la longitud adelantada sea por lo menos el doble de la del vehículo adelantado.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-9/9.2.jpg'
    },
    {
      id: 3,
      texto: 'Cuantos metros podrá recorrer un vehículo en marcha atrás, como maniobra complementaria de otra, que lo requiera.',
      opciones: [
        'Más de 10 metros.',
        'No exceda de 20 metros.',
        'El recorrido indispensable, hasta completar la maniobra.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-9/9.3.jpg'
    },
    {
      id: 4,
      texto: 'Al llegar a una intersección no señalizada, tendrá preferencia de paso el vehículo:',
      opciones: [
        'Que se encuentre por el lado derecho.',
        'Que se aproxime por la rotonda.',
        'Que se aproxime por la izquierda.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.4.jpg'
    },
    {
      id: 5,
      texto: 'Un vehículo destinado al transporte de carga ¿Puede circular por la autopista a más de 100 Km/h?',
      opciones: [
        'Sí, porque es la velocidad máxima permitida para ese tipo de vehículo.',
        'No, porque la velocidad máxima permisible para autopistas es de 90 Km/h.',
        'No, porque la velocidad máxima permisible para ese tipo de vehículo en autopistas, es de 90 Km/h.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-9/9.5.jpg'
    },
    {
      id: 6,
      texto: 'Como conductor de cualquier vehículo de motor, al circular por una vía, al realizar cualquier maniobra está obligado a:',
      opciones: [
        'Realizar las señales correspondientes 25 metros anteriores al lugar donde pretende efectuar la maniobra, para avisar con tiempo suficiente a los usuarios de la vía.',
        'Accionar las señales de luces pertinentes o la señal de brazo que corresponda, a una distancia anterior al lugar donde va a efectuar la maniobra, equivalentes a 5 metros por cada 15 Km./h.',
        'Avisar con antelación suficiente el lugar donde va a efectuar la maniobra, para que permita que los conductores de vehículos que conducen detrás del suyo, la perciban con tiempo.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-9/9.6.jpg'
    },
    {
      id: 7,
      texto: 'Durante la conducción de un vehículo de motor por una vía, está obligado a accionar las señales de luces direccionales e intermitentes o las de brazo correspondiente, antes de realizar cualquier maniobra de giro o cambio de carril o senda, ya sea a la derecha o a la izquierda.',
      opciones: [
        'Efectuar el giro o el cambio de senda o carril, al concederle el derecho de vía sobre aquellos que circulan por la que pretende incorporarse.',
        'Cerciorarse antes de efectuar la maniobra que no ocasionará interferencia a la circulación, ni dará lugar a un accidente.',
        'Realizar la maniobra de inmediato, con agilidad y precaución, para que los conductores de los vehículos que le preceden puedan actuar de acuerdo con la señal.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-9/9.7.jpg'
    },
    {
      id: 8,
      texto: 'El conductor de un vehículo que le precede, pretende realizar una maniobra y le avisa con antelación suficiente. Para que usted actúe de acuerdo a la señal, saca el brazo en posición vertical hacia arriba, indicándole que va a:',
      opciones: [
        'Realizar un giro o cambio de senda o carril a la derecha.',
        'Disminuir la velocidad.',
        'Cambiar de senda o carril a la izquierda.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.8.jpg'
    },
    {
      id: 9,
      texto: 'Al circular, incorporarse o cruzar una vía, ante la señal de "Ceda el Paso", como conductor de cualquier vehículo usted está obligado a:',
      opciones: [
        'Disminuir la velocidad y parar si fuera necesario, permitiéndole el paso a todos los vehículos que se aproximen por la vía transversal.',
        'Disminuir la velocidad y parar si fuera necesario, cualesquiera que sean las condiciones de visibilidad, dándole prioridad a todos los vehículos que se aproximen en sentido opuesto por la misma vía.',
        'Ceder el paso o detenerse si fuera necesario, dándole prioridad al vehículo que se aproxima por su lado izquierdo, al incorporarse o cruzar una vía de doble sentido.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.9.jpg'
    },
    {
      id: 10,
      texto: 'Usted, como conductor de un vehículo de motor al salir de un estacionamiento, parqueo o acceso con la pretensión de incorporarse o cruzar una vía, cuando no exista señal alguna que establezca la conducta a seguir, está obligado a:',
      opciones: [
        'Ceder el paso o detenerse si es necesario permitiendo el paso a todos los vehículos que se aproximan por la vía transversal.',
        'Detener la marcha, cualesquiera que sean las circunstancias de visibilidad, dándole prioridad a los vehículos que se aproximan por el lado derecho de la vía a la que pretende incorporarse.',
        'Ceder el paso al vehículo que se aproxima por la senda o carril a la que pretende incorporarse.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-9/9.10.jpg'
    },
    {
      id: 11,
      texto: 'La señal que realiza el agente de la autoridad con el brazo extendido horizontalmente al frente indica:',
      opciones: [
        'A los conductores de los vehículos que se encuentren de frente o a espaldas del agente que pueden realizar la maniobra de giro a la izquierda y a los peatones que pueden cruzar a su derecha y espalda.',
        'A los conductores de los vehículos que se encuentran a su izquierda, que pueden circular en todas direcciones y a los peatones, que pueden cruzar a su espalda.',
        'A los conductores de los vehículos que se encuentran a su derecha, que pueden circular en todas direcciones.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.11.jpg'
    },
    {
      id: 12,
      texto: 'La señal que realiza el agente de la autoridad mediante el balanceo manual de una luz roja indica:',
      opciones: [
        '"Alto" para los usuarios de la vía hacia los cuales está dirigida la luz roja.',
        'A los usuarios de la vía hacia los cuales está dirigida la luz roja que pueden circular en sentido recto o girar a la derecha.',
        '"Alto" para los usuarios de la vía hacia los cuales está dirigida la luz roja, excepto a aquellos que requieran realizar la maniobra de giro a la derecha.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.12.jpg'
    },
    {
      id: 13,
      texto: 'Usted, como conductor de cualquier vehículo de motor, al circular por una vía está obligado a mantener el máximo de velocidad autorizada cuando:',
      opciones: [
        'Circule por la senda o carril de la extrema izquierda en todas las vías de dos o más sendas o carriles destinados a la circulación en un mismo sentido.',
        'Circule por la senda o carril de la extrema izquierda solo cuando lo haga por una vía rural de dos o más sendas o carriles destinados a la circulación en un mismo sentido.',
        'Circule por la senda o carril central, en una vía de tres sendas o carriles destinados a la circulación en un mismo sentido.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.13.jpg'
    },
    {
      id: 14,
      texto: 'Cuando un conductor de vehículo de carga, de transporte colectivo de pasajeros, o profesional que actúe como tal sea detectado conduciendo después de haber ingerido bebidas alcohólicas:',
      opciones: [
        'Será sancionado administrativamente por el órgano correspondiente del ministerio del Interior con la suspensión de la licencia de conducción por un período menor de 90 días ni mayor de un año. Si, además, comete una infracción del tránsito se le duplicará el importe de la multa correspondiente a la infracción cometida.',
        'Será sancionado administrativamente por el órgano correspondiente del Ministerio del Interior con la suspensión de la licencia de conducción por un período de un mes hasta un año y además se le duplicará el importe de la multa en caso de haber cometido alguna infracción del tránsito.',
        'Será sancionado administrativamente por el órgano correspondiente del Ministerio del Interior con la cancelación de la licencia de conducción por un período entre uno y tres años naturales.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.14.jpg'
    },
    {
      id: 15,
      texto: 'Cuando un conductor cometa una infracción del tránsito conduciendo un vehículo de uso personal, y haya ingerido bebidas alcohólicas:',
      opciones: [
        'Será sancionado se le duplicará el importe de la multa correspondiente a la infracción cometida.',
        'Se le duplicará el importe de la multa correspondiente a la infracción cometida.',
        'Será sancionado administrativamente por el órgano del Ministerio del Interior con la suspensión de la licencia de conducción por un período no menor de noventa días, ni mayor de un año.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-9/9.15.jpg'
    },
    {
      id: 16,
      texto: 'El conductor de un vehículo implicado en un accidente del tránsito, está obligado:',
      opciones: [
        'Tomar las medidas a su alcance y posibilidades para advertir del hecho a los demás usuarios de la vía y tratar de restablecer la circulación en cuanto sea posible, siempre que no modifique el estado de las cosas.',
        'Tratar de restablecer la circulación, cualquiera que sean los resultados y consecuencias del hecho, a fin de evitar otro accidente.',
        'Restablecer la circulación, siempre que no resulten personas muertas o lesionados y presentarse en la unidad de la Policía de la demarcación correspondiente.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.16.jpg'
    },
    {
      id: 17,
      texto: 'El conductor de un vehículo implicado en un accidente del tránsito, está obligado a mantener el vehículo en la posición que resulte del accidente:',
      opciones: [
        'Mantener el vehículo en la posición que resulte del accidente, excepto cuando resulte necesario restablecer la circulación para evitar congestión vehicular y la posibilidad de producir otro accidente.',
        'Mantener el vehículo en la posición que resulte del accidente cuando se haya originado la muerte o lesiones a alguna persona, excepto en los casos que deba trasladar alguna víctima.',
        'Mantener el vehículo en la posición que resulte del accidente cualquiera que sean los resultados y consecuencias del hecho.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-9/9.17.jpg'
    },
    {
      id: 18,
      texto: 'Todo conductor que circule por una vía, al escuchar el sonido de la sirena o aparato similar, u observe la luz intermitente advirtiendo la prioridad en la circulación, esta obligado a:',
      opciones: [
        'Arrimarlo y detenerlo al borde derecho de la vía, en el sentido en que circula.',
        'Cambiar de senda o carril utilizando el inmediato derecho, cuando transite por una vía de más de dos sendas o carriles en un mismo sentido de dirección y continuar su desplazamiento en marcha lenta.',
        'Continuar su desplazamiento por la senda o carril por el que se encuentre circulando, disminuyendo la velocidad, para permitir el adelantamiento por el lado izquierdo del eje central de la vía.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.18.jpg'
    },
    {
      id: 19,
      texto: 'Se prohíbe la conducción de vehículos cuando:',
      opciones: [
        'Su longitud sea mayor de 12 metros, en el caso de vehículos rígidos.',
        'Su ancho exceda los 3 metros.',
        'Su altura sobrepase los 4,50 metros.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-9/9.19.jpg'
    },
    {
      id: 20,
      texto: 'Se prohíbe la conducción de vehículos cuando:',
      opciones: [
        'Su longitud sea mayor de 12 metros en el caso de vehículos articulados o conjunto de vehículos.',
        'Su altura no sobrepase los 4.50 metros.',
        'Su ancho sea mayor de 2.60 metros.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-9/9.20.jpg'
    }
  ];

  resultado: number | null = null;
  resultadoTexto: string = '';
  examenRevisado: boolean = false;
  respuestasUsuario: { [key: number]: number } = {};
  mostrarImagenes: boolean = true;
  currentYear: number = new Date().getFullYear();

  constructor() {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
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
    const preguntasFaltantes: number[] = [];
    for (let i = 1; i <= 20; i++) {
      if (this.respuestasUsuario[i] === undefined) {
        preguntasFaltantes.push(i);
      }
    }

    let total = 0;
    this.preguntas.forEach(pregunta => {
      const respuestaUsuario = this.respuestasUsuario[pregunta.id];
      if (respuestaUsuario !== undefined && respuestaUsuario === pregunta.correcta) {
        total += pregunta.valor;
      }
    });

    this.resultado = total;

    if (preguntasFaltantes.length > 0) {
      alert(`⚠️ Preguntas no contestadas: ${preguntasFaltantes.join(', ')} - Valen 0 puntos`);
    }

    if (total >= 70) {
      this.resultadoTexto = `✅ Usted ha Aprobado el Examen con ${total} Puntos`;
      alert('🎉 Felicitaciones, ha aprobado el examen. Le recomendamos que si conduce en la vía pública aplique estos conocimientos.');
    } else {
      this.resultadoTexto = `❌ Usted ha Suspendido este Examen con ${total} Puntos`;
      alert(`📚 No ha alcanzado los 70 puntos. Obtuvo ${total} puntos. Siga estudiando.`);
    }
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

  getPuntajePregunta(preguntaId: number): number {
    const pregunta = this.preguntas.find(p => p.id === preguntaId);
    if (pregunta && this.respuestasUsuario[preguntaId] !== undefined &&
      this.respuestasUsuario[preguntaId] === pregunta.correcta) {
      return pregunta.valor;
    }
    return 0;
  }

  reiniciarExamen(): void {
    if (confirm('¿Estás seguro de que deseas reiniciar el examen?')) {
      this.respuestasUsuario = {};
      this.resultado = null;
      this.resultadoTexto = '';
      this.examenRevisado = false;
    }
  }

  onImageError(event: any): void {
    console.error('Error cargando imagen:', event.target.src);
    event.target.src = 'assets/images/placeholder.jpg';
  }

  getLetraRespuesta(index: number): string {
    return index === 0 ? 'A' : index === 1 ? 'B' : 'C';
  }
}
