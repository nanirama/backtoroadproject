import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from '../assets/images/logo/logo-white.svg'

const Footer = () => {
  return (
    <Container>
      <FirstOuterRow>
        <ContentColumn style={{textAlign:'center'}}>
          <Icon src={Logo} alt="logo"/>
        </ContentColumn>
        <ContentColumn>
          <RowOne>
            <h4>Popular Brands</h4>
          </RowOne>
          <RowTwoCurrupted>
            <Col>
              <FooterLink to="/">Acura</FooterLink>
              <FooterLink to="/">Audi</FooterLink>
              <FooterLink to="/">Bently</FooterLink>
              <FooterLink to="/">BMW</FooterLink>
            </Col>
            <Col>
              <FooterLink to="/">Buick</FooterLink>
              <FooterLink to="/">Cadillac</FooterLink>
              <FooterLink to="/">Chevrolet</FooterLink>
              <FooterLink to="/">Chrysler</FooterLink>
            </Col>
            <Col>
              <FooterLink to="/">Dodge</FooterLink>
              <FooterLink to="/">Fiat</FooterLink>
              <FooterLink to="/">Ford</FooterLink>
              <FooterLink to="/">GMC</FooterLink>
            </Col>
            <Col>
              <FooterLink to="/">Honda</FooterLink>
              <FooterLink to="/">Hyundai</FooterLink>
              <FooterLink to="/">Infiniti</FooterLink>
              <FooterLink to="/">Jaguar</FooterLink>
            </Col>
          </RowTwoCurrupted>
        </ContentColumn>
        <ContentColumn>
          <RowOne>
            <h4>Quick Links</h4>
          </RowOne>
          <RowTwo>
            <Col>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/">About</FooterLink>
              <FooterLink to="/">Parts</FooterLink>
              <FooterLink to="/">Warrenty</FooterLink>
              <FooterLink to="/">Customer Service</FooterLink>
            </Col>
          </RowTwo>
        </ContentColumn>
        <ContentColumn>
          <RowOne>
            <h4>Contact</h4>
          </RowOne>
          <RowTwo>
            <Col>
              <FooterPara >Serving USA and Canada</FooterPara>
              <FooterPara >customerservice@backtoroadautoparts.com <br/>
              1.800.608.3868
              </FooterPara>
            </Col>
          </RowTwo>
        </ContentColumn>
      </FirstOuterRow>
      <SecondOuterRow>

      </SecondOuterRow>
      <ThirdOuterRow>
          <DivRights><p>All Rights Reserved 2021</p></DivRights>
          <DivPrivacyOptions>
            <Link >Privacy Policy</Link>
            <Link >Terms & Conditions</Link>
            <Link >Social Media links</Link>
          </DivPrivacyOptions>
      </ThirdOuterRow>
    </Container>

  )
}

export default Footer

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #252529;
  padding 2rem 0;
`;

const FirstOuterRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  margin: 5px 0;

  @media screen and (max-width: 515px) {
    grid-template-columns: 1fr;

  }
`

const SecondOuterRow = styled.div`
  min-height: 40px;
  width: 100%;
  margin: 5px 0;
`

const ThirdOuterRow = styled.div`
  min-height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 5px 0;
`

const ContentColumn = styled.div`
  height: 100%;
  margin: 5px 0;
`

const RowOne = styled.div`
  width: 100%;
  height: fit-content;

  h4 {
    color: #ffffff;
  }
`

const RowTwoCurrupted = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: fit-content;
`

const RowTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: fit-content;
`

const Col = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #ffffff;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`

const FooterPara = styled.p`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #ffffff;
`

const Icon = styled.img`
  font-size: 3rem;
  align-self: center;
  width: 140px;
  height: 60px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const DivRights = styled.div`
  color: #ffffff;
`

const DivPrivacyOptions = styled.div`
  color: #ffffff;

  a {
    padding: 0 20px;
  }
`