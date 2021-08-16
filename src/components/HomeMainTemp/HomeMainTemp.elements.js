import styled, { css } from 'styled-components'
import productImg from "../../assets/images/productimg.png";
import favImg from "../../assets/images/favbtn.png";

export const Main = styled.main`
  width: 100%;
  height: 100%;
`
export const Banner = styled.img`
  width: 100%;
`
export const BannerBox = styled.div`
  box-sizing: border-box;
`
export const AllProducts = styled.div`
  width: 100%;
`
export const AllItemsLine = styled.span`
  width: 50%;
  height: 3px;
  background-color: #fff;
  content: "";
  display: block;
  margin: 20px auto 0px;  
`
export const SortByBox = styled.div`
  width: 100%;
`
export const SortBy = styled.div`
  width: 15%;
  margin: 40px auto 60px;
  border: 3px solid #fff;
  padding: 7px 60px;
  font-size: 25px;
  font-weight: 700;
  color: #fff;
  position: relative;
  cursor: pointer;

  &:hover #SortByMenuBox {
    display: block;
  }
`
export const FilterTitle = styled.div`
  display: inline-block;
  margin-right: 30px;
`
export const SortByMenuBox = styled.div`
  width: 100%;
  position: absolute;
  background-color: #232323;
  left: 0;
  top: 107%;
  text-align: center;
  z-index: 2;
  display: none;
`
export const SortItems = styled.p`
  width: 100%;
  text-align: center;
  padding: 15px 0px;
  cursor: pointer;

  &:hover #SortByMenuBox {
    display: block;
  }
`
export const SortByLine = styled.span`
  background-color: #fff;
  width: 90%;
  height: 1px;
  margin: 0 auto;
  content: "";
  display: block;
`
export const ProductsBox = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const ProductCard = styled.div`
  width: 45%;
  height: 580px;
  display: inline-flex;
  background-color: #fff;
  color: #1F1C1D;
  margin-bottom: 60px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`
export const ProductPhoto = styled.img`
  width: 100%;
  height: 70%;
`
export const ProductTitle = styled.p`
  font-size: 35px;
  font-weight: 800;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    text-decoration: underline;
    transform: scale(1.05);
    transition: 0.3s all;
  }
`
export const ProductPrice = styled.p`
  font-size: 35px;
  font-weight: 500;
  display: block;
  width: 100%;
  text-align: center;
`
export const BuyButton = styled.button`
  width: 70%;
  height: 10%;
  border-radius: 5px;
  background-color: #1F1C1D;
  color: #fff;
  border: none;
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #DD9E22;
  }

  &:active {
    transform: scale(0.97);
  }
`
export const FavButton = styled.img`
  top: 15px;
  right: 30px;
  position: absolute;
  cursor: pointer;
  transition: 0.3s all; 
`
export const Card = () => {
  return (
    <ProductCard>
      <ProductPhoto src={productImg} alt="" />
      <ProductTitle>Bomba Forte</ProductTitle>
      <ProductPrice>R$30</ProductPrice>
      <BuyButton>COMPRAR</BuyButton>
      <FavButton src={favImg} alt="" />
    </ProductCard>
  )
}

