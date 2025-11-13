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
export const validateChuckNorrisBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
 * @swagger
 * /:
 *   post:
 *     summary: Get a Chuck Norris fact
 *     description: Returns a Chuck Norris fact with a custom name substitution
 *     tags:
 *       - Fun
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name to substitute in the Chuck Norris fact
 *                 example: John
 *     responses:
 *       200:
 *         description: Successfully retrieved Chuck Norris fact
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: John counted to infinity - twice.
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
export const getChuckNorrisFactController = async (
  req: Request,
  res: Response
) => {
  const { name } = req.body;
  const ret = await getFunFact(name);
  res.send(ret);
};
