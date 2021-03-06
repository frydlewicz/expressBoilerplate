import express, { Express, Request, Response } from 'express';
import http, { Server } from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index';
import { scripts, styles } from './services/middleware';

const port: number = parseInt(process.env.PORT || '3000', 10);
const app: Express = express();
const server: Server = http.createServer(app);

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));
app.use(cookieParser());

app.disable('x-powered-by');

app.get('*.js', scripts);
app.get('*.css', styles);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((_: Request, res: Response): void => {
    res.status(404).render('404');
});

server.on('error', (error: Error): void => {
    console.error(error);
});

server.on('listening', (): void => {
    console.info(`Listening on port ${port}.`);
});

server.listen(port);
