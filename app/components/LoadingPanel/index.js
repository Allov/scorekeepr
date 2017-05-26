import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
`;

const LoadingPanel = (props) => (
  <Wrapper>
    <FontAwesome name="gear" size="3x" spin />
    <span className="sr-only">{props.message}</span>
  </Wrapper>
);

LoadingPanel.propTypes = {
  message: PropTypes.string,
};

export default LoadingPanel;
