import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent {
  @Input() text:string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  

}
