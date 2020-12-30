import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.models';
 
export const initialState = [
  new Todo("Salvar al mundo"),
  new Todo("Aprender react redux"),
  new Todo("Aprender angular redux"),
];
 
const _totoReducer = createReducer(
  initialState,
  on(actions.add, (state, { texto } ) => [...state, new Todo( texto )]),

  on(actions.remove, (state, { id  } ) => state.filter( (todo) => todo.id !== id)),
  
  on(actions.clearAllCompleted, (state ) => state.filter( (todo) => !todo.completado )),

  on(actions.toggleAll, (state, { status } ) => state.map( (todo) => {
    return {
      ...todo,
      completado: status
    }
  }) ),

  on(actions.toggle, (state, { id } ) => {
    // return state.map( (todo) => (todo.id===id) ? { ...todo, completado: !todo.completado } :  todo)
    return state.map( (todo) => {
      if (todo.id===id){
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo
      }
   })
  }),

  on(actions.editar, (state, { id, text } ) => {
    // return state.map( (todo) => (todo.id===id) ? { ...todo, completado: !todo.completado } :  todo)
    return state.map( (todo) => {
      if (todo.id===id){
        return {
          ...todo,
          texto: text
        }
      } else {
        return todo
      }
   })
  })


);

 
export function todoReducer(state, action) {
  return _totoReducer(state, action);
}