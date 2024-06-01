import { createServer } from 'node:http'
import { isReadable } from 'node:stream'
import { get_all } from './db.js'

const hostname = 'localhost'
const port = 3000

const server = createServer(
  (req, res) => {
    // make sure to only respond top correct call
    const url = req.url
    const method = req.method
    if (method === 'GET' && url === '/states') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end(JSON.stringify(get_all()))
    } else {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain')
      res.end("Invalid API call")
    }
  }
)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
