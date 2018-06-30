import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() year: string;
  @Input() imgUrl: string;
  @Input() description: string;
  @Input('info') infoBlock: string;

  @Output() update = new EventEmitter<boolean>();
  value: string;
  addFavoriteClick: boolean = true;

  constructor() { }

  addFavorite() {
    // if(this.addFavoriteClick == 'add') {
    //   this.update.emit( this.addFavoriteClick );
    //   this.addFavoriteClick = 'minus';
    // }
    // else {
    //   this.update.emit(this.addFavoriteClick);
    //   this.addFavoriteClick = 'add';

    // }
    this.update.emit( this.addFavoriteClick );
    this.addFavoriteClick = !this.addFavoriteClick;

    
  }

  ngOnInit() {

  }

}
