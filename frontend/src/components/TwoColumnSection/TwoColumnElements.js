import styled from 'styled-components'

export const InfoContainer = styled.div`
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


export const InfoWrapper = styled.div `
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

export const InfoRow = styled.div`
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
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div `
    margin-bottom: 50px;
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapper = styled.div`
    max-width: 420px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine = styled.p`
    color: #333333;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
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
export const Subtitle = styled.p `
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    color: ${({darkText}) => (darkText ? '#333333' : '#2C2C2C')}
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%
`

export const Img = styled.img`
    width: 80%;
    margin: 0 0 10px 0;
    padding-right: 0;
`