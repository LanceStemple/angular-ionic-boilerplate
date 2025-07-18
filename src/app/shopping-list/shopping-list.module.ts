import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared.module';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListService } from './shopping-list.service';

@NgModule({
  imports: [
    SharedModule,
    ShoppingListComponent,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingListComponent,
      },
    ]),
  ],
  providers: [ShoppingListService],
})
export class ShoppingListModule {}
