import styled from 'styled-components'
import { Row, Col } from 'antd'
import { color } from 'themes/color'
export const DetailWrapper = styled(Row)`
  width: 100%;
`
export const TitleMoreDetail = styled.div`
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
export const MoreDetailBody = styled(Col)``
export const MoreDetailHead = styled.span`
  font-size: 1.2rem;
  color: ${color.primary};
  font-weight: 500;
`
export const MoreDetailContent = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;
`
export const MoreDetailLabel = styled.span`
  margin-right: 10px;
  font-weight: 500;
  font-size: 1rem;
  min-width: 100px;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    min-width: 60px;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.7rem;
    min-width: 60px;
  }
`
export const MoreDetailValue = styled.span`
  font-size: 1rem;
  color: ${color.primary};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.6rem;
  }
`
