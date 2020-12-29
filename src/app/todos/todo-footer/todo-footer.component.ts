import { Component, OnInit } from '@angular/core';
import { filterType, setFilter } from 'src/app/filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: filterType = "todos";
  filters: filterType[] = [ "todos", "pendientes", "completados" ];
  pendients: number;

  constructor( private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.subscribe( ( state )=> {
      this.currentFilter = state.filter;
      this.pendients = state.todos.filter( (todo) => !todo.completado ).length
    })
  }

  setStatus(status: filterType){
    this._store.dispatch( setFilter( { filter: status } ) )
  }

  clearAllCompleted(){
    this._store.dispatch(actions.clearAllCompleted() );
  }

}
