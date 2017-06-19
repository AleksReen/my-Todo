import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosDataService } from './todos-data.service';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';

import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [TodosDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
