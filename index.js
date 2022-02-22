const express = require("express");
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.static("./public"));
app.use("/api", require("./api/router.js"));

app.listen(PORT);