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
export const validateSumQuery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
 * @swagger
 * /sum:
 *   get:
 *     summary: Calculate sum of numbers from 1 to N
 *     description: Returns the sum of all numbers from 1 to the provided value
 *     tags:
 *       - Math
 *     parameters:
 *       - in: query
 *         name: val
 *         required: true
 *         schema:
 *           type: number
 *         description: The upper limit for the sum calculation
 *         example: 10
 *     responses:
 *       200:
 *         description: Successfully calculated sum
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: sum of [1 to 10] is 55
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Validation failed
 *                 details:
 *                   oneOf:
 *                     - type: string
 *                     - type: array
 */
export const getSumController = (req: Request, res: Response) => {
  const val = Number(req.query.val) || 0;
  res.send(`sum of [1 to ${val}] is ${sum(val)}`);
};
