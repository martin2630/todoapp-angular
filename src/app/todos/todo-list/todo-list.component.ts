import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducers';
import { filterType } from 'src/app/filter/filter.actions';
import { Todo } from '../models/todo.models';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  currentFilter: filterType;

  constructor( private _store: Store<AppState>) { 

    this._store.subscribe( ({ todos, filter }) => {
       this.todos = todos;
       this.currentFilter = filter;
      }
    )
    // this._store.select('todos').subscribe(
    //   (todos) => {
    //    this.todos = todos;
    //   }
    // )

  }

  ngOnInit() {
  }

  

}
