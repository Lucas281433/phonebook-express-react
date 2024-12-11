/**
 * Returns a 404 response with an error message when the endpoint is unknown.
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 */
const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: "Unknown endpoint" });
}

/**
 * Logs a request to the console with the method, path and body.
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @param {Function} next Express next function.
 */
const requestLogger = (req, res, next) => {
    console.log("Method:", req.method);
    console.log("Path:  ", req.path);
    console.log("Body:  ", req.body);
    console.log("---");
    next();
}

module.exports = { unknownEndpoint, requestLogger }