import request, { Response } from 'request';

import config from '../config.json';

const baseUrl: string = config.baseUrl;

test('GET /scripts/main.js', (done: jest.DoneCallback): void => {
    request(`${baseUrl}scripts/main.js`, (err: Error, res: Response): void => {
        if (err || res.statusCode != 200) {
            return done('Could not fetch script.');
        }

        expect(res.headers['cache-control'].includes('public')).toBe(true);
        expect(res.headers['content-type'].includes('javascript')).toBe(true);

        done();
    });
});

test('GET /styles/main.css', (done: jest.DoneCallback): void => {
    request(`${baseUrl}styles/main.css`, (err: Error, res: Response): void => {
        if (err || res.statusCode != 200) {
            return done('Could not fetch script.');
        }

        expect(res.headers['cache-control'].includes('public')).toBe(true);
        expect(res.headers['content-type'].includes('css')).toBe(true);

        done();
    });
});
