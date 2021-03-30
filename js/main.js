"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
} 
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i=0; i<2; ++i) {
        const  a = prompt("Один из последних просмотренных фильмов?", ''),
              b = prompt("На сколько оцените его?", '');
          if (a != null && b != null && a !='' && b != '' && a.length != 50) {
              console.log("done");
              personalMovieDB.movies[a] = b;
          }
          else {
              console.log("error");
              i--;
          }
      }

}
rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10){
        const с = confirm ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        const d = confirm ("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        const k = confirm("Вы киноман");
    }
    else {
        const r = confirm("Произошла ошибка");
    }

}
detectPersonalLevel ();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();
 function writeYourGenres() {
     for(let i = 1; i<=3; ++i) {
         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
     }
 }
 writeYourGenres();