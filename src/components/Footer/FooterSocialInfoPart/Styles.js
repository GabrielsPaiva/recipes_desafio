import styled from "styled-components";
import media from "styled-media-query";

export const FooterMainDiv = styled.div`
width: 100%;
height: 50px;
`
export const FooterDiv = styled.div`
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
export const SocialMediasDiv = styled.div`
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
export const Img = styled.img`
width: 15%;
height: 45px;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`
export const FooterNav = styled.div`
width: 40%;
height: 60px;
margin-top: 110px;
margin-left: 5vw;

${media.lessThan("small")`
margin: 0;
width: 90%;
`}
`
export const Ul = styled.ul`
display: flex;
justify-content: space-evenly;
list-style: none;
font-weight: 600; 
color: #373737;
`
export const Li = styled.li`
&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`
export const CopyRightDiv = styled.div`
height: 35px;
background-color: #446061;
display: flex;
flex-direction: column;
`
export const CopyRightText = styled.p`
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