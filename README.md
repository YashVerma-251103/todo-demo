# todo-demo

A tiny in-memory todo app (Express + Node 18) used as the integration fixture
for the home-server **live-demo platform** (vyr.co.in). It exercises the full
clone → build → spawn → proxy → auto-cleanup flow.

## Run locally
```bash
npm install
npm start          # listens on :3000
```

## Endpoints
- `GET  /health` → `{ "status": "ok" }`
- `GET  /todos`  → list
- `POST /todos`  `{ "text": "..." }` → create
- `DELETE /todos/:id` → remove

Containerized via the included `Dockerfile` (`EXPOSE 3000`).
