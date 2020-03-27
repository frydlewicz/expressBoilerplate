import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (_: Request, res: Response): void => {
    res.render('index', {
        title: 'Express',
    });
});

export default router;
