/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.App.header',
    defaultMessage: 'scorekeepr',
  },
  termsAndConditions: {
    id: 'app.components.App.termsAndConditions',
    defaultMessage: 'Terms and conditions',
  },
  github: {
    id: 'app.components.App.github',
    defaultMessage: 'Follow us on github',
  },
  twitter: {
    id: 'app.components.App.twitter',
    defaultMessage: 'Follow us on twitter',
  },
  error: {
    id: 'app.components.App.error',
    defaultMessage: 'Something went horribly wrong =(',
  },
  loading: {
    id: 'app.components.App.loading',
    defaultMessage: 'Loading, hang tight!',
  },
});
