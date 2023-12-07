import React from 'react';
import styled from '@emotion/styled';

import SplitPane from '../src';

const Wrapper = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  border: 1px solid #000;
`;

const CenterContent = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default () => (
  <Wrapper>
    <SplitPane split="horizontal" primary="second" size="50%" minSize={0}>
      <CenterContent>left</CenterContent>
      <CenterContent>right</CenterContent>
    </SplitPane>
  </Wrapper>
);
