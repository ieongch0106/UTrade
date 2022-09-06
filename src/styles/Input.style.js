import styled from "styled-components";

const inputStySearch = `
    height: 45px;
    width: 45vw;
    font-size: 18px;
    padding-left: 18px;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
    border: none;

    &:focus, &:active {
        outline: none;
    }
`

const inputStySell = `

`

const inputStyModal = `
    margin: 5px;
    font-size: 18px !important;
    padding-left: 10px;
    min-height: 40px; 
    min-width: 330px;
    border-radius: 0.2rem !important;
`

const InputStyle = props => {
    switch (props.sty) {
        case 'sell':
            return inputStySell;
        case 'search':
            return inputStySearch;
        case 'modal':
            return inputStyModal;
        default:
            return inputStyModal;
    }
}

export const Input = styled.input`
    ${InputStyle};
    ${props => props.bg ?
        `background-color: var(--${props.bg});` :
        `background-color: var(--white);`
    }
    color: var(--${props => props.color});
    font-family: 'Segoe UI';
`