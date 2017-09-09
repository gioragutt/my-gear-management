import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface ItemValue {
  name: string;
  count: number;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() value: ItemValue;
  @Output() deleted = new EventEmitter<void>();
  @Output() nameChanged = new EventEmitter<string>();
  @Output() countChanged = new EventEmitter<number>();
  editing = false;
  editingValue: string;

  keyUp(event: KeyboardEvent) {
    event.preventDefault();
    const value = (<any>event.target).value;
    if (event.keyCode === 13) {
      this.submitChange(value);
      (<any>event.target).value = '';
    }
  }

  submitChange(value: string): void {
    console.log(value);
    if (!!value) {
      this.nameChanged.emit(value);
      this.stopEditing();
    }
  }

  deleteItem(): void {
    this.deleted.emit();
  }

  startEditing() {
    this.editing = true;
    this.editingValue = this.value.name;
  }

  stopEditing() {
    this.editing = false;
    this.editingValue = '';
  }

  increaseCount() {
    this.changeCount(1);
  }

  decreaseCount() {
    this.changeCount(-1);
  }

  private changeCount(diff: number) {
    const newCount = this.value.count + diff;
    if (newCount >= 0) {
      this.countChanged.emit(this.value.count + diff);
    }
  }
}
