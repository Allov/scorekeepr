/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.NotFoundPage.header',
    defaultMessage: 'wooops... 404 :(',
  },
  description: {
    id: 'app.components.NotFoundPage.description',
    defaultMessage: 'The page was not found, but you could always: ',
  },
  createGame: {
    id: 'app.components.NotFoundPage.createGame',
    defaultMessage: 'Create a game',
  },
});
