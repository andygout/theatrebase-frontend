# theatrebase-frontend [![CircleCI](https://circleci.com/gh/andygout/theatrebase-frontend/tree/master.svg?style=svg)](https://circleci.com/gh/andygout/theatrebase-frontend/tree/master)

Front end rendering of site that provides listings for theatrical productions, playtexts and associated data.

To run locally
-------

- Clone this repo.
- Install node modules: `$ npm install`.
- Add favicon: `$ touch ./src/client/favicons/favicon.ico`.
- Copy development environment variables from `.env-dev` into `.env` by running command: `$ node transfer-env-dev`.
- Build client-side JavaScript and CSS: `$ npm run build`; build and update on change with `$ npm run watch`.
- Ensure an instance of [`theatrebase-api`](https://github.com/andygout/theatrebase-api) is running on `localhost:4000`.
- Run server using: `$ npm start` and visit homepage: `localhost:3000`.


To test
-------

- Ensure `$ npm install` has been run.
- `$ npm test`.