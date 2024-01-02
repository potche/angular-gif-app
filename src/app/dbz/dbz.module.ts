import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  exports: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ]
})
export class DbzModule { }
