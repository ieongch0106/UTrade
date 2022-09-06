import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import UMass from "../images/UMass.png"

export const GlobalStyles = createGlobalStyle`
    ${variables};

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    a {
        color: var(--primary);
        text-decoration: none;
    }

    body, html {
        /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 17px;
    }

    body {
        overflow-x: hidden;
    }

    nav {
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        background-color: var(--primary);
    }
    
    nav ul {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 25px;
        list-style: none;
    }

    nav ul:first-child li {
        height: 25px;
    }

    nav ul div {
        display: flex;
        align-items: center;
        color: var(--white);
        padding: 15px 0px;
        margin-right: -15px;
        font-size: 18px;
        gap: 10px;
    }

    nav a {
        color: var(--white);
        font-weight: 500;
        text-decoration: none;
    }
    
    nav li:hover {
        border-bottom: 1px var(--white) solid;
    }

    /* format, styling, position */
    .align-items-center {
        align-items: center;
    }

    .align-middle {
        vertical-align: middle;
    }

    .pointer {
        cursor: pointer;
    }

    .d-flex {
        display: flex;
    }

    .d-inline {
        display: inline;
    }

    .d-inline-block {
        display: inline-block;
    }

    .d-none {
        display: none;
    }

    .d-block {
        display: block;
    }
    
    .flex-row {
        flex-direction: row;
    }

    .flex-column {
        flex-direction: column;
    }

    .float-start {
        float: left;
    }

    .float-end {
        float: right;
    }

    .justify-content-center {
        justify-content: center;
    }

    .justify-content-end {
        justify-content: end;
    }

    .justify-content-between {
        justify-content: space-between;
    }

    .position-static {
        position: static;
    }

    .position-relative {
        position: relative;
    }

    .position-absolute {
        position: absolute;
    }

    .position-fixed {
        position: fixed;
    }

    .position-sticky {
        position: sticky;
    }

    .top-0 {
        top: 0%;
    }

    .top-50 {
        top: 50%;
    }

    .top-100 {
        top: 100%;
    }

    .start-0 {
        left: 0%;
    }

    .start-50 {
        left: 50%;
    }

    .start-100 {
        left: 100%;
    }

    .end-0 {
        right: 0%;
    }

    .end-50 {
        right: 50%;
    }

    .end-100 {
        right: 100%;
    }

    .bottom-0 {
        bottom: 0%;
    }

    .bottom-50 {
        bottom: 50%;
    }

    .bottom-100 {
        bottom: 100%;
    }

    .gap-0 {
        gap: 0;
    }

    .gap-1 {
        gap: 0.25rem;
    }
    
    .gap-2 {
        gap: 0.5rem;
    }
    
    .gap-3 {
        gap: 1rem;
    }
    
    .gap-4 {
        gap: 1.5rem;
    }
    
    .text-start {
        text-align: start;
    }

    .text-center {
        text-align: center;
    }

    .text-right {
        text-align: end;
    }
    /* spacing */
    .m-0 {
        margin: 0 !important;
    }

    .m-1 {
        margin: 0.25rem !important;
    }

    .m-2 {
        margin: 0.5rem !important;
    }

    .m-3 {
        margin: 1rem !important;
    }

    .m-4 {
        margin: 1.5rem !important;
    }

    .m-5 {
        margin: 3rem !important;
    }

    .m-auto {
        margin: auto !important;
    }

    .mx-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-1 {
        margin-right: 0.25rem !important;
        margin-left: 0.25rem !important;
    }

    .mx-2 {
        margin-right: 0.5rem !important;
        margin-left: 0.5rem !important;
    }

    .mx-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important;
    }

    .mx-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important;
    }

    .mx-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important;
    }

    .mx-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    .my-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .my-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .my-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
    }

    .my-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }

    .my-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-0 {
        margin-top: 0 !important;
    }

    .mt-1 {
        margin-top: 0.25rem !important;
    }

    .mt-2 {
        margin-top: 0.5rem !important;
    }

    .mt-3 {
        margin-top: 1rem !important;
    }

    .mt-4 {
        margin-top: 1.5rem !important;
    }

    .mt-5 {
        margin-top: 3rem !important;
    }

    .mt-auto {
        margin-top: auto !important;
    }

    .me-0 {
        margin-right: 0 !important;
    }

    .me-1 {
        margin-right: 0.25rem !important;
    }

    .me-2 {
        margin-right: 0.5rem !important;
    }

    .me-3 {
        margin-right: 1rem !important;
    }

    .me-4 {
        margin-right: 1.5rem !important;
    }

    .me-5 {
        margin-right: 3rem !important;
    }

    .me-auto {
        margin-right: auto !important;
    }

    .mb-0 {
        margin-bottom: 0 !important;
    }

    .mb-1 {
        margin-bottom: 0.25rem !important;
    }

    .mb-2 {
        margin-bottom: 0.5rem !important;
    }

    .mb-3 {
        margin-bottom: 1rem !important;
    }

    .mb-4 {
        margin-bottom: 1.5rem !important;
    }

    .mb-5 {
        margin-bottom: 3rem !important;
    }

    .mb-auto {
        margin-bottom: auto !important;
    }

    .ms-0 {
        margin-left: 0 !important;
    }

    .ms-1 {
        margin-left: 0.25rem !important;
    }

    .ms-2 {
        margin-left: 0.5rem !important;
    }

    .ms-3 {
        margin-left: 1rem !important;
    }

    .ms-4 {
        margin-left: 1.5rem !important;
    }

    .ms-5 {
        margin-left: 3rem !important;
    }

    .ms-auto {
        margin-left: auto !important;
    }

    .p-0 {
        padding: 0 !important;
    }

    .p-1 {
        padding: 0.25rem !important;
    }

    .p-2 {
        padding: 0.5rem !important;
    }

    .p-3 {
        padding: 1rem !important;
    }

    .p-4 {
        padding: 1.5rem !important;
    }

    .p-5 {
        padding: 3rem !important;
    }

    .px-0 {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .px-1 {
        padding-right: 0.25rem !important;
        padding-left: 0.25rem !important;
    }

    .px-2 {
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
    }

    .px-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important;
    }

    .px-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important;
        }

    .px-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important;
    }

    .py-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .py-1 {
        padding-top: 0.25rem !important;
        padding-bottom: 0.25rem !important;
    }

    .py-2 {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
    }

    .py-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

    .py-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }

    .py-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }

    .pt-0 {
        padding-top: 0 !important;
    }

    .pt-1 {
        padding-top: 0.25rem !important;
    }

    .pt-2 {
        padding-top: 0.5rem !important;
    }

    .pt-3 {
        padding-top: 1rem !important;
    }

    .pt-4 {
        padding-top: 1.5rem !important;
    }

    .pt-5 {
        padding-top: 3rem !important;
    }

    .pe-0 {
        padding-right: 0 !important;
    }

    .pe-1 {
        padding-right: 0.25rem !important;
    }

    .pe-2 {
        padding-right: 0.5rem !important;
    }

    .pe-3 {
        padding-right: 1rem !important;
    }

    .pe-4 {
        padding-right: 1.5rem !important;
    }

    .pe-5 {
        padding-right: 3rem !important;
    }

    .pb-0 {
        padding-bottom: 0 !important;
    }

    .pb-1 {
        padding-bottom: 0.25rem !important;
    }

    .pb-2 {
        padding-bottom: 0.5rem !important;
    }

    .pb-3 {
        padding-bottom: 1rem !important;
    }

    .pb-4 {
        padding-bottom: 1.5rem !important;
    }

    .pb-5 {
        padding-bottom: 3rem !important;
    }

    .ps-0 {
        padding-left: 0 !important;
    }

    .ps-1 {
        padding-left: 0.25rem !important;
    }

    .ps-2 {
        padding-left: 0.5rem !important;
    }

    .ps-3 {
        padding-left: 1rem !important;
    }

    .ps-4 {
        padding-left: 1.5rem !important;
    }

    .ps-5 {
        padding-left: 3rem !important;
    }

    /* font */
    .fw-light {
        font-weight: 200 !important;
    }
    
    .fw-lighter {
        font-weight: lighter !important;
    }
    .fw-bold {
        font-weight: bold !important;
    }

    .fw-bolder {
        font-weight: bolder !important;
    }
    
    .display-1 {
        font-size: 5rem;
    }

    .display-2 {
        font-size: 4.5rem;
    }
    
    .display-3 {
        font-size: 4rem;
    }
    
    .display-4 {
        font-size: 3.5rem;
    }
    
    .display-5 {
        font-size: 3rem;
    }
    
    .display-6 {
        font-size: 2.5rem;
    }

    .display-7 {
        font-size: 2rem;
    }

    .display-8 {
        font-size: 1.5rem;
    }

    .display-9 {
        font-size: 1.25rem;
    }
    
    /* color, backgroundcolor, opacity */
    .bg-primary {
        background-color: var(--primary);
    }

    .bg-white {
        background-color: var(--white);
    }

    .text-primary {
        color: var(--primary);
    }

    .text-white {
        color: var(--white);
    }

    .text-light {
        color: var(--lightgrey);
    }

    .text-grey {
        color: var(--darkgrey)
    }

    .opacity-60 {
        opacity: 0.60 !important;
    }

    .opacity-75 {
        opacity: 0.75 !important;
    }
    
    /* navbar */    
    .dropdown-content-open {
        display: block;
        position: absolute;
        margin-top: 180px;
        margin-left: -60px;
        background-color: var(--white);
        min-width: 180px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    
    .dropdown-content-open li {
        display: flex;
        padding: 8px 20px;
        font-size: 16px;
        gap: 6px;
        align-items: center;
    }

    .dropdown-content-open li:hover {
        border: none;
        background-color: var(--lightgrey);
    }
    
    .dropdown-content-open li:focus, .dropdown-content-open li:active {
        background-color: var(--grey);
    }

    .dropdown-content-open a {
        color: inherit;
        text-decoration: none;
    }    

    .hidden {
        display: none;
    }

    /* register form error */
    .instructions {
        font-size: 0.75rem;
        border-radius: 0.5rem;
        background: #000;
        color: #fff;
        padding: 0.25rem;
        position: relative;
        bottom: -10px;
    }
  
    .instructions > svg {
        margin-right: 0.25rem;
    }
    
    .offscreen {
        position: absolute;
        left: -9999px;
    }
    
    .hide {
        display: none;
    }
    
    .valid {
        color: limegreen;
        margin-left: 0.25rem;
    }
    
    .invalid {
        color: red;
        margin-left: 0.25rem;
    }
    
    .errmsg {
        background-color: lightpink;
        color: firebrick;
        font-weight: bold;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
    }

    /* home */
    .home-search {
        background-image: url(${UMass});
        color: var(--white);
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }

    .home-search h2 {
        font-size: 28px;
    }

    .sell {
        font-size: medium;
        background-color: lightgrey;
        height: max-content;
        width: 50vw;
        padding: 60px 80px;
        text-align: left;
        margin: auto;
    }

    .sell textarea {
        width: 100%;
        height: 100px;
        border-radius: 0.2rem;
        resize: none;
        font: inherit;
        padding: 2px 8px;
    }

    .sell textarea:focus, .sell textarea:active {
        outline: none;
        border: 2px solid var(--primary);
    }
`