import { Pipe, PipeTransform } from '@angular/core';
import { filterType } from '../filter/filter.actions';
import { Todo } from './models/todo.models';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter?: filterType ): any {
    console.log(filter);
    
    switch( filter ){

      case('completados'):
        return todos.filter( todo => todo.completado);

        case('pendientes'):
        return todos.filter( todo => !todo.completado);

          default:
          return todos;

    }
    return null;
  }

}
