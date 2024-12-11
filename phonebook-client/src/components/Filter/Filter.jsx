import { FormControl, InputGroup, Stack } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import "./Filter.css";

import phonebookFilter from "../../assets/phonebook-filter.webp";

/**
 * Component for filtering the phonebook
 * 
 * @param {string} personFilter - current filter string
 * @param {function} handlePersonFilter - function to handle filter change
 * @returns JSX for the filter component
 */
const Filter = ({ personFilter, handlePersonFilter }) => {
  return (
    <Stack className="d-flex align-items-center">
      <div className="div-pisition">
        <img src={phonebookFilter} width="350rem" />
        <InputGroup className="mb-2 input-position">
          <InputGroupText
            className="input-text"
          >
            Filter shown with:
          </InputGroupText>
          <FormControl
            value={personFilter}
            onChange={handlePersonFilter}
            className="input"
          />
        </InputGroup>
      </div>
    </Stack>
  );
};

export default Filter;
