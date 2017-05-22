/*
 * PlayerList Messages
 *
 * This contains all the text for the PlayerList component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'app.components.PlayerList.name',
    defaultMessage: 'name',
  },
  add: {
    id: 'app.components.PlayerList.add',
    defaultMessage: 'add',
  },
  substract: {
    id: 'app.components.PlayerList.substract',
    defaultMessage: 'substract',
  },
  score: {
    id: 'app.components.PlayerList.score',
    defaultMessage: 'score',
  },
  playersEmpty: {
    id: 'app.components.PlayerList.playersEmpty',
    defaultMessage: `
      no players; use {icon} to add one
    `,
  },
  playerNamePlaceholder: {
    id: 'app.components.PlayerList.playerNamePlaceholder',
    defaultMessage: 'player name',
  },
});
