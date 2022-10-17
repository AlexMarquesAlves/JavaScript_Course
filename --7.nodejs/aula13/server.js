const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 HTTP server running on http://localhost:${port}`);
});
