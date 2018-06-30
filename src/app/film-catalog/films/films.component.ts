import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService, filmsType } from '../film.service';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { element } from 'protractor';
import { Film } from '../../film';


@Component({
  selector: 'films-list',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent implements OnInit {
  // aditionalTitle: string;
  // films: filmsType[];
  films : Film[] = [];
  sortDirection: string;
  favoriteCnt: number = 0;
  currentPage: number = 1;

  // description: string = 'Parent component data';

  sortOptions = [
    { value: 'ASC', viewValue: 'По алфавиту: A-Z' },
    { value: 'DESC', viewValue: 'По алфавиту: Z-A' }
  ];

  constructor(public filmsService: FilmService) { 

  }
  
  // sortFilmList(direct) {
  //   return this.films.sort((a, b) => {
  //     let x = a.name.toLowerCase();
  //     let y = b.name.toLowerCase();
  //     if ( x < y ) { return -1*direct }
  //     if ( x < y ) { return 1*direct }
  //   })

  // }


  // sortedList(elem, option?) {
  //   console.log(option)
  //   if( option === 'DESC') {
  //     return elem.sort(this.sortByName).reverse();
  //   }
  //   return elem.sort(this.sortByName);
  // }

  // sortByName(a,b) {

  //   let x = a.name.toLowerCase();
  //   let y = b.name.toLowerCase();
  //   if (x < y) { return -1; }
  //   if (x > y) { return 1; }
  //   return 0;

  // }

  // setUpdatedValue(eventParent) {
  //   this.favoriteCnt += eventParent ? 1 : -1;
  // }

  // refreshList(direction) {
  //   this.sortFilmList(direction);
  // }

  // addFavorite() {
  //   this.favoriteCnt++;
  // }


  getFilms(page?:number) {
    this.filmsService.getPopularFilms(page).subscribe(
      (filmList: any) => {
        this.initProps(filmList);
      },
      err => {
        console.log("error");
      })
  }

  initProps(films){
    films.results.forEach(film => {
      this.films.push({
        title: film.title,
        releaseDate: film.release_date,
        voteAverage: film.vote_average,
        overview: film.overview,
        poster: `${this.filmsService.midImgPath}${film['poster_path']}`
      });
    });
    console.log(this.films);
  }
    
  ngOnInit() { 
  //  this.films = this.filmsService.getFilms(); 
  console.log("Hook Parent, Инициализация родительского компонента");
    this.getFilms(this.currentPage);
  }

}
