import styled from "styled-components";

const btnStyNav = `
    padding: 0.5em 1.25em;
    font-size: 17px;
    color: var(--black);
    border: 1px solid var(--black);
    border-radius: 0.25em;
`

const btnStySearch = `
    height: 45px;
    width: 50px;
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    border: none;
`

const btnStyModal = `
    font-size: 20px;
    padding: 8px;
    min-height: 40px; 
    min-width: 330px;
    border-radius: 0.25rem;
`

const btnStyLink = `
    padding: 0.3rem;
    font: inherit;
    border: none;
`

const ButtonStyle = props => {
    switch (props.sty) {
        case 'nav':
            return btnStyNav;
        case 'search':
            return btnStySearch;
        case 'modal':
            return btnStyModal;
        case 'link':
            return btnStyLink;
        default:
            return btnStyNav;
    }
}

export const Button = styled.button`
    ${ButtonStyle};
    ${props => props.bg ?
        `background-color: var(--${props.bg});` :
        `background-color: var(--primary);`
    }
    color: var(--${props => props.color});
    cursor: pointer;
    transition: all 0.05s ease-in;
    &:hover {
        filter: brightness(0.85);
    }
    &:focus, &:active {
        transform: scale(0.98);
        filter: brightness(0.7);
    }
`