import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    HomeComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class GifsModule {}
