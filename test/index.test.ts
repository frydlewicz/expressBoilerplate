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
