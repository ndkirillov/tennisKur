import React from 'react'
import { Column1, Column2 } from '../TwoColumnSection/TwoColumnElements'
import {
    OneColumnContainer,
    OneColumnWrapper,
    OneColumnRow,
    HeadWrapper,
    Heading,
    OneColumnTextWrapper,
    OneColumnText,
    OneColumnImgWrap,
    OneColumnImg
} 
from './OneColumnElements';

const OneColumnSection = ({id, headLine, description, img, alt}) => {
    return (
        <div>
            <OneColumnContainer id = {id}>
                <OneColumnWrapper>
                    <OneColumnRow>
                        <HeadWrapper>
                            <Heading>
                                {headLine}
                            </Heading>
                        </HeadWrapper>
                    </OneColumnRow>
                    <OneColumnRow>
                        <Column1>
                        <OneColumnTextWrapper>
                            <OneColumnText>
                                {description}
                            </OneColumnText>
                        </OneColumnTextWrapper>
                        </Column1>
                        <Column2>
                        <OneColumnImgWrap>
                            <OneColumnImg src = {img} alt = {alt}/>
                        </OneColumnImgWrap>
                        </Column2>
                    </OneColumnRow>
                </OneColumnWrapper>
            </OneColumnContainer>
        </div>
    )
}

export default OneColumnSection
