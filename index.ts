import express, { request } from 'express';
import { tomi } from './src';

const app = express();


app.post("/", (req, res) => {
  console.log(req.body)
  res.send(tomi("tomasito"));
})

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listening on port: ${port}`))