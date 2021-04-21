import {
  fetchAllContactsRequest,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './items-actions';

import axios from 'axios';

export function deleteContactById(contactId) {
  console.log(contactId);
  return axios.delete(`${contactId}`);
}

export const fetchContacts = () => async dispatch => {
  dispatch(fetchAllContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    dispatch(fetchAllContactsSuccess(data));
  } catch (error) {
    dispatch(fetchAllContactsError(error));
  }
};

export const addContact = contact => dispatch => {
  dispatch(addNewContactRequest());
  console.log(contact);

  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      console.log(data);
      return dispatch(addNewContactSuccess(data));
    })
    .catch(error => dispatch(addNewContactError(error)));
};

export const deleteContact = contact => dispatch => {
  console.log(contact);
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contact.id}`)
    .then(() => dispatch(deleteContactSuccess(contact)))
    .catch(error => dispatch(deleteContactError(error)));
};
