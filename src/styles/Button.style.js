import styled from "styled-components";

const BtnStyNav = `
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

const btnStyLink = `
    padding: 0.5rem;
    border-radius: 0.3rem;
    font: inherit;
    font-size: medium;
    color: var(--primary);
    border: none;
`

const ButtonStyle = props => {
    switch (props.sty) {
        case 'nav':
            return BtnStyNav;
        case 'search':
            return btnStySearch;
        case 'link':
            return btnStyLink;
        default:
            return BtnStyNav;
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
    &:hover {
        filter: brightness(0.9);
    }
    &:focus &:active {
        transform: scale(0.5);
        filter: brightness(0.7);
    }
`