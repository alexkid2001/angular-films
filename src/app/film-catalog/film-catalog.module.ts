import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FilmsComponent } from './films/films.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FilmItemComponent } from './film-item/film-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule
  ],
  declarations: [
    MainComponent, 
    FilmsComponent, 
    DetailsComponent, 
    FilmItemComponent,
  ]
})
export class FilmCatalogModule { }
