import styled, { css } from 'styled-components'
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`
export const HeaderLogoBox = styled.div`
  padding-left: 90px;
`
export const HeaderLinksBox = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 90px;
`
export const HeaderLogo = styled.img`
  width: 70%; 
`
export const MenuLink = styled(Link)`
  padding: 0px 15px;
  text-decoration: none;
  font-weight: 800;
  color: #fff;
  transition: all 0.1s ease;

  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  } 
`

export const ShoppingCartBtn = styled.img`
  cursor: pointer;
  width: 40px;
  padding-left: 15px;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.1);
  } 
`