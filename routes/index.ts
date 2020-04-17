import express, { Router, Request, Response } from 'express';

import config from '../config.json';

const router: Router = express.Router();

router.get('/', (_: Request, res: Response): void => {
    res.render('index', {
        title: config.title,
    });
});

export default router;
