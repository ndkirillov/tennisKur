import styled from 'styled-components'

export const OneColumnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        padding: 100px 0px;
    }
`

export const OneColumnWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    height: 860px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    text-align: center;
`
export const OneColumnRow = styled.div`
    display: grid;
    grid-auto-columns: minmax (auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`
export const HeadWrapper = styled.div`

`

export const Heading = styled.h1`
    text-align: center;
    border-bottom: 4px solid #78C4EB;
    font-size: 56px;
    line-height: 1.3;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#2C2C2C' : '#333333')}

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const OneColumnTextWrapper = styled.div`
    max-width: 420px;
    padding-top: 0;
`
export const OneColumnText = styled.p`
    max-width: 440px;
    margin-bottom: 50px;
    font-size: 20px;
    line-height: 24px;
    text-align: left;
    color: ${({darkText}) => (darkText ? '#333333' : '#2C2C2C')}
`
export const OneColumnImgWrap = styled.div`
    max-width: 555px;
    height: 100%
    margin-bottom: 50px;
`

export const OneColumnImg = styled.img`
    width: 90%;
    margin: 0 0 10px 0;
    padding-right: 0;
`