import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../swagger';
import { healthCheck } from './health';
import { getSumController, validateSumQuery } from './sum';
import {
  getChuckNorrisFactController,
  validateChuckNorrisBody,
} from './chuckNorris';

const app = express();

// this allows to parse body of post requests
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health check endpoint
app.get('/', healthCheck);

// Sum endpoint with Zod validation
app.get('/sum', validateSumQuery, getSumController);

// Chuck Norris fact endpoint with Zod validation
app.post('/', validateChuckNorrisBody, getChuckNorrisFactController);

export default app;
