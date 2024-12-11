import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import phonebookService from "./services/phonebook";

import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";
import Persons from "./components/Persons/Persons";
import Notification from "./components/Notification/Notification";

/**
 * Main application component that manages the state and functionality of the phonebook.
 *
 * - Initializes and manages state for persons, new name, new number, filter, and notifications.
 * - Fetches initial phonebook data from the server on component mount.
 * - Handles input changes for name and number, and manages the filter input.
 * - Adds a new person to the phonebook or updates an existing person's number.
 * - Deletes a person from the phonebook after confirmation.
 * - Filters the displayed persons based on the filter input.
 *
 * @returns {JSX.Element} JSX representation of the phonebook application.
 */
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personFilter, setPersonFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    phonebookService.getAll().then((phonebook) => setPersons(phonebook));
  }, []);

  /**
   * Handles changes to the name input field, updating the state with the new value.
   * @param {Event} event - The event from the input field.
   */
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

/**
 * Handles changes to the number input field, updating the state with the new value.
 * @param {Event} event - The event from the input field.
 */
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  /**
   * Handles changes to the person filter input field, updating the state with the new value.
   * @param {Event} event - The event from the input field.
   */
  const handlePersonFilter = (event) => {
    setPersonFilter(event.target.value);
  };

  /**
   * Handles the submission of the person form, adding a new person to the phonebook
   * or updating an existing person's number if a person with the same name exists.
   * @param {Event} event - The event from the form submission.
   */
  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const repeatedPerson = persons.find((person) => person.name === newName);

    if (repeatedPerson) {
      if (
        window.confirm(
          `${repeatedPerson.name} is alredy added to phonebook, replace the old number with a new one ?`
        )
      ) {
        phonebookService
          .update(repeatedPerson.id, newPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== repeatedPerson.id ? person : updatedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setMessage(`Update of ${newPerson.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            if (error.response.status === 404) {
              setMessage(
                `Information of ${newPerson.name} has already been removed from server`
              );
            }
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }
    } else {
      phonebookService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setMessage(`Added ${newPerson.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
  };

/**
 * Deletes a person from the phonebook after user confirmation.
 *
 * - Finds the person with the specified id.
 * - Asks the user for confirmation before deletion.
 * - If confirmed, deletes the person and updates the state.
 *
 * @param {number} id - id of the person to be deleted.
 */
  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      phonebookService.deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const personToSeach = persons.filter(
    (person) => person.name.toLowerCase() === personFilter.toLowerCase()
  );

  const personsToShow = personFilter ? personToSeach : persons;

  return (
    <Container className="d-flex justify-content-center">
      <div>
        <h2 className="text-center">
          <i className="bi bi-journal-text"></i>
          <strong>Phonebook</strong>
        </h2>
        <Notification message={message} />
        <Filter
          personFilter={personFilter}
          handlePersonFilter={handlePersonFilter}
        />
        <h3 className="text-center mt-3 title-form">
          <i className="bi bi-person-fill-add me-1"></i>
          <strong>Add a New</strong>
        </h3>
        <PersonForm
          addPerson={addPerson}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
        <h3 className="text-center mt-3 title-numbers">
          <i className="bi bi-telephone"></i> <strong>Numbers</strong>
        </h3>
        <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
      </div>
    </Container>
  );
};

export default App;
