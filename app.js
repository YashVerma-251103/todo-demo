const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const todos = [];
let nextId = 1;

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.get("/todos", (_req, res) => res.json(todos));

app.post("/todos", (req, res) => {
  const { text } = req.body;
  if (!text || typeof text !== "string") {
    return res.status(400).json({ error: "text is required" });
  }
  const todo = { id: nextId++, text, done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = todos.findIndex((t) => t.id === id);
  if (idx === -1) return res.status(404).json({ error: "not found" });
  todos.splice(idx, 1);
  res.json({ success: true });
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`todo-demo listening on :${port}`));
