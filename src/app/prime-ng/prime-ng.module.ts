import { NgModule } from '@angular/core';

// import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule} from 'primeng/table';


@NgModule({
   declarations: [],
   imports: [
   ],
   exports: [
      // MenuModule,
      ButtonModule,
      CardModule,
      FieldsetModule,
      MenubarModule,
      PanelModule,
      ToolbarModule,
      InputTextModule,
      TableModule,
   ]
})
export class PrimeNGModule { }
