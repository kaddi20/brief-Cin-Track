
const grid=document.querySelector("#films-liste");
const modal=document.querySelector("#modal");
const close=document.querySelector("#fermer");
const details=document.querySelector("#details");
const search=document.querySelector("#search");
const filtre=document.querySelectorAll(".filtre-btn");
const pagination=document.querySelector("#pagination");
let page =1;
let nPage=8;
let movies=[];

function createCard(film){
    return`
    <div data-id="${film.id}" class="bg-gray-800 h-96 rounded-xl">
    <img src="${film.image}" alt="${film.title}" class="w-full h-72">
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
        <img src="${film.image}" class="w-30 h-32 object-cover rounded-xl  ">
        <div>
        <h2 class="text-xl text-gray-400 font-bold text-red-600">${film.title}</h2>
        <p class="text-sm text-300">${film.type==="movie"?film.duration +" minutes" : film.seasons.length + " saisons"}</p>
        <p class="text-sm text-300">${film.releaseYear}</p>
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

function recherche(){
    const val=search.value.toLowerCase();
    const resultat=movies.filter(film=>
        film.title.toLowerCase().includes(val)
    );
    page=1;
    affichePagination(resultat);
}
search.addEventListener("input",recherche);

function filtrer(type){
    let resulta = movies.filter(film=>{
        if(type==="tous") return true;
        if(type==="films") return film.type==="movie";
        if(type==="series") return film.type==="series";
    });
    page=1;
    affichePagination(resulta);    
}
filtre.forEach(btn => {
    btn.addEventListener("click",function(){
        filtrer(this.dataset.filtre)
    });
});
function affichePagination(resu){
    let totalPage=Math.ceil(resu.length/nPage);
    let debut=(page-1)*nPage;
    grid.innerHTML=resu.slice(debut,debut+nPage).map(createCard).join("");
    pagination.innerHTML="";
    for(let i=1;i<=totalPage;i++){
        let btn=document.createElement("button");
        btn.innerHTML=i;
        btn.classList="bg-gray-800 text-white px-4 py-2 rounded-lg houver:bg-red-600";
        if(i===page){
            btn.classList.add("bg-red-600");
        }
        btn.addEventListener("click",()=>{
            page=i;
            affichePagination(resu);
        });
        pagination.appendChild(btn);
    }
}