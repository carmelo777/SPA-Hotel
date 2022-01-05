import { Component, EventEmitter,  Output } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent   {

  @Output() send: EventEmitter<any> = new EventEmitter<any>()

}
