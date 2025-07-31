import express, { Request, Response } from 'express';
import { RowDataPacket, QueryError } from 'mysql2';
import { db } from '../db';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  db.query('SELECT * FROM meals', (err: QueryError | null, results: RowDataPacket[]) => {
    if (err) return res.status(500).send(err.message);
    res.json(results);
  });
});

export default router;