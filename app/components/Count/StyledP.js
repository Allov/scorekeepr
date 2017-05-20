import styled from 'styled-components';

const StyledP = styled.p`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }

  &.positive {
    color: green;
  }

  &.negative {
    color: red;
  }
`;

export default StyledP;
