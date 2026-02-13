import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Pregunta} from '../../core/models/pregunta.model';

@Component({
  selector: 'app-examen-2',
  imports: [
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './examen-2.html',
  styleUrl: './examen-2.css',
  standalone: true
})
export class Examen2 {
  preguntas: Pregunta[] = [
    {
      id: 1,
      texto: 'Para realizar un giro a la derecha, deberá realizarlo:',
      opciones: [
        'De derecha a derecha.',
        'Desde la derecha sin estar obligado a incorporarse a un carril específico.',
        'De derecha a izquierda.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-2/2.1.jpg',
    },
    {
      id: 2,
      texto: 'En vías urbanas de un solo sentido de circulación el estacionamiento o parqueo se efectuará:',
      opciones: [
        'Del lado derecho de la vía.',
        'Del lado izquierdo de la vía.',
        'En ambos sentidos de dirección.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-2/2.2.jpg',
    },
    {
      id: 3,
      texto: 'Las luces de los vehículos que circulan por las vías públicas, deben estar encendidas desde:',
      opciones: [
        'Que amanece.',
        'El atardecer.',
        'El anochecer hasta el amanecer.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-2/2.4.jpg',
    },
    {
      id: 4,
      texto: 'Cuáles de las señales que se menciona pertenecen al Grupo de Prioridad:',
      opciones: [
        'Pare.',
        'Cruce con preferencia.',
        'Acceso prohibido.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-2/2.3.jpg',
    },
    {
      id: 5,
      texto: 'De los sistemas de un vehículo, la dirección tiene la función de:',
      opciones: [
        'Orientar las ruedas directrices.',
        'Orientar las ruedas traseras.',
        'Dirigir las ruedas motrices.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-2/2.5.jpg',
    },
    {
      id: 6,
      texto: 'Al llegar a una intersección encuentra a su derecha una señal de PARE y un semáforo proyectando la luz verde. ¿Qué debe hacer?',
      opciones: [
        'Continuar la marcha por la vía por donde transita.',
        'Detenerme y ceder el paso a los vehículos que circulan por la vía transversal.',
        'Circular con precaución y detenerme sólo si tengo que ceder el paso a los vehículos que circulen por la vía transversal.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-2/2.7.jpg',
    },
    {
      id: 7,
      texto: 'Se prohíbe la circulación por los túneles a:',
      opciones: [
        'Vehículos de transporte público de pasajeros articulados.',
        'Vehículos que transportan materiales tóxicas, inflamables o explosivas.',
        'Vehículos cuyo peso máximo no exceda de 3500 Kg, no comprendiendo las motocicletas.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-2/2.6.jpg',
    },
    {
      id: 8,
      texto: 'Cuando usted se aproxima a un paso a nivel sin guardabarreras, barreras u otras señales sonoras y lumínicas del ferrocarril está obligado a:',
      opciones: [
        'Continuar la marcha.',
        'Detener la marcha o ceder el paso.',
        'Disminuir la velocidad.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-2/2.8.jpg',
    },
    {
      id: 9,
      texto: '¿Al conductor de un vehículo le está permitido rebasar el límite máximo de la velocidad para efectuar adelantamiento?',
      opciones: [
        'Sí, en 20 Km/h.',
        'Sí únicamente sino rebasó la velocidad mínima permitida.',
        'No, en ningún caso.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-2/2.9.jpg',
    },
    {
      id: 10,
      texto: 'Si dentro de una zona de niños urbana, circula conduciendo su vehículo a 50Km/h en días y horas laborables. ¿Debe modificar la velocidad?',
      opciones: [
        'No, porque circuló a la velocidad máxima permitida para esa zona.',
        'Sí, deberá circular como máximo a 40 Km/h.',
        'No, porque circula a la velocidad máxima establecida en zona urbana.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-2/2.10.jpg',
    },
    {
      id: 11,
      texto: 'Cuando usted conduce su vehículo por el túnel suficientemente alumbrado ¿Es necesario encender las luces?',
      opciones: [
        'Sí, debo encender las luces de cruce o cortas o las de posición.',
        'No, porque con la iluminación de las vías es suficiente.',
        'Sí, solo las de posición para advertir mi presencia.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-2/2.11.jpg',
    },
    {
      id: 12,
      texto: 'En los cambios de rasante, se prohíbe:',
      opciones: [
        'Circular por la derecha.',
        'Realizar adelantamientos.',
        'Disminuir la velocidad.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-2/2.12.jpg',
    },
    {
      id: 13,
      texto: 'Un ciudadano se presenta a las oficinas de Licencia de Conducción con el objetivo de obtener la Categoría C, el mismo no es titular de licencia de ninguna categoría. ¿Podrá cumplir la pretensión el aspirante?',
      opciones: [
        'Sí, porque es su voluntad conducir ese tipo de vehículo.',
        'No, porque no tiene los conocimientos necesarios para conducir camiones y posee Licencia de motocicleta "A".',
        'No, porque debe ser titular de una licencia de categoría "B" y tener 2 años de experiencia en la misma.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-2/2.13.jpg',
    },
    {
      id: 14,
      texto: 'En las curvas de visibilidad reducida, en vías de 70 Km/h, la longitud mínima de visibilidad en metros es de:',
      opciones: [
        '180 metros.',
        '210 metros.',
        '150 metros.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-2/2.14.jpg',
    },
    {
      id: 15,
      texto: 'La subcategoría de la Licencia de Conducción "A1" autoriza a conducir:',
      opciones: [
        'Motocicleta y otros vehículos de motor similares.',
        'Vehículos de motor no comprendidos en la categoría "A".',
        'Los ciclomotores.'
      ],
      correcta: 2, // Inciso C
      valor: 5,
      imagen: 'assets/images/examen-2/2.15.jpg',
    },
    {
      id: 16,
      texto: 'Las señales de peligro de precaución tienen forma:',
      opciones: [
        'Triangular con uno de sus vértices hacia arriba, fondo amarillo, orla roja y símbolo en color negro.',
        'Triangular, circular o cuadrada, según el caso.',
        'Circular con el fondo color blanco, orla roja y símbolos en negro y rojo.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-2/2.16.jpg',
    },
    {
      id: 17,
      texto: '¿Cómo debe ser la posición correcta de las manos de un conductor al volante?',
      opciones: [
        'Una mano debe ir en la parte superior y otra en la parte inferior del volante.',
        'Semejante a la posición del reloj cuando tiene la 10 y 10.',
        'Es indiferente, siempre que el volante esté firmemente sujeto y la mano derecha libre para utilizar la palanca de cambios.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-2/2.17.jpg',
    },
    {
      id: 18,
      texto: 'Se prohíbe al poseedor legal o persona encargada por cualquier concepto de un vehículo, conducir o permitir que otro conduzca:',
      opciones: [
        'Cualquier vehículo de transporte público de pasajeros, portando la licencia de conducción categoría "D".',
        'Cualquier vehículo de uso personal cuando haya ingerido bebidas alcohólicas en cualquier cantidad.',
        'Portando el permiso de aprendizaje acompañado por un titular de Licencia de Conducción.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-2/2.18.jpg',
    },
    {
      id: 19,
      texto: 'El conductor de un vehículo implicado en un accidente del tránsito, está obligado a:',
      opciones: [
        'Dar cuenta de inmediato al organismo al que pertenece el vehículo, sí es Estatal.',
        'Mantener el vehículo en la posición que resulte del accidente cuando haya originado la muerte o lesiones a alguna persona.',
        'Permanecer en el lugar del accidente hasta tanto se presente la administración del organismo.'
      ],
      correcta: 1, // Inciso B
      valor: 5,
      imagen: 'assets/images/examen-2/2.19.jpg',
    },
    {
      id: 20,
      texto: 'Marque las diferencias técnicas que prohíbe la circulación de vehículos de motor por las vías del país, cuando:',
      opciones: [
        'El juego del timón, tenga holgura de 20 grados.',
        'Las medidas de los neumáticos se correspondan con el peso del vehículo.',
        'No trabaje el manómetro del sistema de aire.'
      ],
      correcta: 0, // Inciso A
      valor: 5,
      imagen: 'assets/images/examen-2/2.20.jpg',
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
    event.target.src = 'assets/images/placeholder.jpg';
  }

  getLetraRespuesta(index: number): string {
    return index === 0 ? 'A' : index === 1 ? 'B' : 'C';
  }
}
