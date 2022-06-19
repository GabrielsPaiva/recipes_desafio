import React, { Component } from "react"
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import cake from "../assets/cake.png"
import pizza from "../assets/pizza.png"
import smoothie from "../assets/smoothie.png"

const MainDiv = styled.div`
width: 100%;
height: 100vh;
background-color: #F2F4F1;
`
const DivTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 25vh;
padding: 15vh;
`
const MainTitle = styled.h3`
font-family: 'Roboto', sans-serif;
font-weight: 900;
color: #373737;
font-size: 18px;
`
const Line = styled.div`
width: 4vw;
height: 0.1vh;
margin: 3vh;
border: solid #373737;
`
const MenuOptions = styled.div`
border: solid green;
display: flex;
justify-content: space-evenly;
width: 100%;
`
const RedVelvet = styled.div`
width: 6vw;
`
const CakeImg = styled.img`
width: 20vw;
height: 32vh;
`
const MargheritaPizza = styled.div`
width: 6vw;
`
const PizzaImg = styled.img`
width: 20vw;
height: 32vh;
`
const PeanutSmoothie = styled.div`
`
const SmoothieImg = styled.img`
width: 20vw;
height: 32vh;
`
export default class App extends Component {
    render() {
        return (
            <MainDiv>
                <DivTitle>
                    <MainTitle>LATEST RECIPES</MainTitle>
                    <Line></Line>
                </DivTitle>

                <MenuOptions>
                    <RedVelvet>
                        <CakeImg src={cake} alt="A  Red Velvet Cake"></CakeImg>
                    </RedVelvet>

                    <MargheritaPizza>
                        <PizzaImg src={pizza} alt="A Margherita Pizza"></PizzaImg>
                    </MargheritaPizza>

                    <PeanutSmoothie>
                        <SmoothieImg src={smoothie} alt="A Peanut Smoothie"></SmoothieImg>
                    </PeanutSmoothie>
                </MenuOptions>

            </MainDiv>
        )
    }
}