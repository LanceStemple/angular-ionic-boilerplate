import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared.module';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  imports: [
    SharedModule,
    ShoppingListComponent, // <-- import the standalone component here
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingListComponent,
      },
    ]),
  ],
})
export class ShoppingListModule {}
