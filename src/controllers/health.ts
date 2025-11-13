import { Request, Response } from 'express';

/**
 * Health check endpoint
 * GET /
 */
export const healthCheck = (req: Request, res: Response) => {
  res.send('Hello World!');
};
