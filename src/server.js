const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

// サーバ起動
const server = app.listen(process.env.PORT || 8080, () => {
    const host = server.address().address;
    const port = server.address().port;
});