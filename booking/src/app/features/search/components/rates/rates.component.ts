import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent   {
@Input() active: Hotel;

}
