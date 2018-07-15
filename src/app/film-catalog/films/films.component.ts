import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { element } from 'protractor';
import { Film } from '../../film';
import { Actor } from '../../actor';



@Component({
  selector: 'films-list',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent implements OnInit {
  // aditionalTitle: string;
  // films: filmsType[];
  films : Film[] = [];
  actors: Actor[] = [];
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
        this.initPropsFilms(filmList);
      },
      err => {
        console.log("error");
      })
  }

  getActors(page?:number){
    this.filmsService.getPopularActors(page).subscribe(
      (actorList: any) => {
        this.initPropsActor(actorList);
      },
      err => {
        console.log("error");
      })
  }

  initPropsFilms(films){
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

  initPropsActor(apiData){
    apiData.results.forEach(data => {
      this.actors.push({
        name: data.name,
        popularity: data.popularity,
        image: `${this.filmsService.midImgPath}${data['poster_path']}`
      });
    });
    console.log(this.films);
  }

    
  ngOnInit() { 
    this.getFilms();
    this.getActors();

  }

}
