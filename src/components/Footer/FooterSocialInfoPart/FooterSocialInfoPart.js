import React from 'react'
import * as S from "./Styles"

// images
import instagram from "../../../assets/instagram.png"
import twitter from "../../../assets/twitter.png"
import facebook from "../../../assets/facebook.png"
import pinterest from "../../../assets/pinterest.png"


export default function App() {
    return (
        <S.FooterMainDiv>
        <S.FooterDiv>

            <S.SocialMediasDiv>
                <S.Img src={instagram} alt="Logo Instagram" ></S.Img>
                <S.Img src={twitter} alt="Logo Twitter" ></S.Img>
                <S.Img src={facebook} alt="Logo Facebook" ></S.Img>
                <S.Img src={pinterest} alt="Logo Pinterest" ></S.Img>
            </S.SocialMediasDiv>

            <S.FooterNav>
                <S.Ul>
                    <S.Li>ABOUT</S.Li>
                    <S.Li>RECIPES</S.Li>
                    <S.Li>SUBSCRIBE</S.Li>
                </S.Ul>
            </S.FooterNav>
        </S.FooterDiv>
        <S.CopyRightDiv>
            <S.CopyRightText>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</S.CopyRightText>
        </S.CopyRightDiv>
        </S.FooterMainDiv>
    )
}