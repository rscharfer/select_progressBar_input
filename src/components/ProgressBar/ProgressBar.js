/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const barStyles = {
  large: {
    height: 24,
    radius: 8,
    padding: 4
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0
  },
  small: {
    height: 8,
    radius: 4,
    padding: 0
  }
}

const Wrapper = styled.div`
 
  border-radius: var(--wrapper-radius);
  background: ${COLORS.transparentGray15};
  padding: var(--wrapper-padding);
`

const Bar = styled.div`
  background: ${COLORS.primary};
  width: var(--bar-width);
  height: var(--wrapper-height);
`

const BarWrapper = styled.div`
/* Trim off corners when progress bar is near-full. */
  overflow: hidden;
  border-radius: var(--wrapper-radius);
`

const ProgressBar = ({ value, size }) => {
  // return <progress value={value} max='100'></progress>;
  const styles = barStyles[size];
  return <Wrapper 
            role="progressbar" 
            aria-valuenow={value} 
            aria-valuemin="0" 
            aria-valuemax="100"
            style={{
              '--wrapper-height': styles['height'] + 'px',
              '--wrapper-radius': styles['radius'] + 'px',
              '--wrapper-padding': styles['padding'] + 'px'
            }}>
              <BarWrapper>
                <Bar
                style={{
                  '--bar-width': value + '%',
                }}
                />
              </BarWrapper>

             
         </Wrapper>
};

export default ProgressBar;
