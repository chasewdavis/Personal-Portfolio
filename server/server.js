const express = require('express');
const path = require('path');

const app = express();

app.use( express.static( `${__dirname}/../build` ) );

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 8085;
app.listen(PORT, ()=>console.log(`listening on port ${PORT} :)`));