import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent  {

@Input() active:Hotel

}
