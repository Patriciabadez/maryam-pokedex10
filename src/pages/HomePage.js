import React, { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalStateContext"
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import {GridConteiner, ConteinerHome} from "../styled/HomeStyled";
 import { goToPokedex } from "../router/Coordinator";
 import { useHistory } from "react-router-dom";

export const HomePage = () => {

    const {states} = useContext(GlobalStateContext)
    const history = useHistory()


    const pokemonsName = states.listaPokemon.map((poke) => {
        return <PokeCard key={poke.name} poke={poke} />     
    })
        
    return (
        <div>
            <Header titulo = {"Ir Para Pokedex"} mudarPagina={()=> goToPokedex(history)}/>
            <ConteinerHome>
            <GridConteiner>
            {pokemonsName}
            </GridConteiner>
            </ConteinerHome>
        </div>
    )
}