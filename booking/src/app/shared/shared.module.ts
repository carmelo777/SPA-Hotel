import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntToArrayPipe } from './pipes/int-to-array.pipe';
import { CardComponent } from './components/card/card.component';
import { SeparatorComponent } from './components/separator/separator.component';

const components = [
  IntToArrayPipe,
  CardComponent,
  SeparatorComponent,
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule {}