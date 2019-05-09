import React from 'react'
import styled from 'styled-components'

const StyledDiv =  styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  i {
    margin-right: 10px;
  }
  &:hover {
    color: #2196f3 !important;
    cursor: pointer;
    transition: all 0.1s ease !important;
  }
`

export const Channel = ({ faName, children }) => (
  <StyledDiv>
    <i className={faName}></i>
    {children}
  </StyledDiv>
)