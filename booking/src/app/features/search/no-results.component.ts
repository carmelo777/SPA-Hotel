import { Component } from '@angular/core';

@Component({
  selector: 'app-no-results',
  template: `
 <div class="wrapper centered">
   <div class="card vh-centered center">
     <div class="title">
          No results
     </div>
     <div class="content">
       In this demo you can results only in Milano and Roma
     </div>
     <button type="submit" routerLink="search">Back</button>
   </div>
 </div>
  `
})
export class NoResultsComponent {


}
