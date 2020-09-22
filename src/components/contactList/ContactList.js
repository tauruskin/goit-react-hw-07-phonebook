import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { getFilteredContact } from '../../redux/contacts/contactsSelector';
import SingleContact from '../singleContact/SingleContact';
import './ContactList.css';

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className="contact_List">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} classNames="list_item" timeout={250}>
          <SingleContact id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
const mapStateToProps = state => ({
  contacts: getFilteredContact(state),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      number: PropTypes.string,
    }),
  ).isRequired,
};
