import { Router, Request, Response, NextFunction } from  'express';
import productRouter from './product';
import orderRouter from './order';
import NotFoundError from '../errors/not-found-error';

const router = Router();

router.use('/product', productRouter);
router.use('/order', orderRouter);

router.use((req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError('Такого маршрута нет'));
});

export default router;