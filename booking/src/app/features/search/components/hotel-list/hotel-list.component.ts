import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
  @Input() hotels: Hotel[];
  @Input() active: Hotel;
  @Input() text: string;
  @Output() setActive: EventEmitter <Hotel> = new EventEmitter<Hotel>();

}
