import React, { PropTypes } from 'react';

import Input from 'components/Input';

import StyledCount from './StyledCount';
import StyledFormControl from './StyledFormControl';

class Count extends React.Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode,
    });
  }

  render() {
    let value = this.props.value;
    let className = '';
    if (value > 0) {
      value = `+${this.props.value}`;
      className = 'text-success';
    } else if (value < 0) {
      value = `-${Math.abs(this.props.value)}`;
      className = 'text-danger';
    }

    return (
      <div>
        {!this.state.editMode ? (
          <StyledCount className={`text-center ${className}`} onClick={this.toggleEditMode}>
            {value}
          </StyledCount>
        ) : (
            <StyledFormControl>
              <Input inputMode="numeric" onBlur={this.toggleEditMode} autoFocus value={this.props.value} onChange={this.props.onValueChangedHandler} />
            </StyledFormControl>
          )
        }
      </div>
    );
  }

}

Count.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChangedHandler: PropTypes.func,
};

export default Count;
