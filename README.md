# Node.js Express boilerplate

![expressBoilerplate version](https://img.shields.io/expressBoilerplate-1.0.0-green.svg)
[![License](https://img.shields.io/badge/license-MIT-red.svg)](https://opensource.org/licenses/MIT)

Framework based on Express written in TypeScript for Node.js with less ang pug integration.

## Quick start

clone the repository:
```
mkdir myapp
cd myapp
git clone git@github.com:frydlewicz/expressBoilerplate.git .
```

copy config file:
```
cp config.sample.json config.json
```

## Dev environment

install node packages:
```
npm install
```

use linter:
```
npm run check
```

auto build and run:
```
npm run watch
```

run tests (in another shell):
```
npm run test
```

## Prod environment

install, set port and run:
```
npm install --production
export PORT=3000
npm run watch
```
It is recommended to use different port than 3000.

## Author
[Kamil Frydlewicz](https://frydlewicz.pl)

## License
[MIT License](LICENSE)
