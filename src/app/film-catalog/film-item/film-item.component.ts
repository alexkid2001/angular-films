import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input('filmData') film: Object[] = [];

  @Output() update = new EventEmitter<boolean>();
  value: string;
  addFavoriteClick: boolean = true;

  constructor() { }

  addFavorite() {
    this.update.emit( this.addFavoriteClick );
    this.addFavoriteClick = !this.addFavoriteClick;
  }


  ngOnInit() {
  }

}
