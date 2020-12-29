import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment'; // Angular CLI environment

import { appReducers } from './app.reducers';

import { TodoModule } from './todos/todo.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './src/app/todos/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
