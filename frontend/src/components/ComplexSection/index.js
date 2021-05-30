import React from 'react';
import {ComplexContainer, HeadingRow, ComplexWrapper, ComplexRow, HeadWrapper,ComplexImgWrap,ComplexTextWrap,ComplexBtnWrap, ColumnOneImg, ColumnTwoImg} from "./ComplexSectionElements";
import { Column1, Column2 } from './ComplexSectionElements'
import { Heading } from './ComplexSectionElements';

const ComplexSection = ({id, headLine, description, alt, img, img2, description2}) => {
    return (
        <div>
            <ComplexContainer id = {id}>
                <ComplexWrapper>
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
                    <ComplexRow>
                        <Column1>
                        <ComplexImgWrap>
                            <ColumnOneImg src = {img} alt = {alt} />
                        </ComplexImgWrap>
                        <ComplexTextWrap>
                            {description}
                        </ComplexTextWrap>
                        <ComplexBtnWrap>

                        </ComplexBtnWrap>
                        </Column1>
                        <Column2>
                        <ComplexImgWrap>
                            <ColumnTwoImg src = {img2} alt = {alt} />
                        </ComplexImgWrap>
                        <ComplexTextWrap>
                            {description2}
                        </ComplexTextWrap>
                        <ComplexBtnWrap>

                        </ComplexBtnWrap>
                        </Column2>
                    </ComplexRow>
                </ComplexWrapper>
            </ComplexContainer>
        </div>
    )
}

export default ComplexSection
