import styled, { css } from 'styled-components'
import { Row, Col, Select, Checkbox, Rate, Card } from 'antd'
import { color } from 'themes/color'

export const ProductListWrapper = styled.div`
  margin: 10px auto 0;
  width: 100%;
  max-width: 1200px;
  background-color: ${color.primaryText};
  padding: 16px;
`
// Filter
export const filterBrands = styled(Card)`
  position: sticky;
  top: 175px;
  z-index: 100;
  @media screen and (max-width: 1200px) {
    top: 210px;
  }
`
export const BrandList = styled(Row)``
export const BrandItem = styled(Col)``
export const CheckBoxFilter = styled(Checkbox)`
  font-size: 1.1rem;
`

export const SelectOptionArrangePrice = styled(Select.Option)``
export const Arrange = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 16px;
`
export const Relevancy = styled.span`
  background-color: #f5f5f5;
  padding: 8px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      color: ${color.primaryText};
      background-color: rgb(238, 77, 45);
    `}

  @media screen and (max-width:550px) {
    min-height: 62.8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
export const Ctime = styled.span`
  background-color: #f5f5f5;
  padding: 8px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      color: ${color.primaryText};
      background-color: rgb(238, 77, 45);
    `}
  @media screen and (max-width:550px) {
    min-height: 62.8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
export const PriceDESC = styled.span`
  background-color: #f5f5f5;
  padding: 8px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      color: ${color.primaryText};
      background-color: rgb(238, 77, 45);
    `}
  @media screen and (max-width:550px) {
    min-height: 62.8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
export const PriceASC = styled.span`
  background-color: #f5f5f5;
  cursor: pointer;
  padding: 8px;
  ${({ active }) =>
    active &&
    css`
      color: ${color.primaryText};
      background-color: rgb(238, 77, 45);
    `}
  @media screen and (max-width:550px) {
    min-height: 62.8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-align: center;
  }
`
// ProductList
export const ProductList = styled(Row)`
  display: flex !important;
  margin: 5vh 0 0 !important;
`
export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #ececec;
`
export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`
export const Image = styled.img`
  filter: brightness(0.97);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`
export const ImageHover = styled.img`
  filter: brightness(0.97);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`
export const Discount = styled.div`
  z-index: 100;
  top: 2%;
  left: 4%;
  position: absolute;
  width: 45px;
  height: 45px;
  background-color: ${color.outstanding};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  & > p {
    color: ${color.primaryText};
    font-weight: 600;
  }
`
export const FullBox = styled.div`
  font-size: 0.7rem;
  border-radius: 3px;
  z-index: 100;
  top: -4px;
  right: 4px;
  position: absolute;
  width: 130px;
  padding: 0 4px;
  background-color: #049f04;
  display: flex;
  align-items: center;
  justify-content: center;
  & > p {
    color: ${color.primaryText};
    font-weight: 600;
  }
`
export const Information = styled.div`
  color: ${color.primary};
  padding: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #ececec;
  @media screen and (max-width: 1140px) and (min-width: 768px) {
  }
  @media screen and (max-width: 768px) {
    min-height: 120px;
  }
`
export const Name = styled.div`
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${color.primary};

  & > span {
    height: 36px;
  }
`
export const Price = styled.div`
  margin-top: 1em;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5em;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    gap: 1em;
  }
`
export const OldPrice = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-decoration: ${(props) => (props.discount !== 0 ? 'line-through' : 'none')};
  color: ${(props) => (props.discount !== 0 ? '#a19a9a' : `${color.outstanding}`)};
  /* @media screen and (min-width: 1200px) {
    width: 100%;
  } */
`
export const PriceRate = styled(Rate)`
  width: 100%;
  color: ${color.outstanding};
  font-size: 1rem;
`
export const CurrentPrice = styled.div`
  font-size: 1.1rem;
  display: ${(props) => (props.discount === 0 ? 'none' : 'flex')};
  color: ${color.outstanding};
  font-weight: 600;
`
export const Unit = styled.span`
  font-size: 0.75rem;
`
export const Brands = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.outstanding};
  font-weight: 600;
  color: ${color.primaryText};
  font-size: 1rem;
  display: flex;
  width: fit-content;
  padding: 2px 4px;
  margin-bottom: 4px;
`
