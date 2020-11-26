import React, {useState, useEffect} from 'react';

import PokemonCard from './PokemonCard';

import api from '../../services/api';

function PokemonList(){

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function getAllPokemons(){
            const response = await api.get('pokemon');
    
           setPokemons(response.data.results);
        }
        getAllPokemons();
        
    }, []);

    return (
        <div className="row">
            {pokemons.map((pokemon) => {
                return (
                    <PokemonCard key={pokemon.id} name={pokemon.name} url={pokemon.url} />
                )
            })}
        </div>
    )
}

export default PokemonList;
