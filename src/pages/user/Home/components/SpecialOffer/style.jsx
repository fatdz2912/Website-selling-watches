import styled from 'styled-components'
import { Row, Rate } from 'antd'
import { color } from 'themes/color'
// Discount
export const DiscountListWrapper = styled.div`
  border-radius: 8px;
  width: 100%;
  margin-top: 160px;
  padding: 22px 18px;
  background-color: ${color.primaryText};
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
  box-shadow: 0 1px #ccc;
  @media screen and (min-width: 819px) and (max-width: 1024px) {
    margin-top: 140px;
  }
`
export const HeadingDiscountList = styled.div`
  width: 100%;
  text-align: center;
  color: ${color.outstanding};
`
export const DiscountList = styled(Row)`
  display: flex !important;
  margin-top: 5vh;
`
export const ProductDiscountItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
`
export const ImageWrapper = styled.div`
  width: 100%;
`
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
  border-radius: 4px;
  &:hover {
    filter: grayscale(100%);
    cursor: pointer;
    transition: all 0.3s;
    opacity: 0.7;
  }
`
export const Information = styled.div`
  color: ${color.primary};
  padding: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #ececec;
  background-color: white;
  @media screen and (max-width: 1140px) {
    min-height: 200px;
  }
  @media screen and (max-width: 768px) and (min-width: 450px) {
    min-height: 120px;
  }
  @media screen and (max-width: 375px) {
    min-height: 150px;
  }
`
export const Unit = styled.span`
  font-size: 0.75rem;
`
export const PriceRate = styled(Rate)`
  width: 100%;
  color: #dd3333;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`
export const OldPrice = styled.div`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-decoration: ${(props) => (props.discount !== 0 ? 'line-through' : 'none')};
  color: ${(props) => (props.discount !== 0 ? '#a19a9a' : `#dd3333`)};
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`
export const CurrentPrice = styled.div`
  font-size: 1rem;
  display: ${(props) => (props.discount === 0 ? 'none' : 'flex')};
  color: #dd3333;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
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
  padding: 2px 4px;
  margin-bottom: 4px;
  width: fit-content;
`
export const Name = styled.div`
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${color.primary};
  height: 84px;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`
export const FullBox = styled.div`
  font-size: 0.7rem;
  border-radius: 2px;
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
  @media screen and (max-width: 769px) {
    width: 109px;
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
  gap: 1em;
`
export const Discount = styled.div`
  z-index: 100;
  top: 3%;
  left: 7%;
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
  @media screen and (max-width: 769px) {
    width: 35px;
    height: 35px;
  }
`
