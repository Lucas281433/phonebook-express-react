/** 
 * Router to manage phonebook operations
 * Provides endpoints for CRUD operations on contacts
 * @file controllers/phonebook.js
 * @description Phonebook controller.
*/

const phonebookRouter = require("express").Router();
const phonebookServices = require("../services/phonebookServices");

/**
 * Retrieve all contacts from the phonebook
 * @route GET /
 * @returns {Array} Array of person objects
 */
phonebookRouter.get("/", (req, res) => {
  try {
    const persons = phonebookServices.getAll();
    res.status(200).json(persons);
  } catch (error) {
    res.status(404).json({ error: "Phonebook not found" });
  }
});

/**
 * Retrieve a specific contact by name
 * @route GET /:name
 * @param {string} name - Name of the person to retrieve
 * @returns {Object} Person object if found, null otherwise
 */
phonebookRouter.get("/:name", (req, res) => {
  try {
    const person = phonebookServices.getByName(req.params.name);
    if (person) {
      res.status(200).json(person);
    } else {
      res.status(404).json({ error: "Person not found" });
    }
  } catch (error) {
    res.status(404).json({ error: "Person not found" });
  }
});

/**
 * Add a new contact to the phonebook
 * @route POST /
 * @param {Object} req.body - Person data to create
 * @returns {Object} Newly created person object
 */
phonebookRouter.post("/", (req, res) => {
  try {
    const person = phonebookServices.create(req.body);
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: "Person not created" });
  }
});

/**
 * Update a contact in the phonebook
 * @route PUT /:id
 * @param {number} id - ID of the person to update
 * @param {Object} req.body - Person data to update
 * @returns {Object} Updated person object
 */
phonebookRouter.put("/:id", (req, res) => {
  try {
    const person = phonebookServices.update(req.params.id, req.body);
    if (person) {
      res.status(200).json(person);
    } else {
      res.status(404).json({ error: "Person not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Person not updated" });
  }
});

/**
 * Delete a contact from the phonebook
 * @route DELETE /:id
 * @param {number} id - ID of the person to delete
 * @returns {Object} Deleted person object
 */
phonebookRouter.delete("/:id", (req, res) => {
  try {
    const person = phonebookServices.remove(req.params.id);
    if (person) {
      res.status(200).json(person);
    } else {
      res.status(404).json({ error: "Person not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Person not deleted" });
  }
});

module.exports = phonebookRouter;
