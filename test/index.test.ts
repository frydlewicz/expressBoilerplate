import request, { Response } from 'request';

import config from '../config.json';

const baseUrl: string = config.baseUrl;

test('GET /', (done: jest.DoneCallback): void => {
    request(baseUrl, (err: Error, res: Response, body: string): void => {
        if (err || res.statusCode != 200 || typeof body !== 'string') {
            return done('Could not fetch main page.');
        }

        const found: boolean = body.includes('<html>');

        if (!found) {
            return done('Invalid main page structure.');
        }

        done();
    });
});

test('GET /404', (done: jest.DoneCallback): void => {
    request(`${baseUrl}/404`, (err: Error, res: Response, body: string): void => {
        if (err || res.statusCode != 404 || typeof body !== 'string') {
            return done('Could not fetch 404 page.');
        }

        const found: boolean = body.includes('<html>');

        if (!found) {
            return done('Invalid 404 page structure.');
        }

        done();
    });
});
