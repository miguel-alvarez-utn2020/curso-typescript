//un decorador es una funcion que se ejecuta en el momento de compilacion, expande la funionalidad 
//de una clase o metodo, declarado con @nombre

//factory decorator es una funcion que retorna otra funcion
import axios from 'axios'

const GetPokemon = (): Function => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor ) => {
        descriptor.value = async (id: number) => {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            return data;
        }
    }
}


export class Pokemon{
    @GetPokemon()
    async getPokemon(id: number){}
}