import {Component} from '@angular/core';
import {Pregunta} from '../../core/models/pregunta.model';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-examen-10',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './examen-10.html',
  styleUrl: './examen-10.css',
  standalone: true
})
export class Examen10 {
  preguntas: Pregunta[] = [
    {
      id: 1,
      texto: 'Se prohíbe la conducción de vehículos cuando:',
      opciones: [
        'Su altura sea mayor que 4 metros.',
        'Su longitud no sobrepase los 18 metros en el caso de vehículo rígidos.',
        'El peso de la carga que transporte exceda del máximo autorizado y señalado en el permiso o licencia de circulación, salvo autorización.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-10/10.1.jpg'
    },
    {
      id: 2,
      texto: 'Se prohíbe la conducción de vehículos cuando:',
      opciones: [
        'La carga útil exceda de 50 toneladas métricas, si se tratase de vehículos articulados o conjunto de vehículos.',
        'El peso de la carga que transporte exceda del máximo autorizado por las condiciones técnicas del vehículo y señalado en el permiso o licencia de circulación.',
        'Su longitud sobrepase los 10 metros, en el caso de vehículos rígidos.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-10/10.2.jpg'
    },
    {
      id: 3,
      texto: 'Se prohíbe la conducción de vehículos cuando:',
      opciones: [
        'La longitud sea mayor de 15 metros en el caso de vehículos articulados y 20 metros si se tratase de conjunto de vehículos.',
        'Su ancho sobrepase los 2,75 metros.',
        'La carga útil exceda de 30 toneladas métricas en el caso de vehículos rígidos o articulados.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-10/10.3.jpg'
    },
    {
      id: 4,
      texto: 'Al conducir un vehículo por una vía rural de más de dos carriles destinados al mismo sentido de circulación, usted como conductor deberá tener presente:',
      opciones: [
        'Hacerlo siempre por el carril de su extrema derecha, cuando transite a una velocidad inferior a la autorizada para la vía, excepto cuando las condiciones físicas de la vía no lo permitan.',
        'Hacerlo siempre por el carril de su extrema derecha, cuando transite a velocidades inferiores a 60 Km/h, y utilizar el inmediato izquierdo para adelantar.',
        'Hacerlo siempre por el carril inmediato izquierdo, cuando transite a velocidades inferiores a 60 Km/h y utilizar el carril de su extrema derecha, para permitir el adelantamiento al vehículo que se le aproxima por detrás en su misma dirección.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-10/10.4.jpg'
    },
    {
      id: 5,
      texto: 'Usted, como conductor de cualquier vehículo de motor, al circular por una vía, deberá tener presente:',
      opciones: [
        'Circular por la izquierda, en sentido contrario, en una vía urbana o rural de doble sentido de dirección, solo para adelantar a otro.',
        'No circular por la izquierda, en sentido contrario, en una vía de doble sentido de dirección, en zona urbana o rural.',
        'No circular por la izquierda, en sentido contrario, en una vía de doble sentido de dirección, excepto cuando no se aproxime ningún vehículo en sentido opuesto y las condiciones de la calzada así lo permita.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-10/10.5.jpg'
    },
    {
      id: 6,
      texto: 'Usted, como conductor de cualquier vehículo de motor, al circular por una vía está obligado a mantener el máximo de velocidad autorizada cuando:',
      opciones: [
        'Circule por la senda o carril de la extrema izquierda en todas las vías de dos o más sendas o carriles destinados a la circulación en un mismo sentido.',
        'Circule por la senda o carril de la extrema izquierda solo cuando lo haga por una vía rural de dos o más sendas o carriles destinados a la circulación en un mismo sentido.',
        'Circule por la senda o carril central, en una vía de tres sendas o carriles destinados a la circulación en un mismo sentido.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-10/10.6.jpg'
    },
    {
      id: 7,
      texto: 'Cuando un agente de la Policía Nacional Revolucionaria ordene a un conductor la detención del vehículo, este deberá:',
      opciones: [
        'Hacerlo de inmediato y tomando las medidas de precaución correspondientes, parqueando en el margen derecho de la vía en el sentido en que circula y, si las condiciones lo permiten, fuera de la calzada.',
        'Hacerlo de inmediato y tomando las medidas para no obstruir la circulación, estacionando el vehículo en el extremo izquierdo de la vía si fuera de un solo sentido de circulación y en el sentido en que transita y fuera de la calzada, siempre que las condiciones físicas de la vía lo permitan.',
        'Hacerlo de inmediato adoptando las precauciones necesarias para no ocasionar un accidente, próximos al contén o borde derecho de la vía, en el sentido en que circula, a una distancia no mayor a los 20 metros posteriores al agente.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-10/10.7.jpg'
    },
    {
      id: 8,
      texto: 'Usted como conductor de cualquier vehículo de motor para el transporte de carga, está obligado a:',
      opciones: [
        'Portar la hoja de ruta y cuantos más documentos estén establecidos.',
        'Realizar los recorridos por vías secundarias, cuando circula por zona urbanas.',
        'Circular a 40 Km/h en vías urbanas y no exceder los 60Km/h en vías rurales.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-10/10.8.jpg'
    },
    {
      id: 9,
      texto: 'Usted como conductor de cualquier vehículo de motor para el transporte de carga, está obligado a:',
      opciones: [
        'Circular por vías secundarias, cuando por zonas urbanas, salvo en los casos en que el Ministerio del Interior autorice la circulación por vías principales en esta zona.',
        'No exceder los 40 Km/h en vías urbanas, ni superar los 60 Km/h en vías rurales.',
        'Realizar el recorrido por la vía establecida en la hoja de ruta.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-10/10.9.jpg'
    },
    {
      id: 10,
      texto: 'Todo conductor de un vehículo dedicado al transporte de carga deberá tener en cuenta que la carga que traslada esté acondicionada y sujeta de modo que:',
      opciones: [
        'No estorbe la visibilidad del conductor, salvo que las circunstancias así lo impongan.',
        'No ponga en peligro la integridad física de las personas, ni pueda causar daño a las cosas.',
        'No se arrastre por la vía, excepto con la autorización correspondiente del órgano de vialidad del Ministerio del Transporte y el Ministerio del Interior.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-10/10.10.jpg'
    },
    {
      id: 11,
      texto: 'Es usted conductor de un vehículo cuyo peso máximo es superior a los 8000 kilogramos. Para verificar el estado técnico del sistema de frenado de su vehículo, circulando sin carga a una velocidad de 30 Km/h en condiciones normales del pavimento, al pisar el freno, la distancia máxima recorrida debe ser:',
      opciones: [
        '11.0 metros.',
        '9.5 metros.',
        '13.5 metros.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-10/10.11.jpg'
    },
    {
      id: 12,
      texto: 'Para advertir al conductor del vehículo que circula detrás del suyo, su intención de realizar un cambio de dirección a la derecha (un giro o cambio de senda) deberá indicarlo haciendo una señal con su brazo izquierdo:',
      opciones: [
        'Manteniéndolo inclinado hacia abajo, con la palma de la mano hacia atrás.',
        'En posición vertical hacia arriba.',
        'Extendido en posición horizontal, con la palma de la mano hacia abajo.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-10/10.12.jpg'
    },
    {
      id: 13,
      texto: 'Al circular, incorporarse o cruzar una vía, ante la señal de "Ceda el Paso", como conductor de un vehículo está usted obligado a:',
      opciones: [
        'Detener la marcha, cualesquiera que sean las circunstancias de visibilidad, dándole prioridad a los vehículos que circulan por la transversal.',
        'Disminuir la velocidad y parar si fuera necesario, ante los vehículos que por la vía transversal se aproximan por su lado derecho.',
        'Disminuir la velocidad y parar si fuera necesario, a fin de permitir el paso a todos los vehículos que se aproximen por la vía transversal.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-10/10.13.jpg'
    },
    {
      id: 14,
      texto: 'Circulando por una vía de un solo sentido de dirección, al aproximarse a una intersección, está usted obligado a:',
      opciones: [
        'Detener la marcha si la visibilidad no resulta suficiente para observar los vehículos que por la transversal se aproximan por su lado derecho.',
        'Disminuir la velocidad y parar si fuera necesario, ante la señal de Ceda el Paso.',
        'Disminuir la velocidad y continuar la marcha, si la visibilidad es buena, tomando las precauciones necesarias.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-10/10.14.jpg'
    },
    {
      id: 15,
      texto: 'Para realizar un giro a la derecha, desde una vía de un solo sentido de circulación hacia la transversal de doble sentido, deberá hacerlo:',
      opciones: [
        'Desde el carril de la extrema derecha.',
        'Desde la senda de la extrema izquierda.',
        'Desde dos o más carriles.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-10/10.15.jpg'
    },
    {
      id: 16,
      texto: 'Para realizar un giro a la izquierda, desde una vía de doble sentido de circulación hacia la transversal de un solo sentido, deberá hacerlo:',
      opciones: [
        'Desde el carril de la extrema izquierda de la calzada por donde circula.',
        'Desde el carril de la extrema izquierda de la calzada, en el sentido por donde circula.',
        'Desde dos o más carriles.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-10/10.16.jpg'
    },
    {
      id: 17,
      texto: 'Antes de realizar un giro en forma de U, todo conductor está obligado a hacerlo sin poner en peligro a los demás usuarios de la vía y para ello tendrá en cuenta hacerlo:',
      opciones: [
        'A no menos de 100 metros anteriores a la entrada o posteriores a la salida de una curva de visibilidad reducida.',
        'En intersecciones semaforizadas, donde se permita por la señal correspondiente, durante la proyección de la luz verde permitiendo el giro a la izquierda.',
        'En intersecciones semaforizadas, cuando el semáforo proyecte la luz verde autorizando el giro a la izquierda.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-10/10.17.jpg'
    },
    {
      id: 18,
      texto: 'Para realizar una maniobra de marcha atrás, usted como conductor tendrá en cuenta que:',
      opciones: [
        'Realizarla libremente siempre que las condiciones de visibilidad, circulación y estado de la vía no sean adversas.',
        'La velocidad no sea superior a los 20 Km/h.',
        'No efectuarla próximo a un cambio de rasante, donde pueda ver la continuación de la vía a una distancia de 100 metros hacia atrás o hacia delante.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-10/10.18.jpg'
    },
    {
      id: 19,
      texto: 'Transitando por la senda izquierda de una vía de doble sentido de dirección, con dos carriles en ambos sentidos, usted adelantará al vehículo que marcha delante:',
      opciones: [
        'Por la senda más próxima a la izquierda, si el eje central de la vía está marcado con línea discontinua.',
        'Por la senda de la derecha, comprobando que no interfiere a los demás usuarios de la vía.',
        'Una vez que el conductor abandone la senda por la cual ambos circulan y se incorpore al carril de la derecha.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-10/10.19.jpg'
    },
    {
      id: 20,
      texto: 'Transitando usted por una carretera, conduciendo un vehículo rígido o articulado, destinado al transporte de carga, la velocidad que podrá desarrollar en su desplazamiento no excederá:',
      opciones: [
        '80 Km/h.',
        '90 Km/h.',
        '100 Km/h.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-10/10.20.jpg'
    }
  ];

  imagenesApoyo: string[] = [
    'assets/images/examen-10/10.1.jpg',
    'assets/images/examen-10/10.2.jpg',
    'assets/images/examen-10/10.3.jpg',
    'assets/images/examen-10/10.4.jpg',
    'assets/images/examen-10/10.5.jpg',
    'assets/images/examen-10/10.6.jpg',
    'assets/images/examen-10/10.7.jpg',
    'assets/images/examen-10/10.8.jpg',
    'assets/images/examen-10/10.9.jpg',
    'assets/images/examen-10/10.10.jpg',
    'assets/images/examen-10/10.11.jpg',
    'assets/images/examen-10/10.12.jpg',
    'assets/images/examen-10/10.13.jpg',
    'assets/images/examen-10/10.14.jpg',
    'assets/images/examen-10/10.15.jpg',
    'assets/images/examen-10/10.16.jpg',
    'assets/images/examen-10/10.17.jpg',
    'assets/images/examen-10/10.18.jpg',
    'assets/images/examen-10/10.19.jpg',
    'assets/images/examen-10/10.20.jpg'
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

  getLetraRespuesta(index: number): string {
    return index === 0 ? 'A' : index === 1 ? 'B' : 'C';
  }
}
