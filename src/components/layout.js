import React from "react"
import SideBar from "./SwipeSideMenu"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import styled from "styled-components"
import { useSwipeable } from "react-swipeable";
import 'bootstrap/dist/css/bootstrap.min.css';

import { StateProvider } from '../StateProvider';
import reducer, { initialState } from '../reducer';
import FloatingButtonCall from '../components/FloatingButtonCall'
import FloatingButtonMessage from '../components/FloatingButtonMessage'

const Layout = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);

  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setOpen(true)
  });

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <div id="outer">
      <GlobalStyle />
      <SwipeLayer {...handlers} />
      <SideBar
        isOpen={isOpen}
        onStateChange={s => setOpen(s.isOpen)}
        pageWrapId={"inner-wrap"}
        outerContainerId={"outer"}
      />

      <div id="inner-wrap">
        <StateProvider initialState={initialState} reducer={reducer}>
          <Header toggle={toggle} />
          <main>{children}</main>
          <FloatingButtonMessage />
          <FloatingButtonCall />
        </StateProvider>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

const SwipeLayer = styled.div`  
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    float: left;
    position: fixed;
    width: 10px;
    height: 100%;
    z-index: 900;
    top: 80px;
  }
`