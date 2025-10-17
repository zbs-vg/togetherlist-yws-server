import http from 'http'
import WebSocket, { WebSocketServer } from 'ws'
import setupWSConnection from 'y-websocket/bin/utils.js'

const port = process.env.PORT || 8080
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('TogetherList y-websocket server running\n')
})
const wss = new WebSocketServer({ server })

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req, { gc: true })
})

server.listen(port, () => {
  console.log('y-websocket server on :' + port)
})
