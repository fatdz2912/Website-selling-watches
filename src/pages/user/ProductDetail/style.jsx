import styled from 'styled-components'
import { Col } from 'antd'
import { color } from 'themes/color'
export const ProductDetailWrapper = styled.div`
  max-width: 1200px;
  padding: 24px;
  background-color: ${color.primaryText};
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`
export const TitleDESC = styled.div`
  position: relative;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${color.primary};

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: ${color.primary};
  }
`
export const Description = styled(Col)`
  text-align: justify;
`
export const DESC = styled.div`
  font-size: 1rem;
  color: #4f4c4c;
`
export const Guaranteed = styled.div`
  padding: 16px;
  margin-top: 1.5rem;
  background-color: #f5f5f5;
  font-size: 1rem;
`
export const ImageGuranteedWrapper = styled(Col)`
  margin-top: 1.5em;
`
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`
