import { Button, ListGroup, ListGroupItem, Stack } from "react-bootstrap";
import "./Persons.css";

import phonebookList from "../../assets/phonebook-list.avif";

/**
 * Component to display the list of persons in the phonebook
 * @param {Object[]} personsToShow - array of persons objects to display
 * @param {function} deletePerson - function to delete a person from the phonebook
 * @returns JSX for the persons list component
 */
const Persons = ({ personsToShow, deletePerson }) => {
  return (
    <Stack className="d-flex flex-column align-items-center">
      <img src={phonebookList} width="50%" />
      <ListGroup>
        {personsToShow.map((person) => (
          <ListGroupItem className="list-style" key={person.name}>
            {person.name} {person.number}
            <Button
              variant="danger ms-2"
              onClick={() => deletePerson(person.id)}
            >
              <i className="bi bi-person-dash me-2"></i>Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Stack>
  );
};

export default Persons;
