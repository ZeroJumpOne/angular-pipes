import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

   public nameLower: string = 'isaac';
   public nameUpper: string = 'ISAAC';
   public fullName: string = 'isAaC hERNAndeZ CAStrO';

   public customDate: Date = new Date();


}
