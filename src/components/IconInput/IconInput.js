import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const styles = {
  small: {
    border: 1,
    icon: 16,
    fontSize: 14,
    leftPadding: 24,
    gap: 8
  },
  large: {
    border: 2,
    icon: 24,
    fontSize: 18,
    leftPadding: 36,
    gap: 12
  }
}


const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const StyledIcon = styled(Icon)`
 position: absolute;
 height: var(--icon-size);
 top: 0;
 bottom: 0;
 margin-top: auto;
 margin-bottom: auto;
`


const Input = styled.input`
  outline-offset: 4px;
  border: none;
  border-bottom: var(--border-bottom) solid black;
  padding-left: var(--left-padding);
  height: var(--left-padding);
  font-weight: 700;
  font-size: var(--font-size);
  width: var(--input-width);
  color: inherit;
  

  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: 400;
    font-size: var(--font-size);
  }
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...otherStuff
}) => {
  const style = styles[size];
  return <Wrapper>
            <Input 
              style={{
              '--border-bottom': style.border + 'px',
              '--left-padding': style.leftPadding + 'px',
              '--font-size': style.fontSize+ 'px',
              '--input-width': width + 'px',
              }
            }
            {...otherStuff}
            />
            <StyledIcon id={icon} size={size} style={{
              '--icon-size': style.icon + 'px'
            }}/>
            <VisuallyHidden>{label}</VisuallyHidden>
          </Wrapper>
};

export default IconInput;
