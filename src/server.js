const express = require("express");
const app = express();

app.use(express.static(__dirname + '/'));

const port = 3009;
app.listen(port, () => console.log(`App listening on port ${port}`));