import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import getFunFact from '../service/chuckNorrisService';

/**
 * Zod schema for Chuck Norris endpoint request body
 */
const chuckNorrisBodySchema = z.object({
  name: z.string().min(1, 'Name is required'),
});

/**
 * Validation middleware for Chuck Norris endpoint
 */
export const validateChuckNorrisBody = (req: Request, res: Response, next: NextFunction) => {
  try {
    chuckNorrisBodySchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        error: 'Validation failed',
        details: error.issues,
      });
    } else {
      res.status(400).json({
        error: 'Validation failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
};

/**
 * Chuck Norris fact endpoint handler
 * POST /
 */
export const getChuckNorrisFactController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const ret = await getFunFact(name);
  res.send(ret);
};
