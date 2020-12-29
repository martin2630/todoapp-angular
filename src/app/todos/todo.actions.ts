import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.models';

export const add = createAction(
  '[Todo] Add',
  props<{texto: string}>()
);

export const toggle = createAction(
  '[Todo] Toggle',
  props<{id: number}>()
);

export const editar = createAction(
  '[Todo] Text Update',
  props<{id: number, text: string}>()
);

export const remove = createAction(
  '[Todo] Remove',
  props<{id: number}>()
);

export const toggleAll = createAction(
  '[Todo] Toggle All',
  props<{status: Boolean}>()
);

export const clearAllCompleted = createAction('[Todo] Clear All Completed');
