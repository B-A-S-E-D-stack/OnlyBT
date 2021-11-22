/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                    Imports
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
const express = require('express');
const app = express();

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                    Coding
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

const port = process.env.PORT || 5000;


app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.listen(port, () => console.log(`Listening on port ${port}`)) //change