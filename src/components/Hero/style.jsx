import { color } from "themes/color";
import styled from "styled-components";
export const Hero = styled.div`
  width: 100%;
  background-color: #ccc;
  height: 6vh;
  max-width: 1200px;
  margin: 1vh auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 0.5em;
`;
export const ImageHero = styled.img`
  height: 100%;
  width: 110px;
  max-width: 25%;
  object-fit: cover;
`;
export const TextHero = styled.span`
  color: ${color.outstanding};
  font-weight: 600;
  border-right: 2px solid ${color.primary};
  padding-right: 10px;
`;
export const HeroDiscount = styled.span`
  color: ${color.primary};
`;
export const ShopNow = styled.span`
  margin-left: 10px;
  color: ${color.outstanding};
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;
