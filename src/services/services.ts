import axion from 'axios'
import { Pokemon } from '../interfaces/interfaces';

export const getPokemon = async (id: number): Promise<Pokemon> => {
  const { data } = await axion.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return data;  
}