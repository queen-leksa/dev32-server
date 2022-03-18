const express = require("express");
const PORT = process.env.PORT || 3002;
const swaggerUi = require("swagger-ui-express");

const swSpec = require("./server");

const app = express();
app.use(express.static("./public"));
app.use(express.json());
app.use(require("cors")());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swSpec));
app.use("/api", require("./api/router.js"));

app.listen(PORT);