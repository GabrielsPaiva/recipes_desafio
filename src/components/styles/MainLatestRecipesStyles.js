import styled from "styled-components";
import media from "styled-media-query";

export const MainDiv = styled.div`
background-color: #F2F4F1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 1503px;

${media.lessThan("huge")`
height: 1400px;
`}
${media.lessThan("large")`
height: 1300px;
`}
${media.lessThan("medium")`
height: 900px;
`}
${media.lessThan("small")`
justify-content: inherit;
height: 1450px;
`}
`
export const ContentDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 90%;
height: 964px;

${media.lessThan("huge")`
height: 850px;
`}
${media.lessThan("large")`
height: 680px;
`}
${media.lessThan("medium")`
height: 500px;
`}
${media.lessThan("small")`
justify-content: inherit;
height: 1450px;
`}
`
export const DivTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 327px;
height: 81.5px;

${media.lessThan("small")`
margin: 4em 0 1em 0;
`}
`
export const MainTitle = styled.h3`
font-family: 'Roboto', sans-serif;
font-weight: 900;
color: #373737;
font-size: 40px;

${media.lessThan("medium")`
font-size: 30px;
`}
`
export const Line = styled.div`
width: 5vw;
height: 1px;
margin: 15px;
border: solid #373737;

${media.lessThan("small")`
width: 20%;
`}
`
export const MenuOptions = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 80%;
background-color: #F2F4F1;

${media.lessThan("small")`
flex-direction: column; 
align-items: center;
`}
`
export const RedVelvet = styled.div`
width: 31%;
height: 90%;
display: flex;
flex-direction: column;
&:hover{
    transform:scale(1.1);
    cursor: pointer;
}

${media.lessThan("small")`
width: 80%;
height: 400px;
`}
`
export const CakeImg = styled.img`
width: 100%;
`
export const MargheritaPizza = styled.div`
width: 31%;
height: 90%;
display: flex;
flex-direction: column;
&:hover{
    transform:scale(1.1);
    cursor: pointer;
}

${media.lessThan("small")`
width: 80%;
height: 400px;
`}
`
export const PizzaImg = styled.img`
width: 100%;
`
export const PeanutSmoothie = styled.div`
width: 31%;
height: 90%;
display: flex;
flex-direction: column;
&:hover{
    transform:scale(1.1);
    cursor: pointer;
}

${media.lessThan("small")`
width: 80%;
height: 400px;
`}
`
export const SmoothieImg = styled.img`
width: 100%;
`
export const FoodNameDiv = styled.div`
width: 100%;
height: 100%;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 7px 6px #00000029;

${media.lessThan("small")`
height: 40%;
`}
`
export const FirstDivLine = styled.div`
width: 35px;
height: 1px;
border: solid #373737;
display: flex;
flex-direction: column;
align-items: center;
`
export const FoodNameTitle = styled.h3`
font-size: 32px;
font-weight: 300;
width: 243px;
margin-top: 25px;

${media.lessThan("medium")`
font-size: 25px;
width: 190px;
`}
`