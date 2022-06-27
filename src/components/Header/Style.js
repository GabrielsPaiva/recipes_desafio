import styled from "styled-components"
import media from "styled-media-query"

export const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 1338px;

${media.lessThan("huge")`
height: 1035px;
`}
${media.lessThan("large")`
height: 990px;
`}
${media.lessThan("medium")`
height: 670px;
`}
${media.lessThan("small")`
height: 470px;
`}
`
export const HeaderBox = styled.div`
color: #373737;
display: flex;
flex-direction: column;
align-items: center;
width: 98%;
height: 1303px;

${media.lessThan("huge")`
height: 1000px;
`}
${media.lessThan("large")`
height: 965px;
`}
${media.lessThan("medium")`
height: 650px;
`}
${media.lessThan("small")`
height: 450px;
`}
`
export const HeaderBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 95%;
height: 9em;

${media.lessThan("medium")`
height: 5em;
`}
`
export const HeaderNav = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 45%;
height: fit-content;

${media.lessThan("medium")`
width: 65%;
`}
${media.lessThan("small")`
width: 80%;
`}
`
export const HeaderNavDiv = styled.ul`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
width: 32%;
height: 81px;
cursor: pointer;
&:hover {
    border: solid 3px #373737;
}

${media.lessThan("small")`
height: 40px;
`}
`
export const HeaderNavP = styled.p`
font-size: 24px;

${media.lessThan("small")`
font-size: 14px;
`}
`
export const HeaderTitle = styled.div`
margin-top: 34em;
h2{
    font-size: 150px;
}

${media.lessThan("huge")`
margin-top: 22.5em;
h2{
    font-size: 135px;
}
`}
${media.lessThan("large")`
margin-top: 21em;
`}
${media.lessThan("medium")`
margin-top: 15em;
h2{
    font-size: 100px;
}
`}
${media.lessThan("small")`
margin-top: 9em;
h2{
    font-size: 70px;
}
`}
`