import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: #78C4EB;
}
    white-space: nowrap;
    padding: ${({big}) => (big ? '20px 60px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#333333' : '#FFFFFF' )};
    font-size: 24px;
    display: ${({exact}) => (exact ? 'flex' : 'none')};
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #8ED9FF;
    }
`