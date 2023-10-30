import styled from "styled-components";
import { Row, Col, Select, Checkbox } from "antd";
import { color } from "themes/color";

export const ProductListWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;
// Filter
export const BrandList = styled(Row)``;
export const BrandItem = styled(Col)``;
export const CheckBoxFilter = styled(Checkbox)`
  font-size: 1.1rem;
`;
// SelectArange
export const SelectArrange = styled(Select)`
  width: 130px;
  font-size: 1.2rem;
`;
// ProductList
export const ProductList = styled(Row)`
  display: flex !important;
  margin: 5vh 0 0 !important;
`;
export const ProductItem = styled(Col)`
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
  box-shadow: -1px 0 1px #f0efef, 1px 0 1px #f0efef, 0 1px 1px #f0efef,
    -1px 0 1px #f0efef;

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
  min-height: 150px;
  box-shadow: -1px 0 1px #f0efef, 1px 0 1px #f0efef, 0 1px 1px #f0efef;

  @media screen and (max-width: 767px) {
    min-height: 210px;
  }
  @media screen and (min-width: 768px) {
    min-height: 150px;
  }
`;
export const Name = styled.div`
  font-size: 1rem;
  width: 85%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const Discount = styled.div`
  font-size: 1rem;
  text-align: left;
  color: #f44242;
  display: ${(props) => (props.discount === "" ? "none" : "block")};
`;
export const Price = styled.div`
  margin-top: 1em;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;
export const OldPrice = styled.div`
  font-size: 1rem;
  color: ${color.primary};
`;
export const Brands = styled.div`
  display: inline;
  margin-top: 1em;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  display: flex;
`;
