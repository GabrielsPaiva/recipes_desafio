import styled from "styled-components"

export const Div = styled.div`
color: #373737;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 1303px;
`
export const HeaderBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 95%;
height: 9em;
`
export const HeaderNav = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 45%;
height: fit-content;
`
export const HeaderNavDiv = styled.ul`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
width: 32%;
height: 81px;
&:hover {
    border: solid 3px #373737;
}
`
export const HeaderNavP = styled.p`
font-size: 24px;
`
export const HeaderTitle = styled.div`
margin-top: 34em;
`