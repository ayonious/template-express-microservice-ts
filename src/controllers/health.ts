import { Request, Response } from 'express';

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns a simple greeting message to verify the service is running
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Service is healthy
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Hello World!
 */
export const healthCheck = (req: Request, res: Response) => {
  res.send('Hello World!');
};
