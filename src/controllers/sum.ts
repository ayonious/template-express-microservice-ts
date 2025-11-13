import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import sum from '../utils/utils';

/**
 * Zod schema for sum endpoint query parameters
 */
const sumQuerySchema = z.object({
  val: z.string().transform((val) => {
    const num = Number(val);
    if (isNaN(num)) {
      throw new Error('val must be a valid number');
    }
    return num;
  }),
});

/**
 * Validation middleware for sum endpoint
 */
export const validateSumQuery = (req: Request, res: Response, next: NextFunction) => {
  try {
    sumQuerySchema.parse(req.query);
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
 * Sum endpoint handler
 * GET /sum?val=<number>
 */
export const getSumController = (req: Request, res: Response) => {
  const val = Number(req.query.val) || 0;
  res.send(`sum of [1 to ${val}] is ${sum(val)}`);
};
