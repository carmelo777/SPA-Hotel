import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent  {  
  @Input() active:Hotel;
}
