import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../todo.actions';

import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  edit: boolean = false;

  chkCompletado: FormControl;
  txtInput: FormControl;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.chkCompletado = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.txtInput, [ Validators.required, Validators.min(5) ] );
    this.chkCompletado.valueChanges.subscribe( valor => {
      this._store.dispatch( actions.toggle({ id: this.todo.id }) );
    })

  }

  editar(){
    this.edit = true;
    this.txtInput.setValue( this.todo.texto );
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }


  completedEdition(){
    this.edit = false;
    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.texto) return;
    this._store.dispatch(actions.editar({id: this.todo.id, text: this.txtInput.value }) )
  }


  delete(){
    this._store.dispatch( actions.remove( { id: this.todo.id} ) )
  }

}
