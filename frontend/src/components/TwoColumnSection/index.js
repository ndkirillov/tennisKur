import React from 'react';
import { Button } from '../ButtonElement';
import {
    InfoContainer as TwoColumnContainer,
    ImgWrap, 
    InfoRow as TwoColumnRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    InfoWrapper as TwoColumnWrapper,
    Img
} from './TwoColumnElements';


const TwoColumnSection = ({id,imgStart,lightText,headLine,description,buttonLabel,img,alt, primary, dark, big, fontBig, exact}) => {
    return (
        <div>
            <TwoColumnContainer id = {id}>
                <TwoColumnWrapper>
                    <TwoColumnRow imgStart = {imgStart}>
                        <Column1>
                        <TextWrapper>
                            <Heading lightText = {lightText}>
                                {headLine}
                            </Heading>
                            <Subtitle>
                                {description}
                            </Subtitle>
                            <BtnWrap>
                                <Button to = "about" smooth={true}
                                duration = {500} 
                                spy={true} 
                                exact={exact} 
                                offset={-80}
                                primary = {primary ? 1 : 0}
                                dark = {dark ? 1 : 0}
                                big = {big ? 1 : 0}
                                fontBig = {fontBig ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </TwoColumnRow>
                </TwoColumnWrapper>
            </TwoColumnContainer>
        </div>
    )
}

export default TwoColumnSection
