if (!process.env.GCP_PROJECT) {
  require('dotenv').config()
}

exports.helloWorld = (req, res) => {
  res.send('Hello, World')
}