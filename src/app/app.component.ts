import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  addItem(event: KeyboardEvent) {
    event.preventDefault();
    if (event.keyCode === 13) {
      const value = (<any>event.target).value;
      this.items.push({
        name: value,
        count: 0
      });
      (<any>event.target).value = '';
    }
  }

  deleteItem(key: string): void {
    this.items.remove(key);
  }

  updateName(key: string, value: string) {
    this.items.update(key, {name: value});
  }

  updateCount(key: string, count: number) {
    this.items.update(key, {count});
  }
}
