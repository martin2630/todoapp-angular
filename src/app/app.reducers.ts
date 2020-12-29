import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducers';

import { Todo } from './todos/models/todo.models';
import { filterType } from './filter/filter.actions';

export interface AppState {
  todos: Todo[],
  filter: filterType
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}