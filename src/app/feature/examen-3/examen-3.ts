import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

interface Pregunta {
  id: number;
  texto: string;
  opciones: string[];
  correcta: number;
  valor: number;
}

@Component({
  selector: 'app-examen-3',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './examen-3.html',
  styleUrl: './examen-3.css',
  standalone: true
})
export class Examen3 {
  preguntas: Pregunta[] = [
    {
      id: 1,
      texto: 'Cuando la potencia de fuerza del motor se trasmite a las ruedas delanteras, se entiende como:',
      opciones: [
        'Propulsión delantera.',
        'Tracción.',
        'Propulsión total.'
      ],
      correcta: 0, // Inciso A - Propulsión delantera
      valor: 5
    },
    {
      id: 2,
      texto: 'Las causas de los accidentes del tránsito pueden ser imputables al:',
      opciones: [
        'Tránsito de vehículos que circula por una vía.',
        'Estado del tiempo.',
        'Comportamiento del hombre, el vehículo y la vía.'
      ],
      correcta: 2, // Inciso C - Comportamiento del hombre, el vehículo y la vía
      valor: 5
    },
    {
      id: 3,
      texto: 'Las luces de posición serán de color:',
      opciones: [
        'Blanco o rojo en los autos.',
        'Rojas en los camiones.',
        'Blanco o amarillo para todos los vehículos.'
      ],
      correcta: 2, // Inciso C - Blanco o amarillo para todos los vehículos
      valor: 5
    },
    {
      id: 4,
      texto: 'La señal triangular que se observa le advierte del peligro representado por:',
      opciones: [
        'La prioridad de un paso para ganado.',
        'La proximidad de un lugar frecuentado por animales en libertad.',
        'La proximidad de una zona por la que cruzan frecuentemente animales domésticos o grupos de animales.'
      ],
      correcta: 2, // Inciso C - La proximidad de una zona por la que cruzan frecuentemente animales domésticos o grupos de animales
      valor: 5
    },
    {
      id: 5,
      texto: 'La luz amarilla de un semáforo indica a los conductores de vehículos:',
      opciones: [
        'Que no están obligados a detenerse en la línea de PARE.',
        'Continuar su marcha por la vía en que circulan.',
        'Detenerse de la línea de PARE o en la vertical de la señal correspondiente en condiciones de seguridad.'
      ],
      correcta: 2, // Inciso C - Detenerse de la línea de PARE o en la vertical de la señal correspondiente en condiciones de seguridad
      valor: 5
    },
    {
      id: 6,
      texto: 'De los siguientes componentes de un vehículo diga ¿Cuál forma parte de la suspensión?',
      opciones: [
        'El caráter interior.',
        'El cigüeñal.',
        'Los amortiguadores.'
      ],
      correcta: 2, // Inciso C - Los amortiguadores
      valor: 5
    },
    {
      id: 7,
      texto: 'Es usted conductor de un automóvil cuyo peso máximo no exceda de 3500 kilogramos. Para verificar el estado técnico del sistema de frenado de su vehículo, circulando a una velocidad de 30 Km/h en condiciones normales del pavimento, al pisar el freno, la distancia máxima recorrida debe ser:',
      opciones: [
        '11 metros.',
        '7.2 metros.',
        '9.5 metros.'
      ],
      correcta: 1, // Inciso B - 7.2 metros
      valor: 5
    },
    {
      id: 8,
      texto: 'Circulando un vehículo ligero a la velocidad de 30 km/h, al pisar el pedal del freno la desaceleración en mts/seg, debe ser de:',
      opciones: [
        '5.6 mts/seg.',
        '5.8 mts/seg.',
        '5.0 mts/seg.'
      ],
      correcta: 1, // Inciso B - 5.8 mts/seg
      valor: 5
    },
    {
      id: 9,
      texto: 'Es usted conductor de un automóvil cuyo peso máximo oscila entre 3500 hasta 8000 kilogramos. Para verificar el estado técnico del sistema de frenado de su vehículo, circulando cargado de mercancía, a una velocidad de 30 Km/h en condiciones normales del pavimento, al pisar el freno, la distancia máxima recorrida debe ser:',
      opciones: [
        '11.8 metros.',
        '11.5 metros.',
        '13.5 metros.'
      ],
      correcta: 0, // Inciso A - 11.8 metros
      valor: 5
    },
    {
      id: 10,
      texto: 'Es usted conductor de un automóvil cuyo peso máximo oscila entre 3500 hasta 8000 kilogramos. Para verificar el estado técnico del sistema de frenado de su vehículo, circulando sin carga, a una velocidad de 30 Km/h en condiciones normales del pavimento, al pisar el freno, la distancia máxima recorrida debe ser:',
      opciones: [
        '8.3 metros.',
        '10.5 metros.',
        '9.5 metros.'
      ],
      correcta: 2, // Inciso C - 9.5 metros
      valor: 5
    },
    {
      id: 11,
      texto: 'Es usted conductor de un ómnibus de 7.5 metros de largo. Para verificar el estado técnico del sistema de frenado de su vehículo, circulando con pasajeros a una velocidad de 30 Km/h en condiciones normales del pavimento, al pisar el freno, la distancia máxima recorrida debe ser:',
      opciones: [
        '11.8 metros.',
        '9.5 metros.',
        '13.5 metros.'
      ],
      correcta: 0, // Inciso A - 11.8 metros
      valor: 5
    },
    {
      id: 12,
      texto: 'Es usted conductor de una motocicleta. Para verificar el estado técnico del sistema de frenado de su motocicleta, circulando a una velocidad de 30 Km/h en condiciones normales del pavimento, al pisar el freno, la distancia máxima recorrida debe ser:',
      opciones: [
        '11.8 metros.',
        '9.5 metros.',
        '7.5 metros.'
      ],
      correcta: 2, // Inciso C - 7.5 metros
      valor: 5
    },
    {
      id: 13,
      texto: 'En las curvas de visibilidad reducida en vías de 50 km/h la longitud mínima de visibilidad en mts es de:',
      opciones: [
        '180 mts.',
        '210 mts.',
        '150 mts.'
      ],
      correcta: 2, // Inciso C - 150 mts
      valor: 5
    },
    {
      id: 14,
      texto: 'Los poseedores legales de vehículos quedan obligados a comunicar al registro, dentro de los 10 días siguientes de haberse realizado:',
      opciones: [
        'La Reinscripción.',
        'El cambio de chapas.',
        'Las altas o nuevas inscripciones.'
      ],
      correcta: 2, // Inciso C - Las altas o nuevas inscripciones
      valor: 5
    },
    {
      id: 15,
      texto: 'El conductor de un vehículo que circula delante del suyo saca el brazo manteniéndolo en posición inclinada hacia abajo con la palma de la mano hacia atrás. ¿Qué le indica?',
      opciones: [
        'Que va a desplazarse al carril izquierdo.',
        'Que va a disminuir la velocidad o parar.',
        'Que circula en situación de emergencia.'
      ],
      correcta: 1, // Inciso B - Que va a disminuir la velocidad o parar
      valor: 5
    },
    {
      id: 16,
      texto: 'Si la batería de su vehículo necesita mantenimiento, para la reposición del líquido añadirá:',
      opciones: [
        'Agua destilada y ácido sulfúrico, en proporciones iguales.',
        'Únicamente ácido sulfúrico.',
        'Sólo agua destilada.'
      ],
      correcta: 2, // Inciso C - Sólo agua destilada
      valor: 5
    },
    {
      id: 17,
      texto: '¿Se podrá construir un vehículo mediante el ensamblaje de partes y piezas?',
      opciones: [
        'No, si no tiene las facturas de las partes y piezas nuevas.',
        'No, si el vehículo es particular.',
        'No, se prohíbe en la legislación vigente.'
      ],
      correcta: 2, // Inciso C - No, se prohíbe en la legislación vigente
      valor: 5
    },
    {
      id: 18,
      texto: 'Un ciudadano se presenta a las oficinas de Licencia con el objetivo de obtener la licencia de conducción categoría C, el mismo no es titular de licencia de ninguna categoría. ¿Podrá cumplir la pretensión el aspirante?',
      opciones: [
        'Sí, porque es su voluntad conducir ese tipo de vehículo.',
        'No, porque no tiene los conocimientos necesarios para conducir camiones.',
        'No, porque debe ser titular de una licencia de conducción de la categoría B y tener 2 años de experiencia en la misma.'
      ],
      correcta: 2, // Inciso C - No, porque debe ser titular de una licencia de conducción de la categoría B y tener 2 años de experiencia en la misma
      valor: 5
    },
    {
      id: 19,
      texto: 'De las señales horizontales. Una línea continua con una discontinua a su lado significa:',
      opciones: [
        'Que los conductores no pueden cruzarla cuando a su lado izquierdo está 1ro. la línea continua.',
        'Que los conductores pueden cruzarla cuando a su lado izquierdo está 1ro. la línea continua.',
        ''
      ],
      correcta: 0, // Inciso A - Que los conductores no pueden cruzarla cuando a su lado izquierdo está 1ro. la línea continua
      valor: 5
    },
    {
      id: 20,
      texto: 'Los conductores profesionales que no aprueban la reevaluación se le podrá aplicar como medida administrativa:',
      opciones: [
        'La suspensión de la licencia de conducción por un período de un mes a un año.',
        'La cancelación de la licencia de conducción, quienes no podrán optar por una nueva licencia hasta transcurridos 6 meses a partir de la cancelación.',
        'La cancelación de la licencia de conducción, quienes no podrán optar por una nueva licencia hasta transcurrido un año a partir de la cancelación.'
      ],
      correcta: 1, // Inciso B - La cancelación de la licencia de conducción, quienes no podrán optar por una nueva licencia hasta transcurridos 6 meses a partir de la cancelación
      valor: 5
    }
  ];

  imagenesApoyo: string[] = [
    'I0002630.JPG',
    'I0007580.jpg',
    'I0001490.jpg',
    'I0005230.jpg',
    'I0001170.jpg',
    'I0000140.jpg',
    'I0002130.jpg',
    'I0002780.jpg',
    'I0002680.jpg',
    'I0003320.JPG',
    'I0002480.jpg',
    'I0003330.jpg',
    'I0007280.jpg',
    'I0000261.jpg',
    'I0002490.jpg',
    'I0006980.jpg',
    'I0000250.jpg',
    'I0008080.jpg',
    'I0003650.jpg',
    'I0007550.jpg'
  ];

  imagenesIntegradas: { [key: number]: string } = {
    4: 'I0001490.jpg',
    8: 'I0002480.jpg',
    13: 'I0007550.jpg'
  };

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
    event.target.src = 'assets/images/placeholder.jpg';
  }

  getLetraRespuesta(index: number): string {
    return index === 0 ? 'A' : index === 1 ? 'B' : 'C';
  }
}
