const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 HTTP server running on http://localhost:${port}`);
});
