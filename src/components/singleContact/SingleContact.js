import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/actions/contactAction';
import './SingleContact.css';

const SingleContact = ({ name, number, deleteContact }) => {
  return (
    <li className="contact">
      <h4>{name}</h4>
      <p>{number}</p>
      <button className="deleteButton" type="button" onClick={deleteContact}>
        &#10008;
      </button>
    </li>
  );
};
const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.items.find(
    contact => contact.id === ownProps.id,
  );
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleContact);

SingleContact.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  number: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};
