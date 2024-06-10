import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
   selector: 'app-uncommon-page',
   templateUrl: './uncommon-page.component.html',
   styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

   // i18n Select
   public name: string = 'Isaac';
   public gender: 'male' | 'female' = 'male';
   public invitationMap = {
      'male': 'invitarlo',
      'female': 'invitarla'
   }


   public changeClient(): void {

      this.name = 'Melissa';
      this.gender = 'female';

   }

   // i18Plural
   public clients: string[] = ['Maria', 'Jorge','Victoria', 'Pedro', 'Domingo', 'Fernando'];
   public clientsMap = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      'other': 'tenemos # clientes esperando.'
   }

   public deleteClient(): void {
      this.clients.shift();
   }

   // KeyValue pipe
   public person = {
      name: 'Fernando',
      age: 36,
      address: 'Ottawa Canada'
   }

   // Async pipe
   public myObservableTimer: Observable<number> = interval(2000) /* Crea un observable */
   .pipe(
      tap( value => console.log('tap:', value))
   );

   public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
      setTimeout( () => {

         resolve('Tenemos data en la promesa');
         console.log('Tenemos data en la promesa');


      }, 3500);
   })

}
