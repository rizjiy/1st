"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i=0; i<2; ++i) {
  const  a = prompt("Один из последних просмотренных фильмов?", ''),
        b = prompt("На сколько оцените его?", '');
    if (a != null && b != null && a !='' && b != '' && a.length != 50) {
        console.log("done");
        personalMovieDB.movies[a] = b;
    }
    else {
        console.log(a);
        console.log("error");
        i--;
    }
}
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



//
//personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);