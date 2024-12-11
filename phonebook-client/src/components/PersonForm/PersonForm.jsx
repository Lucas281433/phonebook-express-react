import {
  Form,
  FormControl,
  InputGroup,
  Button,
  Card,
  CardBody,
  Stack,
} from "react-bootstrap";
import "./PersonForm.css";

import phonebookForm from "../../assets/phonebook-form.webp";
/**
 * Component for adding a new person to the phonebook
 * 
 * @param {function} addPerson - function to handle adding a new person
 * @param {string} newName - current new name string
 * @param {function} handleNameChange - function to handle changing the new name
 * @param {string} newNumber - current new number string
 * @param {function} handleNumberChange - function to handle changing the new number
 * @returns JSX for the person form component
 */
const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <Stack className="d-flex flex-row align-items-center">
      <img src={phonebookForm} width="50%" />
      <Form onSubmit={addPerson}>
        <Card className="card">
          <CardBody>
            <InputGroup size="sm" className="mb-3 input-style">
              <InputGroup.Text id="inputGroup-sizing-default">
                Name:
              </InputGroup.Text>
              <FormControl value={newName} onChange={handleNameChange} />
            </InputGroup>

            <InputGroup size="sm" className="mb-3 input-style">
              <InputGroup.Text id="inputGroup-sizing-default">
                Number:
              </InputGroup.Text>
              <FormControl value={newNumber} onChange={handleNumberChange} />
            </InputGroup>

            <Button className="button-style" type="submit">
              Add
            </Button>
          </CardBody>
        </Card>
      </Form>
    </Stack>
  );
};

export default PersonForm;
