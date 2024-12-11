const data = require("../data/data");

/**
 * Retrieves all person entries from the dataset.
 * @returns {Array} Array of person objects.
 */
const getAll = () => {
  return data.persons;
};

/**
 * Retrieves a person entry from the dataset by name.
 * @param {string} name The name of the person to retrieve.
 * @returns {Object} The person object if found, null otherwise.
 */
const getByName = (name) => {
  return data.persons.find((person) => person.name === name);
};

/**
 * Creates a new person entry in the dataset.
 * @param {Object} person The person data to store.
 * @returns {Object} The newly created person object.
 */
const create = (person) => {
  const id = data.length + 1;
  person.id = id;
  data.persons = [...data.persons, person];
  return person;
};

/**
 * Updates an existing person entry in the dataset.
 * @param {number} id The ID of the person to update.
 * @param {Object} person The person data to update.
 * @returns {Object} The updated person object if found, null otherwise.
 */
const update = (id, person) => {
  const personToUpdate = data.persons.find((person) => person.id === id);

  if (personToUpdate) {
    personToUpdate.name = person.name;
    personToUpdate.number = person.number;
  }

  return person;
};

/**
 * Removes a person entry from the dataset by ID.
 * @param {number} id The ID of the person to remove.
 * @returns {Array} The remaining person objects.
 */
const remove = (id) => {
  const persons = data.persons.filter((person) => person.id !== id);
  return persons;
};

module.exports = { getAll, getByName, create , update, remove };
