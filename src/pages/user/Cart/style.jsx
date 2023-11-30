import { Button, Table } from 'antd'
import styled from 'styled-components'
import { color } from 'themes/color'

export const CartListWrapper = styled.div`
  max-width: 1200px;
  background-color: ${color.primaryText};
`
export const CartList = styled.div`
  margin: 0 auto;
  padding: 24px;
`
export const HeadingCart = styled.div`
  width: 100%;
  margin-bottom: 16px;
  text-align: center;
  background-color: #dbd8d8;
  padding: 8px;
  margin: 8px 8px 0;
  border-radius: 8px;
  width: calc(100% - 16px);

  > h1 {
    color: ${color.primary};
  }
`
export const CurrentPrice = styled.div`
  display: 'flex';
  font-size: 1rem;
  font-weight: 600;
`
export const TotalPrice = styled.div`
  font-size: 1rem;
  display: 'flex';
  color: #dd3333;
  font-weight: 600;
`
export const Unit = styled.span`
  font-size: 0.75rem;
`
export const CartTable = styled(Table)`
  margin-top: 16px;
`
export const Pay = styled(Button)``
