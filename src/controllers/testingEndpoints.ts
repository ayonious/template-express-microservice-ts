import { Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import getFunFact from '../service/chuckNorrisService';

const app = express();

// this allows to parse body of post requests
app.use(bodyParser.json());

// plugins to validate input
import { param } from 'express-validator';
import sum from '../utils/utils';

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/sum', [param('val').isString()], (req: Request, res: Response) => {
  const param: number = +(req?.query?.val || 0);
  res.send(`sum of [1 to ${param}] is ${sum(param as number)}`);
});

app.post('/', async (req: Request, res: Response) => {
  const inp: ReqBody = req.body;
  const ret = await getFunFact(inp.name);
  res.send(ret);
});

export default app;
