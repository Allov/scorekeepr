import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Wrapper = styled.div`
  padding: 100px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
`;

const LoadingPanel = () => (
  <Wrapper>
    <FontAwesome name="gear" size="3x" spin />
  </Wrapper>
);

export default LoadingPanel;
