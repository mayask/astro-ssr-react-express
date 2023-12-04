import express from 'express';
import { handler as ssrHandler } from '../dist/server/entry.mjs';

const app = express();

// serve static assets
app.use('/', express.static('dist/client/'));

// app.use(auth);

app.use((req, res, next) => {
  ssrHandler(req, res, next, res.locals)
});

app.listen(4321);

console.log("site is available at http://localhost:4321")