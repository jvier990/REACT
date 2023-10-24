const express = require("express");
const morgan = require("morgan");
const taskRoutes = require("./routes/tasks.routes");
const { json } = require("express/lib/response");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(taskRoutes);

app.listen(3000);
console.log("Server on port 3000");
