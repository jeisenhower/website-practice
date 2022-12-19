import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejs from 'ejs';


const port = 3000;

const start = (port) => {
    const app = express();

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    app.engine('.html', ejs.__express);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');

    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/', (req, res) => {
        //res.sendFile(path.join(__dirname, '/index.html'));
        res.render('index.html');
    });



    app.listen(port);
    console.log(`Server listening on port ${port}`);
}

start(port);
