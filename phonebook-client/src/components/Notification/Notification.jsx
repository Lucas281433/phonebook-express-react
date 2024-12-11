import "./Notification.css";

/**
 * A Notification component that displays a message in a div
 * with a class of 'error' if the message starts with 'Information'
 * or 'added' if the message does not start with 'Information'.
 * If the message is null, it renders nothing.
 * @param {string} message The message to be displayed
 * @returns JSX for the Notification component
 */
const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  if (message.startsWith("Information")) {
    return <div className="error">{message}</div>;
  }

  return <div className="added">{message}</div>;
};

export default Notification;
