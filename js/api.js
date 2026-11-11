const cinetrackData = "https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json";
export async function lireFilms(){
    try{
        const reponse=await fetch(cinetrackData);
        const films =await reponse.json();
        console.log(films);
        return films;
    }catch(error){
        console.log(error);
    }
}