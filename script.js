"use strict";

// const numberOfFilms = +prompt("Skolko filmov vi yje posmotreli?");
// 
// const personalMovieDB = {
	// count: numberOfFilms,
	// movies: {},
	// actors: {},
	// genres: [],
	// privat: false
// };
// 
// const a = prompt('Odin iz poslednix prosmotrennix filmov?', ''),
			// b = prompt('Na skolko ocenivaete ego?', ''),
			// c = prompt('Odin iz poslednix prosmotrennix filmov?', ''),
			// d = prompt('Na skolko ocenivaete ego?', '');
// 
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// 
// console.log(personalMovieDB);
// 


const numberOfExperionces = +prompt(`Combien d'années travaillez-vous dans le commerce?`);

const personalExperionceDB = {
	count: numberOfExperionces,
	brands: {},
	creators: {},
	styles: [],
	privat: false
};

const a = prompt(`Dernière marque où vous avez travaillé?`, ''),
			b = prompt(`Quelle note donneriez-vous?`, ''),
			c = prompt(`Dernière marque où vous avez travaillé?`, ''),
			d = prompt(`Quelle note donneriez-vous?`, '');

personalExperionceDB.brands[a] = b;
personalExperionceDB.brands[c] = d;

console.log(personalExperionceDB);