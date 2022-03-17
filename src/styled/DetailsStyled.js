import styled from "styled-components";

export const ConteinerDetalhes = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 20px 10vw;
justify-content: space-evenly;
`
export const DivImagens = styled.div`
display: flex;
flex-direction: column;
height: 70vh;
div{
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid black 1px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.336);
    height: 180px;
    width: 180px;
    margin-bottom: 30%;
    padding: 10px;
    img{
    height: 140px; 
}
}

`
export const DivStatus = styled.div`
display: flex;
flex-direction: column;
margin: 0 20px;
border: black solid 1px;
border-radius: 5px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.336);
width: 300px;
height: 70vh;
padding: 0 20px;
h2{
    margin-bottom: 13%;
    margin-top: 12%;
    display: flex;
    justify-content: center;
}
p{
    margin: 8% 2%;
}
`
export const ConteinerTipoAtaques = styled.div`
display: flex;
flex-direction: column;
height: 60vh;
justify-content: space-between;
height: 70vh;
`
export const DivTipos = styled.div`
display: flex;
width: 300px;
justify-content: space-around;
border: black solid 1px;
border-radius: 5px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.336);
padding: 20px;

`
export const DivAtaques = styled.div`
display: flex;
flex-direction: column;
width: 300px;
border: solid black 1px;
border-radius: 5px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.336);
padding: 20px;
h2{
    margin-bottom: 10%;
    margin-top: 10%;
    display: flex;
    justify-content: center;
}
`