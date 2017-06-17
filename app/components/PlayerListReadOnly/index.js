import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import _ from 'lodash';

import FontAwesome from 'react-fontawesome';

import Wrapper from 'components/Wrapper';
import Count from 'components/Count';

import messages from './messages';

const StyledPlayerName = styled.td`
  @media (max-width: 375px) {
    font-size: 20px;
  }

  @media (min-width: 376px) {
    font-size: 30px;
  }

  font-weight: 600;
`;

const StyledTable = styled(Table) `
  {
    @media (max-width: 375px) {
      &.table > thead > tr > th,
      &.table > tbody > tr > th,
      &.table > tfoot > tr > th,
      &.table > thead > tr > td,
      &.table > tbody > tr > td,
      &.table > tfoot > tr > td {
        padding: 0;
      }
    }
  }
`;

export class PlayerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortDirection: this.props.sortDirection || 'desc',
    };

    this.changeSortDirection = this.changeSortDirection.bind(this);
  }

  changeSortDirection() {
    this.setState({
      sortDirection: this.state.sortDirection === 'desc' ? 'asc' : 'desc',
    });
  }

  render() {
    let playerListtbody = null;

    if (this.props.players && this.props.players.length > 0) {
      playerListtbody = (
        <tbody>
          {_.orderBy(this.props.players, 'score', this.state.sortDirection).map((player, i) => (
            <tr key={`player-${i}`}>
              <StyledPlayerName>{player.name}</StyledPlayerName>
              <td className="text-center"><Count value={player.score} disableEditMode /></td>
            </tr>
          ))}
        </tbody>
      );
    }

    let noPlayers = null;
    if (!this.props.players || this.props.players.length === 0) {
      noPlayers = (
        <p className="text-center">
          <FormattedMessage {...messages.playersEmpty} />
        </p>
      );
    }

    return (
      <Wrapper>
        <StyledTable>
          <thead>
            <tr>
              <th><FormattedMessage {...messages.name} /></th>
              <th className="text-center"><a href={`#sort-${this.state.sortDirection !== 'desc' ? 'asc' : 'desc'}`} onClick={this.changeSortDirection}><FormattedMessage {...messages.score} /></a> {this.state.sortDirection !== 'desc' ? <FontAwesome name="sort-desc" /> : <FontAwesome name="sort-asc" />}</th>
            </tr>
          </thead>
          {playerListtbody}
        </StyledTable>
        {noPlayers}
      </Wrapper>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array,
  sortDirection: PropTypes.string,
};


export default PlayerList;
