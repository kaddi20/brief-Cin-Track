
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
function ouvrirModel(id){
    const film=movies.find(f=>f.id==id);
    console.log(film);
    if(film){
        details.innerHTML=`
        <img src="${film.image}" class="w-30 h-40 object-cover rounded-xl ">
        <div>
        <h2 class="text-xl text-gray-400 font-bold text-red-600">${film.title}</h2>
        <span class="text-sm text-300">${film.type==="movie"?film.duration +" minutes" : film.seasons.length + " saisons"}</span>
        <span class="text-sm text-300">${film.releaseYear}</span>
        <p class ="text-m text-gray-300">directors: ${film.directors}</p>
        <p class="text-gray-300 text-sm ">${film.description}</p>
        </div> 
        `;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }
}
function clickCard(){
    grid.addEventListener("click",function(e){
        const card =e.target.closest("[data-id]");
        if(card){
            ouvrirModel(card.dataset.id)
        }

    });
}
clickCard();
function fermeModal(){
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}
close.addEventListener("click",fermeModal);
