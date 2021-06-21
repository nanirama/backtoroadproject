import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    /* font-family: 'Roboto'; */
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  // box-sizing: border-box;

  /* width */
  ::-webkit-scrollbar {
       display: none;
      scrollbar-width: none;
      -ms-overflow-style: none;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: lightgrey;
      border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: grey;
  }

  
/* Individual item */
.bm-item {
  display: inline-block;

  /* Our sidebar item styling */
  text-decoration: none;
  margin-bottom: 10px;
  color: #d1d1d1;
  transition: color 0.2s;
  outline: none !important;
}

/* Change color on hover */
.bm-item:hover {
  color: white;
}

/* The rest copied directly from react-burger-menu docs */

/* Position and sizing of burger button */

#outer {
  /* Give app full page to work with */
  width: 100%;
  height: 100vh;
}

#inner-wrap {
  /* Prevent sidebar from showing a scrollbar on page */
  width: 100%;
  overflow: hidden;
  // margin-top: 80px;
}
.bm-burger-button {
  /* position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px; */
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: fixed;
    width: 30px;
    height: 25px;
    left: 20px;
    top: 18px;
  }
  @media screen and (max-width: 345px) {
    display: block;
    width: 28px;
    height: 22px;
    left: 20px;
    top: 18px;
  }
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  display: none;
  height: 0;
  width: 0;
} 

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/* General sidebar styles */
.bm-menu {
  background: #ffffff;
  // padding: 2.5em 1.5em 0;
  outline: none !important;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  outline: none !important;
}

.bm-item-list::focus {
  color: #b8b7ad;
  outline: none !important;
}

/* Styling of overlay
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
 */

.menu-item {
  background: #ffffff;
  padding: 1.5em 1.5em 0;
  font-size: 1rem;   
}

/* * {
  border: 1px solid red;
} */

.carousel-indicators {
  // right: 70%;
  margin-right: 35%;
  margin-left: 35%;
}

.SvgColorClass {
  filter: invert(64%) sepia(67%) saturate(4497%) hue-rotate(184deg) brightness(88%) contrast(84%);
  //filter: invert(14%) sepia(74%) saturate(5203%) hue-rotate(229deg) brightness(107%) contrast(119%);
  //filter: invert(17%) sepia(92%) saturate(3418%) hue-rotate(238deg) brightness(100%) contrast(113%);
}

.SvgColorClassChooseBtr {
  filter: invert(22%) sepia(14%) saturate(6931%) hue-rotate(197deg) brightness(90%) contrast(90%);
}

.SvgColorClassFb {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(197deg) brightness(102%) contrast(103%);
}

.CarouselBox {
 height: 100%;
}

.carousel-inner{
  height: 100%;
}

.carousel-item:active {
  height: 100%;
}
`