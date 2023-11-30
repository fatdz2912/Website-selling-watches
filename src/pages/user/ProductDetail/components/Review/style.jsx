import styled from 'styled-components'
import { Row, Col } from 'antd'
import { color } from 'themes/color'
export const ReviewWrapper = styled.div`
  width: 100%;
  color: ${color.primary};
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
`
export const ReviewHead = styled.div`
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
export const Stars = styled.div`
  display: flex;
  align-items: center;
`
export const RatingOverviewScore = styled.div`
  display: flex;
  align-items: center;
  color: ${color.outstanding};
`
export const RatingOverview = styled.span`
  font-size: 3rem;
  margin-right: 4px;
`
export const RatingPeak = styled.span`
  font-size: 1.3rem;
`
export const SearchOfOverview = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`
export const QuantityComment = styled.div``
export const ImageAndVideo = styled.div``

export const ReviewFormWrapper = styled.div`
  padding: 12px;
  border-radius: 4px;
  background-color: #0940741a;
  color: ${color.primary};
`

export const ReviewItemWrapper = styled.div`
  margin-top: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 8px;
`
export const Title = styled.label`
  font-size: 1rem;
`
export const Text = styled.label`
  font-size: 0.8rem;
`
export const Comment = styled.label`
  display: inline-block;
  margin-top: 4px;
`
export const Avatar = styled.label`
  display: block;
  width: 60px;
  height: 60px;
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
  & > img {
    border-radius: 50%;
    height: 100%;
  }
`
