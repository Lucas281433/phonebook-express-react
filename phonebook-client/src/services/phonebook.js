import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

/**
 * Makes a GET request to the server to get all the persons in the phonebook.
 * 
 * @returns {Promise} Resolves to an array of persons
 */
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

/**
 * Makes a POST request to the server to add a new person to the phonebook.
 * 
 * @param {Object} newPerson - new person object to be added to the phonebook
 * @returns {Promise} Resolves to the newly added person object
 */
const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

/**
 * Makes a DELETE request to the server to delete a person from the phonebook.
 * 
 * @param {number} id - id of the person to be deleted
 * @returns {Promise} Resolves to the deleted person object
 */
const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

/**
 * Makes a PUT request to the server to update a person in the phonebook.
 * 
 * @param {number} id - id of the person to be updated
 * @param {Object} personToUpdate - person object with updated information
 * @returns {Promise} Resolves to the updated person object
 */
const update = (id, personToUpdate) => {
  const request = axios.put(`${baseUrl}/${id}`, personToUpdate);
  return request.then((response) => response.data);
};

export default { getAll, create, deletePerson, update };
