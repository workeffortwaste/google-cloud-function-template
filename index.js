if (!process.env.GCP_PROJECT) {
  require('dotenv').config()
}

exports.helloWorld = async (req, res) => {
  // Handle CORS
  res.set('Access-Control-Allow-Origin', '*')

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Max-Age', '3600')
    res.status(204).end()
  } else {
    res.send('Hello, World')
  }
}
