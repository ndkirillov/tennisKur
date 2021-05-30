import React from 'react'
import { Column1, Column2 } from '../TwoColumnSection/TwoColumnElements'
import {
    ContactContainer,
    ContactWrapper,
    ContactRow,
    HeadWrapper,
    Heading,
    ContactText,
    ContactImgWrap,
    ContactImg,
    ContactTextWrapper
} 
from './ContactElements';

const ContactSection = ({id, headLine, description, img, alt}) => {
    return (
        <div>
            <ContactContainer id = {id}>
                <ContactWrapper>
                    <ContactRow>
                        <HeadWrapper>
                            <Heading>
                                {headLine}
                            </Heading>
                        </HeadWrapper>
                    </ContactRow>
                    <ContactRow>
                        <Column1>
                        <ContactTextWrapper>
                            <ContactText>
                                {description}
                            </ContactText>
                        </ContactTextWrapper>
                        </Column1>
                        <Column2>
                        <ContactImgWrap>
                            <ContactImg src = {img} alt = {alt}/>
                        </ContactImgWrap>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer>
        </div>
    )
}

export default ContactSection
