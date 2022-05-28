import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    /* :root {
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3, 127, 255, .3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
        --span-opacity: 100%;
        --line-opacity: .4;
    } */

    .light-theme {
        --primary-color: #0A81FF;
        --primary-color-light: #057FFF;
        --secondary-color: #ff7675;
        --background-dark-color: #FFF;
        --background-dark-grey: #D9D9D9;
        --opposite-dark-color: #F3F3F3;
        --opposite-text-color: #FFF;
        --border-color: #A0A0A0;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #151515;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #F3F3F3;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
        --span-opacity: 15%;
        --line-opacity: 1;
    }

    .dark-theme {
        --primary-color: #0A81FF;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        /* --background-dark-color: #10121A; */
        --background-dark-color: #0C0C0C; /* Black */
        --background-dark-grey: #141414;
        --opposite-dark-color: #272727;
        --opposite-text-color: #151515;
        --border-color: #303030;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3, 127, 255, .3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #0F0F0F;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
        --span-opacity: 100%;
        --line-opacity: .4;
    }

    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }

    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
        
    }

    body::-webkit-scrollbar {
        width: 9px;
        background-color: #383838;
    }

    body::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #6b6b6b;
    }

    body::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #383838;
    }

    a {
        font-family: inherit;
        color: inherit;
        font-size: 1rem;
    }

    h1 {
        font-size: 4rem;
        color: var(--white-color);
        span {
            font-size: 4rem;
            @media screen and (max-width: 502px) {
                font-size: 3rem;
            }
        }
        
        @media screen and (max-width: 502px) {
            font-size: 3rem;
        }
    }

    span {
        color: var(--primary-color);
    }

    h6 {
        color: var(--white-color);
        font-size: 1.2rem;
        padding-bottom: .6rem;
    }

    // Utilities
    .u-margin-bottom {
        margin-bottom: 4rem;
    }

    // Floating Toggler
    .light-dark-mode {
    position: fixed;
    right: 0;
    bottom: 78%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px){
        right: 0;
        bottom: 5%;
        width: 5.5rem;
        height: 2.2rem;
    }
    svg {
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }
  //Nav Toggler
  .ham-burger-menu {
    position: absolute;
    right: 5%;
    top: 3%;
    display: none;
    z-index: 15;
    svg {
        font-size: 3rem;
    }
  }

  .nav-toggle {
    transform: translateX(0);
    z-index: 20;
  }
  
  @media screen and (max-width: 1200px) {
    .ham-burger-menu {
        display: block;
    }
  }

  button {

    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    border: none;
    &::after {
        content: "";
        position: absolute;
        width: 0%;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: 0.7;
    }
    &:hover::after {
        content: "";
        position: absolute;
        width: 100%;
        height: .2rem;
        background-color: var(--white-color);
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
    }
  }
  


`;

export default GlobalStyle;