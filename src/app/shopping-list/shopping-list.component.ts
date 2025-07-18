import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add, trash, trashBin } from 'ionicons/icons';
import type { InfiniteScrollCustomEvent } from '@ionic/angular';

import { SharedModule } from '../shared.module';
import { ShoppingListRowComponent } from './shopping-list-row/shopping-list-row.component';
import { ShoppingListItem } from './modals/shopping-item.modal';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  imports: [SharedModule, ShoppingListRowComponent],
})
export class ShoppingListComponent implements OnInit {
  public addMode = false;
  public items: ShoppingListItem[] = [];

  constructor(private shoppingListService: ShoppingListService) {
    addIcons({ add, trash, trashBin });
  }

  async ngOnInit() {
    this.items = await this.shoppingListService.getItems();
  }

  public async addItem() {
    this.addMode = true;
    this.items.push({ name: 'New Item', completed: false });
    await this.shoppingListService.saveItems(this.items);
  }

  public async deleteItem(index: number) {
    this.items.splice(index, 1);
    await this.shoppingListService.saveItems(this.items);
  }

  public onIonInfinite(event: InfiniteScrollCustomEvent) {
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  public async updateItemName($event: string, index: number) {
    this.items[index].name = $event;
    await this.shoppingListService.saveItems(this.items);
  }

  public async reorderItems(event: any) {
    const itemToMove = this.items.splice(event.detail.from, 1)[0];
    this.items.splice(event.detail.to, 0, itemToMove);
    await this.shoppingListService.saveItems(this.items);
    event.detail.complete();
  }
}
