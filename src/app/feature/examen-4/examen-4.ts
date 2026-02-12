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
  selector: 'app-examen-4',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './examen-4.html',
  styleUrl: './examen-4.css',
  standalone: true
})
export class Examen4 {
  preguntas: Pregunta[] = [
    {
      id: 1,
      texto: 'El conductor de un vehículo al estacionarlo o parquearlo en las vías autorizadas, esta obligado a:',
      opciones: [
        'Medir la presión de inflado de los neumáticos.',
        'Aplicar el freno de mano o seguridad.',
        'Estacionarlo entre una zona de seguridad y la acera.'
      ],
      correcta: 1, // Inciso B
      valor: 5
    },
    {
      id: 2,
      texto: 'Marque las deficiencias técnicas que prohíben la circulación de vehículos de motor por las vías del país, cuando:',
      opciones: [
        'El juego del timón, tenga una holgura de 20 grados.',
        'Las medidas de los neumáticos se correspondan con el peso del vehículo.',
        'Trabaje el manómetro del sistema de aire.'
      ],
      correcta: 0, // Inciso A
      valor: 5
    },
    {
      id: 3,
      texto: 'Las vías que no tengan señalizado su sentido de dirección se consideran de:',
      opciones: [
        'Un solo sentido.',
        'Sentido obligatorio a la derecha.',
        'Doble sentido.'
      ],
      correcta: 2, // Inciso C
      valor: 5
    },
    {
      id: 4,
      texto: '¿El infractor sancionado puede establecer la reclamación de la multa?',
      opciones: [
        'Sí, dentro del término de 10 días hábiles siguientes a su notificación.',
        'Sí, siempre que no haya pagado la multa impuesta.',
        'Sí, siempre que se presente ante el jefe de la Dirección Nacional de Tránsito.'
      ],
      correcta: 0, // Inciso A
      valor: 5
    },
    {
      id: 5,
      texto: 'Circulando por una vía de doble sentido de dirección, usted pretende incorporarse a la transversal, realizando un giro a la izquierda. Para indicar la maniobra a los demás usuarios de la vía, colocará el brazo:',
      opciones: [
        'En posición inclinada hacia abajo, con la palma de la mano hacia atrás.',
        'Extendido en posición horizontal.',
        'En posición vertical hacia arriba.'
      ],
      correcta: 1, // Inciso B
      valor: 5
    },
    {
      id: 6,
      texto: 'Para advertir al conductor del vehículo que circula detrás del suyo, su intención de realizar un cambio de dirección a la derecha (un giro o cambio de senda) deberá indicarlo haciendo una señal con su brazo izquierdo:',
      opciones: [
        'Manteniéndolo inclinado hacia abajo, con la palma de la mano hacia atrás.',
        'En posición vertical hacia arriba.',
        'Extendido en posición horizontal, con la palma de la mano hacia abajo.'
      ],
      correcta: 1, // Inciso B
      valor: 5
    },
    {
      id: 7,
      texto: 'Al circular, incorporarse o cruzar una vía, ante la señal de "Ceda el Paso", como conductor de un vehículo está usted obligado a:',
      opciones: [
        'Detener la marcha, cuales quieran que sean las circunstancias de visibilidad, dándole prioridad a los vehículos que circulan por la transversal.',
        'Disminuir la velocidad y parar si fuera necesario, ante los vehículos que por la vía transversal se aproximan por su lado derecho.',
        'Disminuir la velocidad y parar si fuera necesario, a fin de permitir el paso a todos los vehículos que se aproximen por la vía transversal.'
      ],
      correcta: 2, // Inciso C
      valor: 5
    },
    {
      id: 8,
      texto: 'Circulando por una vía de un solo sentido de dirección, al aproximarse a una intersección, está usted obligado a:',
      opciones: [
        'Detener la marcha si la visibilidad no resulta suficiente para observar los vehículos que por la transversal se aproximan por su lado derecho.',
        'Disminuir la velocidad y parar si fuera necesario, ante la señal de Ceda el Paso.',
        'Disminuir la velocidad y continuar la marcha, si la visibilidad es buena, tomando las precauciones necesarias.'
      ],
      correcta: 1, // Inciso B
      valor: 5
    },
    {
      id: 9,
      texto: 'Para realizar un giro a la derecha, desde una vía de un solo sentido de circulación hacia la transversal de doble sentido, deberá hacerlo:',
      opciones: [
        'Desde el carril de la extrema derecha.',
        'Desde la senda de la extrema izquierda.',
        'Desde dos o más carriles.'
      ],
      correcta: 0, // Inciso A
      valor: 5
    },
    {
      id: 10,
      texto: 'Para realizar un giro a la izquierda, desde una vía de doble sentido de circulación hacia la transversal de un solo sentido, deber hacerlo:',
      opciones: [
        'Desde el carril de la extrema izquierda de la calzada por donde circula.',
        'Desde el carril de la extrema izquierda de la calzada, en el sentido por donde circula.',
        'Desde dos o más carriles.'
      ],
      correcta: 1, // Inciso B
      valor: 5
    },
    {
      id: 11,
      texto: 'Antes de realizar un giro en forma de U, todo conductor está obligado a hacerlo sin poner en peligro a los demás usuarios de la vía y para ello tendrá en cuenta hacerlo:',
      opciones: [
        'A no menos de 100 metros anteriores a la entrada o posteriores a la salida de una curva de visibilidad reducida.',
        'En intersecciones semaforizadas, donde se permita por la señal correspondiente, durante la proyección de la luz verde permitiendo el giro a la izquierda.',
        'En intersecciones semaforizadas, cuando el semáforo proyecte la luz verde autorizando el giro a la izquierda.'
      ],
      correcta: 1, // Inciso B
      valor: 5
    },
    {
      id: 12,
      texto: 'Para realizar una maniobra de marcha atrás, usted como conductor tendrá en cuenta que:',
      opciones: [
        'Realizarla libremente siempre que las condiciones de visibilidad, circulación y estado de la vía no sean adversas.',
        'La velocidad no sea superior a los 20 Km/h.',
        'No efectuarla próximo a un cambio de rasante, donde pueda ver la continuación de la vía a una distancia de 100 metros hacia atrás o hacia delante.'
      ],
      correcta: 1, // Inciso B
      valor: 5
    },
    {
      id: 13,
      texto: 'Transitando por la senda izquierda de una vía de doble sentido de dirección, con dos carriles en ambos sentidos, usted adelantará al vehículo que marcha delante:',
      opciones: [
        'Por la senda más próxima a la izquierda, si el eje central de la vía está marcado con línea discontinua.',
        'Por la senda de la derecha, comprobando que no interfiere a los demás usuarios de la vía.',
        'Una vez que el conductor abandone la senda por la cual ambos circulan y se incorpore al carril de la derecha.'
      ],
      correcta: 0, // Inciso A
      valor: 5
    },
    {
      id: 14,
      texto: 'Transitando usted por una carretera, conduciendo un vehículo rígido o articulado, destinado al transporte de carga, la velocidad que podrá desarrollar en su desplazamiento no excederá:',
      opciones: [
        '80 Km/h.',
        '90 Km/h.',
        '100 Km/h.'
      ],
      correcta: 0, // Inciso A
      valor: 5
    },
    {
      id: 15,
      texto: '¿Debe verificar con frecuencia el arreglo del espejo retrovisor exterior?',
      opciones: [
        'Sí, cada vez que suba al vehículo para iniciar la marcha.',
        'No, porque una vez colocado correctamente ya queda fijo.',
        'Sólo cuando utilice el vehículo por la noche, porque las distancias se aprecian de forma diferente.'
      ],
      correcta: 0, // Inciso A
      valor: 5
    },
    {
      id: 16,
      texto: '¿Qué le indica la señal que se muestra?',
      opciones: [
        'Que en la próxima intersección no se puede hacer cambios de dirección.',
        'Que hay un carril de circulación único.',
        'Que la vía por la que se transita es de una sola dirección, en el sentido que indica la flecha de la señal.'
      ],
      correcta: 2, // Inciso C
      valor: 5
    },
    {
      id: 17,
      texto: 'La señal que se observa advierte del peligro constituido por:',
      opciones: [
        'La proximidad de un entronque en el lado izquierdo del sentido de la circulación con una carretera de menor preferencia.',
        'El cruce de una carretera o camino de igual categoría.',
        'La proximidad de un cruce regulado por semáforo.'
      ],
      correcta: 0, // Inciso A
      valor: 5
    },
    {
      id: 18,
      texto: '¿Le está permitido, de acuerdo con las circunstancias que se observan en la señal, realizar un giro a la derecha o a la izquierda?',
      opciones: [
        'Prohibido girar a la izquierda.',
        'Sí, a la derecha.',
        'Sí, a la izquierda.'
      ],
      correcta: 0, // Inciso A
      valor: 5
    },
    {
      id: 19,
      texto: '¿De que peligro le advierte la señal que se observa?',
      opciones: [
        'De posibles desprendimientos de gravillas.',
        'La proximidad de un tramo de vía en el que sopla con frecuencia un viento lateral violento.',
        'De la proximidad de un descenso peligroso.'
      ],
      correcta: 1, // Inciso B
      valor: 5
    },
    {
      id: 20,
      texto: 'La señal que se relaciona indica:',
      opciones: [
        'Prohibición de pasar sin detenerse.',
        'Prohibido estacionar o parquear o hacer cualquier detención momentánea.',
        'Prohibido el uso de señales acústicas.'
      ],
      correcta: 0, // Inciso A
      valor: 5
    }
  ];

  imagenesApoyo: string[] = [
    'I0001880.jpg',
    'I0006980.jpg',
    'I0000350.jpg',
    'I0007970.jpg',
    'I0000273.jpg',
    'I0000272.jpg',
    'I0000290.jpg',
    'I0000350.jpg',
    'I0001800.jpg',
    'I0000280.jpg',
    'I0004640.jpg',
    'I0001290.JPG',
    'I0003220.JPG',
    'I0002700.JPG',
    'I0003300.jpg',
    'I0006150.jpg',
    'Imagen1.jpg',
    'Imagen2.jpg',
    'Imagen3.jpg',
    'Imagen4.jpg'
  ];

  imagenesIntegradas: { [key: number]: string } = {
    7: 'I0000350.jpg',
    13: 'I0004640.jpg'
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
