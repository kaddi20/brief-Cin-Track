import{lireFilms}from"./api.js";
import{afficherCards}from"./ui.js";
async function afficheFilm() {
    const films=await lireFilms();
    // console.log(films)
    console.log(films);
    afficherCards(films);
    
}
 afficheFilm();