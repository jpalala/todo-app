import { Injectable } from '@angular/core';
import { Movie, Cast } from '../model/movie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Observable<Array<Movie>>;

  constructor(private movieService: MovieService) {
    this.initMovies();
  }
  // / TODO (get via JSON )
  // getMoviesJSON() {
  //   var list = require('../model/movie-list.json');
  //   var movies = list.movies;
  //   for(movie of movies ){

  //   }
  // }
  // */

  getMovies(): Observable<Array<Movie>>{
    return of([
      new Movie(
        'Inception',
         new Date("2010-07-16"),[
        new Cast( "Leonardo", "Cobb"),
        new Cast( "Ellen Page", "Ariadne")],
        'https://m.media-amazon.com/images/M/MV5BOTgyOTIxMDc' +
        '5Nl5BMl5BanBnXkFtZTcwNzY4MzQ4NA@@._V1_.jpg',
        'https://www.imdb.com/title/tt1375666/?ref_=nv_sr_1?ref_=nv_sr_1'

      ),
      new Movie('Interstellar', new Date("2014-11-07"),[
        new Cast( " Matthew McConaughey", "Cooper"),
        new Cast( "Anne Hathaway", "Brand")],
         'https://m.media-amazon.com/images/M/MV5BNDBiZTNiNjItYWFjNC00Yzc2LWFjMWUtNDAyZmFlZGM0ZW' +
         'I0XkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
         'https://www.imdb.com/title/tt1375666/?ref_=nv_sr_1?ref_=nv_sr_1'
         )
    ]);
  }

  initMovies() {
    this.movies = this.getMovies();
    /*
    this.getMovies().subscribe((movies) => {
        this.movies = this.getMovies();
      }
    );
    */
  }}
