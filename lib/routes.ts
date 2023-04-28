import Router, { Express, Request, Response } from 'express';

const router: Express = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Home Page - Typescript!!!');
});

export default router;
