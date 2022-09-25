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

    a:hover {
        color: inherit;
    }

    body, html {
        /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 17px;
    }

    body {
        overflow-x: hidden;
    }

    input {
        border: none !important;
    }

    canvas {
        border: 1px solid var(--black);
    }

    nav {
        display: flex;
        justify-content: space-between;
        height: 55px;
        background-color: var(--primary);
        padding: 0 2rem;
    }
    
    nav ul {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 25px;
        list-style: none;
    }

    nav ul:first-child li {
        height: 25px;
    }

    nav ul span {
        color: var(--white);
        height: 25px;
    }
    
    nav ul div {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: var(--white);
        font-size: 18px;
        gap: 10px;
        margin-right: -1rem;
    }

    nav a {
        color: var(--white) !important;
        font-weight: 500;
        text-decoration: none;
    }
    
    nav li:hover {
        border-bottom: 1px var(--white) solid;
        cursor: pointer;
    }
    
    .pointer {
        cursor: pointer;
    }

    .text-primary {
        color: var(--primary) !important;
    }

    .text-primary:hover {
        color: rgba(128, 0, 0, 0.5) !important;
    }

    .text-primary:focus, .text-primary:active {
        color: rgba(128, 0, 0, 0.7) !important;
    }

    .dropdown-content-open {
        padding: 0;
        display: block;
        position: absolute;
        margin-top: 180px;
        right: 0;
        background-color: var(--white);
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
        background-color: rgb(234, 234, 234);
    }
    
    .dropdown-content-open li:focus, .dropdown-content-open li:active {
        background-color: rgb(192, 192, 192);
    }
    
    .dropdown-content-open a {
        color: inherit;
        text-decoration: none;
    }    

    /* navbar */    

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

    /* buy */
    .container {
        width: 100%;
        padding: 20px;
        margin-right: auto;
        margin-left: auto;
    }

    .search-bar {
        position: fixed;
        display: flex;
        justify-content: center;
        width: 100%;
        top: -2px;
        background-color: transparent;
        padding: 0.5rem 0 0.5rem;
        transition: transform 1.5s ease-in-out;
        transition: background-color 0.75s ease-in-out;
        pointer-events: none;
    }

    .search-bar input, button {
        pointer-events: all;
    }

    .search-bar button {
        padding: 0 0.5rem;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 16px;
        overflow-y: scroll;
        max-height: 88vh;
        width: 260px;
        float: left;
        padding-right: 15px;
    }

    .sidebar ul {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        list-style: none;
    }
    
    .sidebar h3 {
        padding: 8px 0;
    }
    
    .sidebar ul:first-child {
        gap: 12px;
        padding-bottom: 35px;
        border-bottom: 1px solid var(--softgrey);
    }
    
    .sidebar ul:nth-last-child(-n+2) li {
        margin-left: -12px;
        margin-bottom: -8px;
    }

    .label {
        font: inherit !important;
    }
    
    .label:hover {
        text-decoration: underline;
    }

    .section {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 48px;
        font-size: 16px;
        padding-left: 20px;
    }
    
    .section div {
        display: flex;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;
    }

    .section img {
        width: 200px;
        height: 200px;
        border: 1px solid black;
        border-radius: 0.3rem;
    }
    
    .post-title:hover {
        filter: brightness(0.8);
        text-decoration: underline;
    }

    .section div div:nth-child(4) {
        color: rgba(0, 0, 0, 0.8);
    }
    
    /* post */
    .post {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
    }

    .post-info {
        width: 70%;
    }
    
    .post-image {
        height: 500px;
        border: 1px solid black;
    }

    .seller-info {
        width: 30%;
        height: max-content;
        padding: 1rem;
        border: 1px solid black;
    }

    /* sell */
    .sell {
        font-size: medium;
        background-color: lightgrey;
        height: max-content;
        width: 55vw;
        padding: 60px 80px;
        text-align: left;
        margin: auto;
    }

    .sell textarea {
        width: 100%;
        height: 100px;
        border-radius: 0.2rem;
        border: none;
        resize: none;
        font: inherit;
        padding: 2px 8px;
    }

    .sell textarea:focus, .sell textarea:active {
        outline: none;
        border: 2px solid var(--primary);
    }

    .location-thingy{
        display: flex;
        flex-direction: row;
    }

    .city-drop{
        padding-left: 5px
    }

    .media-list {
        text-align: center;
    }

    .media-upload {
        font-size: 25px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--grey);
        border: 3px dashed var(--lightgrey);
        padding: 4em 10em;
    }

    /* animations */
    .slide-up {
        animation: SlideUp 0.5s linear forwards;
    }

    .slide-down {
        animation: SlideDown 0.5s linear forwards;
    }

    @keyframes SlideDown {
        from {
            transform: translateY(-65px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes SlideUp {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-65px);
        }
    }

`