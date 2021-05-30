import React from 'react';
import {CoachesContainer, HeadingRow, CoachesWrapper, CoachesRow, HeadWrapper,CoachesImgWrap,CoachesTextWrap,CoachesBtnWrap, ColumnOneImg, ColumnTwoImg} from "./CoachesSectionElements";
import { Column1, Column2 } from './CoachesSectionElements'
import { Heading } from './CoachesSectionElements';

const CoachesSection = ({id, headLine, description, alt, img, img2, description2}) => {
    return (
        <div>
            <CoachesContainer id = {id}>
                <CoachesWrapper>
                    <HeadingRow>
                    <Column1>
                        <HeadWrapper>
                            <Heading>
                                {headLine}
                            </Heading>
                        </HeadWrapper>
                    </Column1>
                        <Column2>
                            <div></div>
                        </Column2>
                    </HeadingRow>
                    <CoachesRow>
                        <Column1>
                        <CoachesImgWrap>
                            <ColumnOneImg src = {img} alt = {alt} />
                        </CoachesImgWrap>
                        <CoachesTextWrap>
                            {description}
                        </CoachesTextWrap>
                        <CoachesBtnWrap>

                        </CoachesBtnWrap>
                        </Column1>
                        <Column2>
                        <CoachesImgWrap>
                            <ColumnTwoImg src = {img2} alt = {alt} />
                        </CoachesImgWrap>
                        <CoachesTextWrap>
                            {description2}
                        </CoachesTextWrap>
                        <CoachesBtnWrap>

                        </CoachesBtnWrap>
                        </Column2>
                    </CoachesRow>
                </CoachesWrapper>
            </CoachesContainer>
        </div>
    )
}

export default CoachesSection
