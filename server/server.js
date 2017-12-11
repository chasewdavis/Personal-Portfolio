const express = require('express')

const app = express();

const PORT = 3005;
app.listen(PORT, ()=>console.log(`listening on port ${PORT} :)`))