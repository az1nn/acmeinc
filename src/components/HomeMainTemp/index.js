import { Main, Banner, BannerBox, AllProducts, AllItemsLine, SortByBox, SortBy, FilterTitle, SortByMenuBox, SortItems, SortByLine, ProductsBox, ProductCard, ProductPhoto, ProductTitle, ProductPrice, BuyButton, FavButton, Card } from "./HomeMainTemp.elements";
import BannerImg from "../../assets/images/banner.png"
import downArrow from "../../assets/images/downarrow.png"
import productImg from "../../assets/images/productimg.png";
import favImg from "../../assets/images/favbtn.png";

const MainTemp = () => {
  return (
    <Main>
      <BannerBox>
        <Banner src={BannerImg} alt="" />
      </BannerBox>
      <AllProducts>
        <h1>TODOS OS PRODUTOS</h1>
        <AllItemsLine />
      </AllProducts>
      <SortByBox>
        <SortBy>
          <FilterTitle>Filtrar por:</FilterTitle>
          <img src={downArrow} alt="" />
          <SortByMenuBox id="SortByMenuBox">
            <div>
              <SortItems>Todos os produtos</SortItems>
            </div>
            <SortByLine></SortByLine>
            <div>
              <SortItems>Favoritos</SortItems>
            </div>
          </SortByMenuBox>
        </SortBy> 
      </SortByBox>
      <ProductsBox>
        <Card />
        <Card />
        <Card />
        <Card />
      </ProductsBox> 
    </Main>
  )
}

export default MainTemp