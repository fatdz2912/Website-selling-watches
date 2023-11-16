import styled, { css } from "styled-components";
import { Row, Col, Select, Checkbox, Rate, Card } from "antd";
import { color } from "themes/color";

export const ProductListWrapper = styled.div`
  margin: 10px auto 0;
  width: 100%;
  max-width: 1200px;
  background-color: ${color.primaryText};
  padding: 16px;
`;
// Filter
export const filterBrands = styled(Card)`
  position: sticky;
  top: 24vh;
  z-index: 1;
`;
export const BrandList = styled(Row)``;
export const BrandItem = styled(Col)``;
export const CheckBoxFilter = styled(Checkbox)`
  font-size: 1.1rem;
`;
// SelectArange
export const SelectArrangePrice = styled(Select)`
  width: 160px;
  background-color: #f5f5f5;
  display: block;
  height: 37px;

  ${({ active }) =>
    active &&
    css`
      &
        > :where(
          .css-dev-only-do-not-override-j19ufn
        ).ant-select-single.ant-select-show-arrow
        .ant-select-selection-item,
      :where(
          .css-dev-only-do-not-override-j19ufn
        ).ant-select-single.ant-select-show-arrow
        .ant-select-selection-placeholder {
        color: red;
      }
    `}
`;
export const SelectOptionArrangePrice = styled(Select.Option)``;
export const Arrange = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 16px;
`;
export const Relevancy = styled.span`
  background-color: #f5f5f5;
  padding: 8px;
  ${({ active }) =>
    active &&
    css`
      color: ${color.primaryText};
      background-color: rgb(238, 77, 45);
    `}
`;
export const Ctime = styled.span`
  background-color: #f5f5f5;
  padding: 8px;
  ${({ active }) =>
    active &&
    css`
      color: ${color.primaryText};
      background-color: rgb(238, 77, 45);
    `}
`;
// ProductList
export const ProductList = styled(Row)`
  display: flex !important;
  margin: 5vh 0 0 !important;
`;
export const ProductItem = styled(Col)`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;
export const Image = styled.img`
  filter: brightness(0.97);
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
  border-radius: 4px;
  box-shadow: -1px 0 1px #f0efef, 1px 0 1px #f0efef, 0 1px 1px #f0efef,
    -1px 0 1px #f0efef;

  &:hover {
    cursor: pointer;
  }
`;
export const Discount = styled.div`
  z-index: 1;
  top: 3%;
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
`;
export const FullBox = styled.div`
  font-size: 0.7rem;
  border-radius: 2px;
  z-index: 1;
  top: 0;
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
`;
export const Information = styled.div`
  color: ${color.primary};
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 183px;
  border-radius: 0.125rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.0625rem 0.125rem 0px;
  @media screen and (max-width: 1140px) and (min-width: 768px) {
    min-height: 200px;
  }
  @media screen and (max-width: 768px) {
    min-height: 120px;
  }
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
`;
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
`;
export const OldPrice = styled.div`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-decoration: ${(props) =>
    props.discount !== 0 ? "line-through" : "none"};
  color: ${(props) =>
    props.discount !== 0 ? "#a19a9a" : `${color.outstanding}`};
  /* @media screen and (min-width: 1200px) {
    width: 100%;
  } */
`;
export const PriceRate = styled(Rate)`
  width: 100%;
  color: ${color.outstanding};
  font-size: 1rem;
`;
export const CurrentPrice = styled.div`
  font-size: 1rem;
  display: ${(props) => (props.discount === 0 ? "none" : "flex")};
  color: ${color.outstanding};
  font-weight: 600;
`;
export const Unit = styled.span`
  font-size: 0.75rem;
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
  max-width: 100px;
`;
