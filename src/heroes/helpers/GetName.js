
import { heroes } from '../data/data'


export default function GetName(name) {
    const heroe = heroes.filter((e) => (e.superhero.toLowerCase() == name));
    return heroe
}
