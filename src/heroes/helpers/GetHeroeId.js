import { heroes } from "../data/data"

export const GetHeroeID = function(id){
    const heroeID = heroes.find((e)=>(e.id===id));
    return heroeID
}