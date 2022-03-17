import React, { useContext} from "react";
import { useHistory } from "react-router-dom";
import { Cardpokemon, Botao1, Botao2 } from "./stled";
import { goToPokeDetails } from "../router/Coordinator";
import { GlobalStateContext } from "../global/GlobalStateContext";

const PokeCard = (props) => {
    
    const history = useHistory()
    const {states, setters}=useContext(GlobalStateContext)
    const {listaPokemon, pokedex} = states
    const {setListaPokemon, setPokedex} = setters
    console.log(listaPokemon)

    const adicionarPokemon = ()=>{
        const pokeIndex = listaPokemon.findIndex(
            (item)=> item.name === props.poke.name 
        );
        const novaListaDePokemon = [...listaPokemon]
        novaListaDePokemon.splice(pokeIndex, 1)
        const ordenarListaPokemons = novaListaDePokemon.sort((a,b)=>{
            return a.id - b.id
        })
        const novaListaDePokedex = [...pokedex, props.poke]
        const ordenarListaPokedex = novaListaDePokedex.sort((a, b)=>{
            return a.id - b.id
        })
        setListaPokemon(ordenarListaPokemons)
        setPokedex(ordenarListaPokedex)
    }
    
    const removeDaPokedex = ()=>{
        const pokeIndex = pokedex.findIndex(
            (item) => item.name === props.poke.name
        );
        const novaListaDePokedex = [...pokedex]
        novaListaDePokedex.splice(pokeIndex, 1)
        const ordenarListaPokedex = novaListaDePokedex.sort((a,b)=>{
            return a.id - b.id
        })
        const novaListaDePokemon = [...listaPokemon, props.poke]
        const ordenarListaPokemon = novaListaDePokemon.sort((a, b)=>{
            return a.id - b.id
        })
        setPokedex(ordenarListaPokedex)
        setListaPokemon(ordenarListaPokemon)
        
    }

    return (
        <Cardpokemon>
            <div>
                <img src={props.poke && props.poke.sprites.versions['generation-v']['black-white'].animated.front_default} alt={props.poke.name}/>
            </div>
            <h2>{props.poke.name}</h2>
            <div>
                <Botao1 onClick={props.isPokedex ? removeDaPokedex : adicionarPokemon}>{props.isPokedex ? "Remover" : "Adicionar"}</Botao1>
                <Botao2 onClick={() => goToPokeDetails(history, props.poke.name)}>Detalhes</Botao2>
            </div>
        </Cardpokemon>
    )
}
export default PokeCard