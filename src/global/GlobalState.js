import React, { useState,  useEffect} from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";


export const GlobalState = (props) => {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [listaPokemon, setListaPokemon] = useState([])
  useEffect(()=>{
   getPokemons()
  }, [])

  useEffect(()=>{
    const novaLista =[]
    pokemons.forEach((item)=>{
      axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
      .then((res)=>{
        novaLista.push(res.data)
        if(novaLista.length === 20) {
          const listaOrdenada = novaLista.sort((a, b)=>{
            return a.id - b.id
          })
          setListaPokemon(listaOrdenada)
        }
      }).catch((err)=>{
        console.log("erro", err.message)
      })
    })
  },[pokemons])

  const getPokemons = () => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
      setPokemons(response.data.results)
    }).catch((error) => { 
      console.log(error)   
          
    })
  }

  const states = {listaPokemon,pokedex}

  const setters = {setListaPokemon, setPokedex}

  return (
    <GlobalStateContext.Provider value = {{states, setters}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}