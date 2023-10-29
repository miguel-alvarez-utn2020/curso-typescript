import { Pokemon } from './decorators'


const pok = new Pokemon()

let pokemon: Pokemon = {} as Pokemon;

pok.getPokemon(4).then( (data: any) => {
    pokemon = data;
} )


setTimeout(()=>{
    console.log(pokemon);
}, 3000)






