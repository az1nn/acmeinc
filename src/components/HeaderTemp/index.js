import logo from '../../assets/images/ACME.png'
import linksBar from '../../assets/images/Line.png'
import cartIcon from '../../assets/images/shoppingcart.png'
import { Header, HeaderLogoBox, HeaderLinksBox, HeaderLogo, MenuLink, ShoppingCartBtn } from './HeaderTemp.elements'
import { Link } from "react-router-dom";

const HeaderTemp = () => {
  return (
    <Header>
      <HeaderLogoBox>
        <HeaderLogo src={logo} alt=""/>
      </HeaderLogoBox>
      <HeaderLinksBox>
        <MenuLink to="./">PRODUTOS</MenuLink>
        <img src={linksBar} alt="" class="links" />
        <Link to="./cart">
          <ShoppingCartBtn src={cartIcon} />
        </Link>
      </HeaderLinksBox>
    </Header>
  )
}

export default HeaderTemp