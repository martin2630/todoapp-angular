import { createAction, props } from '@ngrx/store';

export type filterType = "todos" | "pendientes" | "completados";

export const setFilter = createAction(
  '[Filter] Set Filter',
  props< { filter: filterType } >()
);
