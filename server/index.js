import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import path from 'path';
import fs from 'fs';

import App, { fetchData } from '../src/App';

const PORT = 3006;

const app = express();

app.get('/', async (req, res) => {
    const response = await fetchData();
    const data = await response.json();
    const app = ReactDOMServer.renderToString(<App data={data} />);

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err,data) => {
        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        )
    })
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log('Server run');
});
