import React from 'react'
import { Column1, Column2 } from '../TwoColumnSection/TwoColumnElements'
import {
    CourtContainer,
    CourtWrapper,
    CourtRow,
    HeadWrapper,
    Heading,
    CourtText,
    CourtImgWrap,
    CourtImg,
    CourtTextWrapper
} 
from './CourtElements';

const CourtSection = ({id, headLine, description, img, alt}) => {
    return (
        <div>
            <CourtContainer id = {id}>
                <CourtWrapper>
                    <CourtRow>
                        <HeadWrapper>
                            <Heading>
                                {headLine}
                            </Heading>
                        </HeadWrapper>
                    </CourtRow>
                    <CourtRow>
                        <Column1>
                        <CourtTextWrapper>
                            <CourtText>
                                {description}
                            </CourtText>
                        </CourtTextWrapper>
                        </Column1>
                        <Column2>
                        <CourtImgWrap>
                            <CourtImg src = {img} alt = {alt}/>
                        </CourtImgWrap>
                        </Column2>
                    </CourtRow>
                </CourtWrapper>
            </CourtContainer>
        </div>
    )
}

export default CourtSection
