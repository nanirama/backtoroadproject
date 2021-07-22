import { createGlobalStyle } from "styled-components"

export const MenuStyles = createGlobalStyle`
  
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
  text-decoration: none;
  margin-bottom: 10px;
  color: #d1d1d1;
  transition: color 0.2s;
  outline: none !important;
}
.bm-item:hover {
  color: white;
}
#outer {
  /* Give app full page to work with */
  width: 100%;
  height: 100vh;
}

#inner-wrap {
  width: 100%;
  overflow: hidden;
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
    position: absolute;
    width: 34px;
    height: 30px;
    right: 20px;
    top: 28px;
    
  }
  @media screen and (max-width: 345px) {
    display: block;
    width: 34px;
    height: 30px;
    right: 20px;
    top: 28px;
  }
}
.bm-burger-bars{
    display:block;
    height:5px !important;
    background-color:rgb(0, 15, 74);
    border-radius: 5px !important;
    transition: all 0.3s;
}
/* Color/shape of burger icon bars */
.bm-burger-bars:nth-child(1) {
    width:24px;
    margin-left: 10px;
}
.bm-burger-bars:nth-child(2) {
    width:34px;
    margin-left: 0px;
}
.bm-burger-bars:nth-child(3) {
    width:16px;
    margin-left: 18px;
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


.menu-item {
  background: #ffffff;
  padding: 1.5em 1.5em 0;
  font-size: 1rem;   
}
.bm-menu-wrap{ position:absolute !important; height:auto !important; width:100% !important;
    top:87px;
    
z-index:9999;
transition:all 1s}
.bm-menu {
    background-color:#08275c !important;
  // padding: 2.5em 1.5em 0;
  outline: none !important;
}
`