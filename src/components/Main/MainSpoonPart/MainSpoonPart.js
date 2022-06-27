import React from 'react';
import * as S from "./Styles"

// image
import spoonImage from "../../../assets/spoonImage.png"

export default function MainSpoonPart() {
    return (
        <S.Div>
            <S.SpoonImage src={spoonImage}/>
            <S.AboutSection>
                <S.AboutDiv>
                    <S.TitleBox>
                        <h2 style={{fontSize: '40px'}}>About</h2>
                        <S.Line></S.Line>
                    </S.TitleBox>
                    <S.AboutText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis
                    </S.AboutText>
                </S.AboutDiv>
            </S.AboutSection>            
        </S.Div>
    );
}