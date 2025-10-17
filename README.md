
# TogetherList — y-websocket server

Tiny WebSocket relay for Yjs. Free to host on Render/Railway/Fly.

## Run locally
```bash
npm i
npm start
# server on http://localhost:8080
```

## Deploy to Render (free)
1. Create a new Web Service in Render, connect this repo.
2. Build Command: `npm i`
3. Start Command: `npm start`
4. After deploy, copy the **External URL** (wss supported on Render).

Use that URL in the client as `VITE_YWS_URL`, e.g.:
```
wss://your-app.onrender.com
```
