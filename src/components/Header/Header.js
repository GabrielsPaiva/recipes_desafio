import React from "react"
import * as S from "./Style"

// images
import background from "../../assets/headerBackground.png"

export default function Header() {
    return (
        <S.Div>
            <S.HeaderBox style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <S.HeaderBar>
                <h2 style={{fontSize: "48px"}}>RC</h2>
                <S.HeaderNav>
                    <S.HeaderNavDiv><S.HeaderNavP>ABOUT</S.HeaderNavP></S.HeaderNavDiv>
                    <S.HeaderNavDiv><S.HeaderNavP>RECIPES</S.HeaderNavP></S.HeaderNavDiv>
                    <S.HeaderNavDiv><S.HeaderNavP>SUBSCRIBE</S.HeaderNavP></S.HeaderNavDiv>
                </S.HeaderNav>
            </S.HeaderBar>
            <S.HeaderTitle>
                <h2>RECIPES</h2> {/*styled directly in the div*/}
            </S.HeaderTitle>
        </S.HeaderBox>
        </S.Div>
    )
}