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
  selector: 'app-examen-7',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './examen-7.html',
  styleUrl: './examen-7.css',
  standalone: true
})
export class Examen7 {
  preguntas: Pregunta[] = [
    {
      id: 1,
      texto: 'Antes de comenzar la marcha de su vehículo, usted debe:',
      opciones: [
        'Accionar todo los mandos del vehículo para verificar su estado de funcionamiento.',
        'Comprobar su posición frente al volante, regular el asiento si fuera necesario y verificar la posición de los espejos retrovisores.',
        'Esperar hasta que el motor del vehículo alcance la temperatura necesaria para iniciar el movimiento.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-7/7.1.jpg'
    },
    {
      id: 2,
      texto: 'Al estacionar su vehículo en un lugar donde no exista prohibición para hacerlo, deberá efectuarlo:',
      opciones: [
        'Paralelo a la dirección de la circulación y junto a la acera y borde derecho de la calzada de dos direcciones.',
        'Entre una zona de seguridad y la acera.',
        'En el espacio de 20 metros hacia atrás y 10 metros hacia delante de la señal oficial de parada de ómnibus.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-7/7.2.jpg'
    },
    {
      id: 3,
      texto: 'La señal de cruce con preferencia a que grupo pertenece.',
      opciones: [
        'Peligro o Precaución.',
        'Obligación.',
        'Prioridad.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-7/7.3.jpg'
    },
    {
      id: 4,
      texto: 'La señal de circulación giratoria a que grupo pertenece.',
      opciones: [
        'Orientación.',
        'Peligro o precaución.',
        'Información.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-7/7.4.jpg'
    },
    {
      id: 5,
      texto: 'La señal de cruce regulado por semáforo a que grupo pertenece.',
      opciones: [
        'Información.',
        'Peligro o precaución.',
        'Prioridad.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-7/7.5.jpg'
    },
    {
      id: 6,
      texto: 'La señal de cruce entronque lateral derecho a que grupo pertenece.',
      opciones: [
        'Orientación.',
        'Peligro o precaución.',
        'Prioridad.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-7/7.6.jpg'
    },
    {
      id: 7,
      texto: 'La señal de prioridad a los vehículos que vienen en sentido contrario a que grupo pertenece.',
      opciones: [
        'Orientación.',
        'Información.',
        'Prioridad.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-7/7.7.jpg'
    },
    {
      id: 8,
      texto: 'La señal de vía con prioridad, a que grupo pertenece.',
      opciones: [
        'Orientación.',
        'Obligación.',
        'Prioridad.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-7/7.8.jpg'
    },
    {
      id: 9,
      texto: 'La señal de sentido de circulación a que grupo pertenece.',
      opciones: [
        'Orientación.',
        'Obligación.',
        'Información.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-7/7.9.jpg'
    },
    {
      id: 10,
      texto: 'La señal de velocidad máxima a que grupo pertenece.',
      opciones: [
        'Peligro o precaución.',
        'Prioridad.',
        'Prohibición.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-7/7.10.jpg'
    },
    {
      id: 11,
      texto: 'La señal de Vía en sentido único a que grupo pertenece.',
      opciones: [
        'Obligación.',
        'Información.',
        'Prohibición.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-7/7.11.jpg'
    },
    {
      id: 12,
      texto: 'La señal de ruta para autopista a que grupo pertenece.',
      opciones: [
        'Peligro o precaución.',
        'Información.',
        'Orientación.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-7/7.12.jpg'
    },
    {
      id: 13,
      texto: 'La señal de fin de carretera para automóviles a que grupo pertenece.',
      opciones: [
        'Prohibición.',
        'Información.',
        'Fin de prohibición u obligación.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-7/7.13.jpg'
    },
    {
      id: 14,
      texto: 'La señal de paso de peatones a que grupo pertenece.',
      opciones: [
        'Orientación.',
        'Información.',
        'Peligro o precaución.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-7/7.14.jpg'
    },
    {
      id: 15,
      texto: 'La categoría "C", de licencia de conducción, autoriza a conducir:',
      opciones: [
        'Vehículos de motor dedicados al transporte de carga.',
        'Vehículos de motor dedicados al transporte de personas.',
        'Motocicletas.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-7/7.15.jpg'
    },
    {
      id: 16,
      texto: 'La categoría "D", de licencia de conducción, autoriza a conducir:',
      opciones: [
        'Motocicletas.',
        'Vehículos de motor dedicados al transporte de personas.',
        'Vehículos de motor agrícolas e industriales.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-7/7.16.jpg'
    },
    {
      id: 17,
      texto: 'En vías de doble sentido de circulación, en la que está permitido adelantar ¿Qué separación deberá guardar el conductor, con el vehículo que le precede?',
      opciones: [
        '50 m.',
        'La que permita detenerse en caso de frenado brusco, sin peligro.',
        'No menos de 5 m por cada 15 Km de velocidad.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-7/7.17.jpg'
    },
    {
      id: 18,
      texto: '¿Qué relación de marcha tendrá que poner al bajar una pendiente descendente?',
      opciones: [
        'La marcha atrás.',
        'El freno de emergencia.',
        'Una relación de marchas cortas para que el motor haga de freno.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-7/7.18.jpg'
    },
    {
      id: 19,
      texto: '¿Qué luces utilizará su vehículo, en vías insuficientemente iluminada, después de la puesta del sol?',
      opciones: [
        'Las luces de cruce o cortas.',
        'Las luces largas o de carreteras.',
        'Las luces de posición.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-7/7.19.jpg'
    },
    {
      id: 20,
      texto: 'El conductor de todo tipo de vehículo, está obligado a mantener concentrada toda la atención en su control y dirección y evitar cualquier motivo de distracción. Para ello se prohíbe:',
      opciones: [
        'Mantener más de 5 metros de distancia por cada 15 Km/h de velocidad, entre vehículo que circulen uno detrás de otro.',
        'Conducir con menores de 14 años de edad en el asiento delantero.',
        'Transportar menores de dos años de edad sin acompañamiento de mayores o sin aditamento especiales.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-7/7.20.jpg'
    }
  ];

  imagenesApoyo: string[] = [
    'assets/images/examen-7/7.1.jpg',
    'assets/images/examen-7/7.2.jpg',
    'assets/images/examen-7/7.3.jpg',
    'assets/images/examen-7/7.4.jpg',
    'assets/images/examen-7/7.5.jpg',
    'assets/images/examen-7/7.6.jpg',
    'assets/images/examen-7/7.7.jpg',
    'assets/images/examen-7/7.8.jpg',
    'assets/images/examen-7/7.9.jpg',
    'assets/images/examen-7/7.10.jpg',
    'assets/images/examen-7/7.11.jpg',
    'assets/images/examen-7/7.12.jpg',
    'assets/images/examen-7/7.13.jpg',
    'assets/images/examen-7/7.14.jpg',
    'assets/images/examen-7/7.15.jpg',
    'assets/images/examen-7/7.16.jpg',
    'assets/images/examen-7/7.17.jpg',
    'assets/images/examen-7/7.18.jpg',
    'assets/images/examen-7/7.19.jpg',
    'assets/images/examen-7/7.20.jpg'
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
