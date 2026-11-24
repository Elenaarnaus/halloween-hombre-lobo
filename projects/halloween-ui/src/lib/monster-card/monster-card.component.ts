import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-monster-card',
  standalone: true,
  templateUrl: './monster-card.component.html',
  styleUrl: './monster-card.component.scss'
})
export class MonsterCardComponent {

  @Input() image: string = '';
  @Input() title: string = 'Monstruo';
  @Input() text: string = '';
  @Input() buttonText: string = 'Descubrir';

  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }
}

