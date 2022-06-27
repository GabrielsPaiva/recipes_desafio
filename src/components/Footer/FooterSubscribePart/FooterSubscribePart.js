import React from 'react';
import * as S from "./Styles"

export default function FooterSubscribePart() {
    return (
        <S.Div>
            <S.FooterContent>
                <S.SubscribeBox>
                    <h2 style={{fontSize: "40px"}}>SUBSCRIBE</h2>
                    <p style={{fontSize: "32px"}}>Sign up for newsletter</p>
                </S.SubscribeBox>
                <S.Input type="email" placeholder="Your Email"/>
                <S.SubmitButton>SUBMIT</S.SubmitButton>
            </S.FooterContent>
        </S.Div>
    )
}