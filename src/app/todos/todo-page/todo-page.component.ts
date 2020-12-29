import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  status: boolean = false;
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.status = !this.status;
    this._store.dispatch( toggleAll( { status: this.status } ) );
  }

}
