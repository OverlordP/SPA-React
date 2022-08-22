import { heroes } from "../data/data";

export const Getcomics= (editorial)=>{
    const validHeroes = ['DC Comics','Marvel Comics'];

    if(!validHeroes.includes(editorial)){
        throw new Error (`${editorial} no esta incluido`);
    }

    return heroes.filter((e)=>e.publisher===editorial);
}
