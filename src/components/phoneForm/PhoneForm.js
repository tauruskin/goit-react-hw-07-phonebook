import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/contacts/contactOperations';
import {
  filterSelector,
  itemsSelector,
} from '../../redux/contacts/contactsSelector';
import './PhoneForm.css';

class PhoneForm extends Component {
  formInitialState = {
    name: '',
    number: '',
  };

  state = {
    ...this.formInitialState,
    alert: false,
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = e => {
    const { name, number, alert } = this.state;
    e.preventDefault();

    const { contacts } = this.props;
    const isExists = contacts.find(contact => contact.name === name);

    if (isExists) {
      this.toggleAlert(alert);
      return this.reset();
    }

    this.props.addContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.formInitialState });
  };

  toggleAlert = status => {
    this.setState({ alert: !status });
  };

  render() {
    const { name, number, alert } = this.state;
    const alertDelay = () => this.setState({ alert: !alert });

    return (
      <>
        <CSSTransition
          in={alert}
          classNames="alert"
          timeout={1500}
          unmountOnExit
          onEntered={alertDelay}
        >
          <button
            onClick={this.toggleAlert}
            className="alert"
          >{`Contact already exists!`}</button>
        </CSSTransition>
        <form className="contacts_form" onSubmit={this.submitHandler}>
          <label className="input_name">
            Name
            <br></br>
            <input
              className="input_form"
              type="text"
              name="name"
              placeholder="Add name"
              value={name}
              onChange={this.inputHandler}
            />
          </label>
          <br></br>
          <label className="input_name">
            Number
            <br></br>
            <input
              className="input_form"
              type="text"
              name="number"
              placeholder="Add phone number"
              value={number}
              onChange={this.inputHandler}
            />
          </label>
          <br></br>
          <button type="submit" className="submitBtn">
            Create contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: itemsSelector(state),
  filter: filterSelector(state),
});

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneForm);

PhoneForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      number: PropTypes.string,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
};
