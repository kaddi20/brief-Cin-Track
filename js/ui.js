
const grid=document.querySelector("#films-liste");
const modal=document.querySelector("#modal");
const close=document.querySelector("#fermer");
const details=document.querySelector("#details");
let movies=[];

function createCard(film){
    return`
    <div data-id="${film.id}" class="bg-gray-800 rounded-xl">
    <img src="${film.image}" alt="${film.title}" class="w-full h-64">
    <div class="p-4">
    <h2 class="text-xl font-bold">${film.title}</h2>
    <p class="text-gray-400">${film.releaseYear}</p>
    <span class="text-white">${film.type}</span>
    </div>
    </div>
    
    `;
}
export function afficherCards(films){
    if(!grid) return;
    movies=films;
    grid.innerHTML=films.map(createCard).join("");
}
