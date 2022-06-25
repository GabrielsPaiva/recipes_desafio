import React from 'react'
import * as S from "./styles/MainLatestRecipesStyles"
import cake from "../assets/cake.png"
import pizza from "../assets/pizza.png"
import smoothie from "../assets/smoothie.png"

export default function App() {
    return (
        <S.MainDiv>
            <S.ContentDiv>
                <S.DivTitle>
                    <S.MainTitle>LATEST RECIPES</S.MainTitle>
                    <S.Line></S.Line>
                </S.DivTitle>

                <S.MenuOptions>
                    <S.RedVelvet>
                        <S.CakeImg src={cake} alt="A  Red Velvet Cake"></S.CakeImg>
                        <S.FoodNameDiv>
                            <S.FirstDivLine>
                                <S.FoodNameTitle>Red Velvet Cake</S.FoodNameTitle>
                            </S.FirstDivLine>
                        </S.FoodNameDiv>
                    </S.RedVelvet>

                    <S.MargheritaPizza>
                        <S.PizzaImg src={pizza} alt="A Margherita Pizza"></S.PizzaImg>
                        <S.FoodNameDiv>
                            <S.FirstDivLine>
                                <S.FoodNameTitle>Margherita Pizza</S.FoodNameTitle>
                            </S.FirstDivLine>
                        </S.FoodNameDiv>
                    </S.MargheritaPizza>

                    <S.PeanutSmoothie>
                        <S.SmoothieImg src={smoothie} alt="A Peanut Smoothie"></S.SmoothieImg>
                        <S.FoodNameDiv>
                            <S.FirstDivLine>
                                <S.FoodNameTitle>Peanut Smoothie</S.FoodNameTitle>
                            </S.FirstDivLine>
                        </S.FoodNameDiv>
                    </S.PeanutSmoothie>
                </S.MenuOptions>
            </S.ContentDiv>
        </S.MainDiv>
    )
}