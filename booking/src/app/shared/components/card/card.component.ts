import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string;
  @Input() isScrollable: boolean;
  @Input() customCls: string;
  @Input() centeredContent: boolean;
  @Input() padding = true;

  @HostBinding('className') get className () {
    let cls = 'card';
    cls += this.isScrollable ? ' scrollable' : '';
    cls += this.customCls ? ` ${this.customCls}` : '';
    return cls;
  }


}
