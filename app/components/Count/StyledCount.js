import styled from 'styled-components';

const StyledCount = styled.p`
  @media (max-width: 375px) {
    font-size: 20px;
    line-height: 2;
  }

  @media (min-width: 376px) {
    font-size: 30px;
    line-height: 1.3;
  }

  font-weight: 600;
`;

export default StyledCount;
