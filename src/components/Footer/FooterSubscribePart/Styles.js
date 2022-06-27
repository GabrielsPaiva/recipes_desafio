import styled from 'styled-components';
import media from 'styled-media-query';

export const Div = styled.div`
background-color: #DFE4DE;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 764px;

${media.lessThan("small")`
height: 650px;
`}
`
export const FooterContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 792px;
height: 386px;

${media.lessThan("small")`
width: 100%;
`}
`
export const SubscribeBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 372px;
height: 103px;

${media.lessThan("small")`
width: 100%;
`}
`
export const Input = styled.input`
font-size: 25px;
border: none;
outline: none;
text-indent: 50px;
width: 100%;
height: 120px;

${media.lessThan("medium")`
width: 90%;
`}
${media.lessThan("small")`
font-size: 20px;
text-indent: 20px;
width: 70%;
height: 80px;
`}
`
export const SubmitButton = styled.button`
font-size: 25px;
border: solid 4px #373737;
width: 240px;
height: 81px;
cursor: pointer;
`