require("dotenv").config();
const express = require('express');
const http = require("http");
const appRouter = require("./routes/route.js");
const db = require('./models/index.js');

const app = express();

app.use(express.json());
app.use(appRouter);

const server = http.createServer(app);

db.sequelize.sync().then(() => {
  console.log("Database connected")
});

server.listen(3000, async () => {
  console.log(`Server demarer avec succès au port port 3000`);
});