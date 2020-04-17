import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { existsSync } from 'fs';

function setHeadersWithGz(req: Request, res: Response, type: string): void {
    const parts: string[] = req.url.split('/');
    const newPath: string = path.join(__dirname, '..', 'public', ...parts) + '.gz';

    if (existsSync(newPath)) {
        req.url += '.gz';
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', `text/${type}`);
    }
}

export function scripts(req: Request, res: Response, next: NextFunction): void {
    setHeadersWithGz(req, res, 'javascript');
    next();
}

export function styles(req: Request, res: Response, next: NextFunction): void {
    setHeadersWithGz(req, res, 'css');
    next();
}
