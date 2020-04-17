import request, { Response } from 'request';

import config from '../config.json';

const baseUrl: string = config.baseUrl;

test('GET /scripts/main.min.js', (done: jest.DoneCallback): void => {
    request(`${baseUrl}/scripts/main.min.js`, (err: Error, res: Response): void => {
        if (err || res.statusCode != 200) {
            return done('Could not fetch script.');
        }

        expect(res.headers['content-type'].includes('javascript')).toBe(true);
        done();
    });
});

test('GET /styles/main.min.css', (done: jest.DoneCallback): void => {
    request(`${baseUrl}/styles/main.min.css`, (err: Error, res: Response): void => {
        if (err || res.statusCode != 200) {
            return done('Could not fetch script.');
        }

        expect(res.headers['content-type'].includes('css')).toBe(true);
        done();
    });
});
