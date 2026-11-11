import{lireFilms}from"./api.js";
async function afficheFilm() {
    const films=await lireFilms();
    console.log(films);
}
 afficheFilm();