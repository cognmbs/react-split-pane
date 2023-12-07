import React from 'react';
import styled from '@emotion/styled';

import SplitPane from '../src';

const WrapperVertical = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  border: 1px solid #000;
  margin-top: 300px;
  margin-left: 100px;
`;

const WrapperHorizontal = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  <WrapperVertical>
    <SplitPane split="vertical" primary="second" minSize={0} size="50%">
      <CenterContent>left</CenterContent>
      <WrapperHorizontal>
        <SplitPane split="horizontal" primary="second" minSize={72} size="50%">
          <CenterContent>top</CenterContent>
          <CenterContent>bottom</CenterContent>
        </SplitPane>
      </WrapperHorizontal>
    </SplitPane>
  </WrapperVertical>
);
