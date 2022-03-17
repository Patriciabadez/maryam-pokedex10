import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import styled from "styled-components";
import { goToHome } from "../router/Coordinator";
import { GlobalStateContext } from "../global/GlobalStateContext";

const GridConteiner = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
column-gap: 60px;
padding: 40px;
row-gap: 30px;

`
const ConteinerPokedex = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const PokedexPage = () => {
    const { states } = useContext(GlobalStateContext)
    const { pokedex } = states
    const history = useHistory()
   

    return (
        <div>
            <Header mudarPagina={() => goToHome(history)} titulo = {"Ir Para Home"} />
            <ConteinerPokedex>
                <GridConteiner>
                   {pokedex && pokedex.map((poke)=>{
                       return <PokeCard isPokedex key={poke.id} name={poke.name} url={poke.url} poke = {poke} />
                   })}
                </GridConteiner>
            </ConteinerPokedex>
        </div>
    )
}