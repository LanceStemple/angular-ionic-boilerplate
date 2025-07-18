import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { add, trash, trashBin } from 'ionicons/icons';
import type { InfiniteScrollCustomEvent } from '@ionic/angular';

import { SharedModule } from '../shared.module';
import { ShoppingListRowComponent } from './shopping-list-row/shopping-list-row.component';

interface ShoppingListItem {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  imports: [SharedModule, ShoppingListRowComponent],
})
export class ShoppingListComponent implements OnInit {
  public addMode = false;
  public items: ShoppingListItem[] = [];

  constructor() {
    addIcons({ add, trash, trashBin });
  }

  ngOnInit() {
    this.generateItems();
  }

  public addItem() {
    this.addMode = true;
    this.items.push({ name: 'New Item', completed: false });
  }

  public onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  public deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  private generateItems() {
    this.items = [
      {
        name: 'Applessssssssss',
        completed: false,
      },
      { name: 'Bananas', completed: false },
      { name: 'Oranges', completed: false },
    ];
  }
}
