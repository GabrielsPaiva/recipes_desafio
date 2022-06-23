import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
background-color: #DFE4DE;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 764px;
`
const FooterContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 792px;
height: 386px;
`
const SubscribeBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 372px;
height: 103px;
`
const Input = styled.input`
font-size: 25px;
border: none;
outline: none;
text-indent: 50px;
width: 100%;
height: 120px;
`
const SubmitButton = styled.button`
font-size: 25px;
border: solid 4px #373737;
width: 240px;
height: 81px;
cursor: pointer;
`

export default function FooterSubscribePart() {
    return (
        <Div>
            <FooterContent>
                <SubscribeBox>
                    <h2 style={{fontSize: "40px"}}>SUBSCRIBE</h2>
                    <p style={{fontSize: "32px"}}>Sign up for newsletter</p>
                </SubscribeBox>
                <Input type="email" placeholder="Your Email"/>
                <SubmitButton>SUBMIT</SubmitButton>
            </FooterContent>
        </Div>
    )
}