import app from "./app";

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log();
  console.log(`🚀 HTTP server is running on ${port}`);
  console.log(`CTRL + Click on http://localhost:${port}`);
});
