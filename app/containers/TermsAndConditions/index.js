import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

import messages from './messages';

const Wrapper = styled.div`
  padding-bottom: 60px;
`;

export const TermsAndConditionsPage = () => (
  <Wrapper>
    <FormattedHTMLMessage {...messages.terms} />
  </Wrapper>
);

export default TermsAndConditionsPage;
