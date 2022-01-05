import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Hotel, Room } from 'src/app/model/hotel';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent  {
  @Input() active : Hotel;
  @Output() addToCart: EventEmitter<Room> = new EventEmitter<Room>()

}
