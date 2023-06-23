import express, { Request, Response } from "express";
const router = express.Router();

router.get('/dumb', (_: Request, res: Response) => {
  res.send('Hello Dumb!');
});

export default router;
