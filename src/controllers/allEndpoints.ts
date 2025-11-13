import express from 'express';
import bodyParser from 'body-parser';
import { healthCheck } from './health';
import { getSumController, validateSumQuery } from './sum';
import { getChuckNorrisFactController, validateChuckNorrisBody } from './chuckNorris';

const app = express();

// this allows to parse body of post requests
app.use(bodyParser.json());

// Health check endpoint
app.get('/', healthCheck);

// Sum endpoint with Zod validation
app.get('/sum', validateSumQuery, getSumController);

// Chuck Norris fact endpoint with Zod validation
app.post('/', validateChuckNorrisBody, getChuckNorrisFactController);

export default app;
