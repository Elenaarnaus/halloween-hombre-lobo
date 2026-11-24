
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';
import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    MonsterCardComponent
  ]
})
export class Tab2Page {

  poderes = {
    image: 'assets/img/poderes.jpg',
    title: 'Poderes sobrenaturales',
    text: 'El hombre lobo posee una fuerza extraordinaria, velocidad sobrehumana, sentidos muy desarrollados y una capacidad de regeneración superior a la humana.',
    buttonText: 'Conocer sus poderes'
  };

  debilidades = {
    image: 'assets/img/debilidades.jpg',
    title: 'Sus debilidades',
    text: 'Las leyendas tradicionales relacionan al hombre lobo con la plata, el fuego y la vulnerabilidad durante su transformación.',
    buttonText: 'Descubrir debilidades'
  };

  curiosidades = {
    image: 'assets/img/curiosidades.jpg',
    title: 'Curiosidades',
    text: 'La leyenda del hombre lobo aparece en numerosas culturas. La transformación durante la luna llena es una de sus características más conocidas.',
    buttonText: 'Leer curiosidades'
  };

  mostrarMensaje(titulo: string) {
    alert(titulo + ': ¡El secreto del hombre lobo ha sido descubierto!');
  }
}



