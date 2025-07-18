import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ShoppingListItem } from './modals/shopping-item.modal';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private _storage: Storage | null = null;
  private _storageReady: Promise<void>;

  constructor(private storage: Storage) {
    this._storageReady = this.init();
  }

  private async init() {
    this._storage = await this.storage.create();
  }

  // Make sure storage is ready before doing anything
  private async ensureReady() {
    return this._storageReady;
  }

  async getItems(): Promise<ShoppingListItem[]> {
    await this.ensureReady();
    return (await this._storage?.get('shoppingItems')) || [];
  }

  async saveItems(items: ShoppingListItem[]): Promise<void> {
    await this.ensureReady();
    await this._storage?.set('shoppingItems', items);
  }

  async clearItems(): Promise<void> {
    await this.ensureReady();
    await this._storage?.remove('shoppingItems');
  }
}
