import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";
import { ConteinerDetalhes, DivImagens, DivStatus, ConteinerTipoAtaques, DivTipos, DivAtaques } from "../styled/DetailsStyled"

export const DetailsPage = () => {

    const history = useHistory()
    const {name} = useParams()
    const [details, setDetails] = useState({})

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
            console.log(response.data)
            setDetails(response.data)          
        }).catch((error) => { 
            console.log(error)          
        })

    },[])

    return (
        <div>
            <Header mudarPagina = {()=> history.goBack()} titulo ={"Voltar Página"}/>
            <ConteinerDetalhes>
                <DivImagens>
                   <div> <img src={details.sprites && details.sprites.versions['generation-v']['black-white'].animated.front_default}/></div>
                   <div> <img src={details.sprites && details.sprites.versions['generation-v']['black-white'].animated.back_default}/></div>
                </DivImagens>
                <DivStatus>
                    <h2>Status</h2>
                    {details.stats && details.stats.map((status) => {
                        return <p><b>{status.stat.name}: </b>{status.base_stat}</p>
                    })}
                </DivStatus>
                <ConteinerTipoAtaques>
                    <DivTipos>
                        {details.types && details.types.map((type) => {
                            return <p><b>{type.type.name}</b></p>
                        })}
                    </DivTipos>
                    <DivAtaques>
                        <h2>Principais Ataques</h2>
                        {details.moves && details.moves.map((attack, indexOfAttacks) => {
                            return indexOfAttacks < 5 && <p>{attack.move.name}</p>
                        })}
                    </DivAtaques>
                </ConteinerTipoAtaques>
            </ConteinerDetalhes>
        </div>
    )
}