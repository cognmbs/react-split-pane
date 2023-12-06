import React from 'react';
import styled from '@emotion/styled';

import SplitPane from '../src';

const CenterContent = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default () => (
  <SplitPane split="vertical" primary="second" size="50%" minSize={0}>
    <CenterContent>left</CenterContent>
    <CenterContent>right</CenterContent>
  </SplitPane>
);
