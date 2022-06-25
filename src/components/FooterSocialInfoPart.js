import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

// images
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import pinterest from "../assets/pinterest.png"

const FooterMainDiv = styled.div`
width: 100%;
height: 50px;
`
const FooterDiv = styled.div`
width: 100%;
height: 250px;
background-color: #F2F4F1;
display: flex;
justify-content: space-between;

${media.lessThan("small")`
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`}
`
const SocialMediasDiv = styled.div`
display: flex;
justify-content: space-evenly;
width: 300px;
height: 50px;
margin-top: 110px;
margin-left: 5vw;

${media.lessThan("small")`
margin: 2em 0 0 0;
`}
`
const Img = styled.img`
width: 15%;
height: 45px;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`
const FooterNav = styled.div`
width: 40%;
height: 60px;
margin-top: 110px;
margin-left: 5vw;

${media.lessThan("small")`
margin: 0;
width: 90%;
`}
`
const Ul = styled.ul`
display: flex;
justify-content: space-evenly;
list-style: none;
font-weight: 600; 
color: #373737;
`
const Li = styled.li`
&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`
const CopyRightDiv = styled.div`
height: 35px;
background-color: #446061;
display: flex;
flex-direction: column;
`
const CopyRightText = styled.p`
font-size: 0.8rem;
display: flex;
justify-content: center;
margin: 1vh;
color: #fff;
opacity: 0.5;

${media.lessThan("large")`
font-size: 0.75rem;
`}
${media.lessThan("medium")`
font-size: 0.55rem;
`}
${media.lessThan("small")`
font-size: 0.45rem;
text-align: center;
`}
`
export default function App() {
    return (
        <FooterMainDiv>
        <FooterDiv>

            <SocialMediasDiv>
                <Img src={instagram} alt="Logo Instagram" ></Img>
                <Img src={twitter} alt="Logo Twitter" ></Img>
                <Img src={facebook} alt="Logo Facebook" ></Img>
                <Img src={pinterest} alt="Logo Pinterest" ></Img>
            </SocialMediasDiv>

            <FooterNav>
                <Ul>
                    <Li>ABOUT</Li>
                    <Li>RECIPES</Li>
                    <Li>SUBSCRIBE</Li>
                </Ul>
            </FooterNav>
        </FooterDiv>
        <CopyRightDiv>
            <CopyRightText>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</CopyRightText>
        </CopyRightDiv>
        </FooterMainDiv>
    )
}