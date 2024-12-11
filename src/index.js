const app = require("./app");
const { PORT } = require("./utils/utils");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
