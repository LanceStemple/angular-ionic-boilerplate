import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { add, trash, trashBin } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { SharedModule } from './../../shared.module';
import { IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-shopping-list-row',
  templateUrl: './shopping-list-row.component.html',
  styleUrls: ['./shopping-list-row.component.scss'],
  imports: [IonButton, IonInput, SharedModule],
})
export class ShoppingListRowComponent implements OnInit {
  @ViewChild('inputEl', { static: false }) inputElRef!: IonInput;

  @Input() itemName!: string;
  @Input() index!: number;
  @Input() autoFocus = false;

  @Output() itemDeleted = new EventEmitter<number>();
  @Output() nameChanged = new EventEmitter<string>();

  isEditing: boolean = false;

  constructor() {
    addIcons({ add, trash, trashBin });
  }

  ngOnInit() {
    if (this.autoFocus) {
      this.isEditing = true;
      this.focusInput();
    }
  }

  public async focusInput() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    try {
      await this.inputElRef?.setFocus();
    } catch (err) {
      console.warn('Focus failed:', err);
    }
  }

  public emitItemDeleted() {
    this.itemDeleted.emit(this.index);
  }

  public enableEdit() {
    this.isEditing = true;
    this.focusInput();
  }

  public disableEdit() {
    this.isEditing = false;
    this.nameChanged.emit(this.itemName);
  }
}
