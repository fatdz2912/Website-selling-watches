import styled from "styled-components";
import { Row, Col, Rate } from "antd";
import { color } from "themes/color";
export const SearchTopWrapper = styled.div`
  border-radius: 8px;
  width: 100%;
  margin-top: 2vh;
  padding: 22px 18px;
  background-color: ${color.primaryText};
  @media screen and (max-width: 768px) {
    margin-top: 2vh;
  }
`;
export const HeadingSearchTop = styled.div`
  width: 100%;
  text-align: center;
  color: ${color.outstanding};
`;
export const SearchTopList = styled(Row)`
  display: flex !important;
  margin: 5vh 0 0 !important;
`;
export const SearchTopsItem = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageWrapper = styled.div`
  width: 100%;
`;
export const Image = styled.img`
  filter: brightness(0.97);
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;
export const Information = styled.div`
  color: ${color.primary};
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: -1px 0 1px #efeff0, 1px 0 1px #f0efef, 0 -1px 1px #f0efef;
  border-left: 1px solid #e7e4e4;
  border-right: 1px solid #e7e4e4;
  border-bottom: 1px solid #e7e4e4;
  @media screen and (max-width: 1140px) and (min-width: 768px) {
    min-height: 200px;
  }
  @media screen and (max-width: 768px) and (min-width: 450px) {
    min-height: 120px;
  }
  @media screen and (max-width: 375px) {
    min-height: 150px;
  }
`;
export const Unit = styled.span`
  font-size: 0.75rem;
`;
export const PriceRate = styled(Rate)`
  width: 100%;
  color: #dd3333;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const OldPrice = styled.div`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-decoration: ${(props) =>
    props.discount !== 0 ? "line-through" : "none"};
  color: ${(props) => (props.discount !== 0 ? "#a19a9a" : `#dd3333`)};
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const CurrentPrice = styled.div`
  font-size: 1rem;
  display: ${(props) => (props.discount === 0 ? "none" : "flex")};
  color: #dd3333;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
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
  max-width: 90px;
`;
export const Name = styled.div`
  text-align: center;
  font-size: 1rem;
  width: 85%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${color.primary};
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const FullBox = styled.div`
  font-size: 0.7rem;
  border-radius: 2px;
  z-index: 100;
  top: 0%;
  right: 0;
  position: absolute;
  width: 123px;
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
`;
export const Price = styled.div`
  margin-top: 1em;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1em;
`;
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
  @media screen and (max-width: 769px) {
    width: 35px;
    height: 35px;
  }
  & > p {
    color: ${color.primaryText};
    font-weight: 600;
  }
`;
