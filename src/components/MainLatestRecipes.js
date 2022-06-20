import React, { Component } from "react"
import styled from 'styled-components'
import cake from "../assets/cake.png"
import pizza from "../assets/pizza.png"
import smoothie from "../assets/smoothie.png"

const MainDiv = styled.div`
background-color: #F2F4F1;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 1503px;
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
font-size: 40px;
`
const Line = styled.div`
width: 104px;
height: 1px;
margin: 15px;
border: solid #373737;
`
const MenuOptions = styled.div`
/* border: solid green; */
display: flex;
justify-content: space-evenly;
width: 1263px;
height: 500px;
background-color: #F2F4F1;
`
const RedVelvet = styled.div`
width: 170px;
display: flex;
flex-direction: column;
margin: 22px;
&:hover{
    transform:scale(1.1);
    cursor: pointer;
}
`
const CakeImg = styled.img`
width: 300px;
`
const MargheritaPizza = styled.div`
width: 170px;
display: flex;
flex-direction: column;
margin: 22px;
&:hover{
    transform:scale(1.1);
    cursor: pointer;
}
`
const PizzaImg = styled.img`
width: 300px;
`
const PeanutSmoothie = styled.div`
display: flex;
flex-direction: column;
margin: 22px;
&:hover{
    transform:scale(1.1);
    cursor: pointer;
}
`
const SmoothieImg = styled.img`
width: 300px;
`
const FoodNameDiv = styled.div`
width: 300px;
height: 200px;
background-color: #fff;
display: flex;
justify-content: center;
box-shadow: 0px 7px 6px #00000029;
`
const FirstDivLine = styled.div`
width: 35px;
height: 1px;
margin: 90px;
border: solid #373737;
display: flex;
flex-direction: column;
align-items: center;
`
const FoodNameTitle = styled.h3`
font-size: 20px;
font-weight: 300;
width: 140px;
margin: 20px;
`
const FoodNameDivTwo = styled.div`
width: 300px;
height: 200px;
background-color: #fff;
display: flex;
justify-content: center;
box-shadow: 0px 7px 6px #00000029;
`
const SecondDivLine = styled.div`
width: 35px;
height: 1px;
margin: 90px;
border: solid #373737;
display: flex;
flex-direction: column;
align-items: center;
`
const FoodNameTitleTwo = styled.h3`
font-size: 20px;
font-weight: 300;
width: 140px;
margin: 20px;
`
const FoodNameDivThree = styled.div`
width: 300px;
height: 200px;
background-color: #fff;
display: flex;
justify-content: center;
box-shadow: 0px 7px 6px #00000029;
`
const ThirdDivLine = styled.div`
width: 35px;
height: 1px;
margin: 90px;
border: solid #373737;
display: flex;
flex-direction: column;
align-items: center;
`
const FoodNameTitleThree = styled.h3`
font-size: 20px;
font-weight: 300;
width: 140px;
margin: 20px;
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
                        <FoodNameDiv>
                            <FirstDivLine>
                                <FoodNameTitle>Red Velvet Cake</FoodNameTitle>
                            </FirstDivLine>
                        </FoodNameDiv>
                    </RedVelvet>

                    <MargheritaPizza>
                        <PizzaImg src={pizza} alt="A Margherita Pizza"></PizzaImg>
                        <FoodNameDivTwo>
                            <SecondDivLine>
                                <FoodNameTitleTwo>Margherita Pizza</FoodNameTitleTwo>
                            </SecondDivLine>
                        </FoodNameDivTwo>
                    </MargheritaPizza>

                    <PeanutSmoothie>
                        <SmoothieImg src={smoothie} alt="A Peanut Smoothie"></SmoothieImg>
                        <FoodNameDivThree>
                            <ThirdDivLine>
                                <FoodNameTitleThree>Peanut Smoothie</FoodNameTitleThree>
                            </ThirdDivLine>
                        </FoodNameDivThree>
                    </PeanutSmoothie>
                </MenuOptions>
            </MainDiv>
        )
    }
}