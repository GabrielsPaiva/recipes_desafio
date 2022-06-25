import styled from "styled-components";
import media from "styled-media-query"

export const Div = styled.div`
display: flex;
width: 100%;
height: 949px;

${media.lessThan('huge')`
height: 800px;
`}
${media.lessThan("large")`
height: 600px;
`}
${media.lessThan("medium")`
height: 490px;
`}
${media.lessThan("small")`
flex-direction: column;
height: 949px;
`}
`
export const SpoonImage = styled.img`
width: 50%;
height: 100%;

${media.lessThan("small")`
width: 100%;
height: 40%;
`}
`
export const AboutSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;

${media.lessThan("small")`
width: 100%;
height: 50%;
`}
`
export const AboutDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 576px;
height: 477px;

${media.lessThan("large")`
width: 400px;
height: 350px;
`}
${media.lessThan("medium")`
width: 300px;
height: 300px;
`}
`
export const TitleBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 143px;
height: 81.5px;
`
export const Line = styled.div`
border: solid 1px;
width: 71px;
height: 1px;
`
export const AboutText = styled.p`
font-size: 20.53px;

${media.lessThan("large")`
font-size: 15.48px;
`}
${media.lessThan("medium")`
font-size: 12.8px;
`}
`