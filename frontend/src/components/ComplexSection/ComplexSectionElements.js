import styled from 'styled-components'

export const ComplexContainer = styled.div`
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
export const Heading = styled.h1`
    margin-bottom: 24px;
    text-align: center;
    font-size: 56px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#2C2C2C' : '#333333')}

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ComplexWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    height: 860px;
    max-width: 1100px;
    margin-right: auto;
    padding: 0 24px;
    justify-content: center;
    text-align: center;
`
export const ComplexRow = styled.div`
    display: grid;
    grid-auto-columns: minmax (auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`
export const Column1 = styled.div `
    margin-bottom: 50px;
    width: 70%;
    grid-area: col1;
    justify-content: left;
`
export const Column2 = styled.div `
    margin-bottom: 50px;
    padding: 0 15px;
    grid-area: col2;
`

export const HeadingRow = styled.div`
    display: grid;
    align-items: center;

    @media screen and (max-width: 768px){
    }
`
export const HeadWrapper = styled.div`
    display: grid;
`
export const ComplexImgWrap = styled.div`
    max-width: 555px;
    height: 100%
`
export const ColumnOneImg = styled.img`
    width: 70%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
export const ColumnTwoImg = styled.img`
    width: 70%;
    margin: 0 0 0 0;
    padding-right: 0;
`
export const ComplexTextWrap = styled.div`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    color: ${({darkText}) => (darkText ? '#333333' : '#2C2C2C')}
`
export const ComplexBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
