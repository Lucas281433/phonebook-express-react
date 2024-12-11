/**
 * Main application file
 * @file app.js
 * @description Initializes the Express application and sets up middleware and routes.
 */
const express = require("express");
const phonebookRouter = require("./controllers/phonebook");
const middleware = require("./utils/middleware");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('dist'));
app.use(middleware.requestLogger);
app.use("/api/persons", phonebookRouter);
app.use(middleware.unknownEndpoint);

module.exports = app;
