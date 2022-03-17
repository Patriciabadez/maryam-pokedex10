import React from "react";
import styled from "styled-components";
 
const ConteinerHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 12px 20px;
align-items: center;
background-color: #AF1010;
button{
    background-color:  #396bba;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.336);
    border: none;
    border-radius: 6px;
    padding: 10px;
    color: white;
    :hover{
        background-color: lightblue;
        cursor: pointer;
    }
}
img{
    height: 80px;
}
`
const Header = (props) => {

    return (
        <ConteinerHeader>
            <img src="https://static1.textcraft.net/data1/1/d/1dd5d0371368a59688c0f155a5836cba05ac31bdda39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255bfef95601890afd80709d1c80e099d1112c449b7b44a9f413815.png" />
            <button onClick={() => props.mudarPagina()}>{props.titulo}</button>
        </ConteinerHeader>
    )
}
export default Header