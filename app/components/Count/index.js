import React, { PropTypes } from 'react';

import Input from 'components/Input';

import StyledCount from './StyledCount';

class Count extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      value: props.value,
      validationState: null,
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ value: newProps.value });
  }

  onChange(evt) {
    this.setState({ value: evt.target.value });
  }

  toggleEditMode(evt) {
    if (this.props.disableEditMode) {
      return;
    }

    if (this.state.editMode) {
      let inputValue = evt.target.value;
      const addMode = (inputValue && inputValue.substr(0, 1) === '+');
      const mulMode = (inputValue && inputValue.substr(0, 1) === '*');
      const divMode = (inputValue && inputValue.substr(0, 1) === '/');

      if (addMode || mulMode || divMode) {
        inputValue = inputValue.substr(1);
      }
      const value = Number(inputValue);

      if (inputValue && !Number.isNaN(value) && Number.isFinite(value)) {
        let finalValue = Number(value);

        if (addMode) {
          finalValue = this.props.value + Number(value);
        } else if (mulMode) {
          finalValue = this.props.value * Number(value);
        } else if (divMode) {
          finalValue = this.props.value / Number(value);
        }

        this.props.onValueChangedHandler(finalValue);
      } else {
        this.setState({ validationState: 'error' });
        return;
      }
    } else {
      this.setState({ validationState: null });
    }

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
            <Input type="tel" className="text-center" onBlur={this.toggleEditMode} autoFocus value={this.state.value} onChange={this.onChange} validationState={this.state.validationState} />
          )
        }
      </div>
    );
  }

}

Count.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChangedHandler: PropTypes.func,
  disableEditMode: PropTypes.bool,
};

export default Count;
