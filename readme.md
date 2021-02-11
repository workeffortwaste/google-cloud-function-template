# Google Cloud Function Template
A barebones template for creating, testing and deploying Google Cloud Functions.

**Like this project? Help support my projects and buy me a coffee via [ko-fi](https://ko-fi.com/defaced)**.

## Usage

`npm run start`
Serves the cloud function locally.

`npm run deploy`
Deploys the function to Google's Cloud Platform. Deploying functions requires the Google Cloud SDK to be installed separately.

## Notes

The template is configured for a function titled `helloWorld`, after cloning the repository update references to `helloWorld` in `package.json` and `index.js` for your own function name.

When the function is served locally environmental variables will be taken from a `.env` file and when deployed they will be taken directly from the native variables on Google's Cloud Platform.

## Author

Chris Johnson - [defaced.dev](https://defaced.dev) - [@defaced](http://twitter.co.uk/defaced/)