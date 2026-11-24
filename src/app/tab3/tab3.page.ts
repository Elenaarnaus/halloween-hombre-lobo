
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class Tab3Page {

  imagenes = [
    {
      src: 'assets/img/hombre-lobo.png',
      titulo: 'La bestia',
      texto: 'Una criatura que despierta bajo la luna llena.'
    },
    {
      src: 'assets/img/poderes.jpg',
      titulo: 'La transformación',
      texto: 'El ser humano pierde el control y se convierte en bestia.'
    },
    {
      src: 'assets/img/debilidades.jpg',
      titulo: 'La plata',
      texto: 'Uno de los elementos más conocidos en las leyendas.'
    }
  ];
}





