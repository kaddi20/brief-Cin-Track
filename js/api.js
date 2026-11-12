const cinetrackData = "https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json";
export async function lireFilms(){
    try{
        const reponse=await fetch(cinetrackData);
        if(!reponse.ok){
            throw new Error("Erreur de chargement");
        }
    const films =await reponse.json();
    return films; 
    }catch(error){
        console.log(error);
        throw error;
    }
}