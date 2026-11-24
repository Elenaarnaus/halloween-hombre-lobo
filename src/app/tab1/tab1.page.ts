
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';
import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    MonsterCardComponent
  ]
})
export class Tab1Page {

  mensaje = 'El bosque nunca está realmente vacío...';

  hombreLobo = {
    image: 'assets/img/hombre-lobo.png',
    title: 'El hombre lobo',
    text: 'Una criatura aterradora que abandona su forma humana cuando la luna llena ilumina el cielo. Sus garras y colmillos convierten la noche en una pesadilla.',
    buttonText: 'Descubrir la leyenda'
  };

  mostrarMensaje() {
    alert('La maldición ha comenzado... ¡Cuidado con la luna llena!');
  }
}

