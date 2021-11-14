import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Presentation = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
`
const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`
const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};
  &:hover {
    color: black;
  }

  

`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  right: 10px;
  height: 24px;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper tabIndex="0">
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentation>
        {displayedValue}
      </Presentation>
      <IconWrapper>
        <Icon id='chevron-down' size={24}/>
      </IconWrapper>
      
    </Wrapper>
  );
};

export default Select;
