import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './component/list/list.component';
import { ListItemComponent } from './component/list-item/list-item.component';
import { HeaderComponent } from './component/header/header.component';
import { AddTaskComponent } from './component/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ListComponent,
    ListItemComponent,
    HeaderComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
