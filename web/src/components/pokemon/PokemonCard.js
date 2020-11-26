import React from 'react';

import styled from 'styled-components';

import capitalize from '../../utils/capitalize';

const PokemonCard = ({name, url}) => {

    const pokeIndex = url.split("/")[url.split("/").length -2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png?raw=true`;

    const Sprite = styled.img`
        width: 5em;
        height: 5em;
    `;

    const Card = styled.div`
        box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        &:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
        -moz-user-select: none;
        -website-user-select: none;
        user-select: none;
        -o-user-select: none;
    `;

    name = capitalize(name);

    //console.log({pokeIndex, imageUrl});
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <Card className="card">
                        <h5 className="card-header">
                            {pokeIndex}
                        </h5>
                        <Sprite className="card-img-top rounded mx-auto mt-2"
                        src={imageUrl} />
                        <div className="card-body mx-auto">
                            <h6 className="card-title">
                                {name}
                            </h6>
                        </div>
                </Card>
            </div>
        )
}

export default PokemonCard;