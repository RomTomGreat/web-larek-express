import { Router } from  'express';
import { getProducts, createProducts } from '../controllers/products';

const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.post('/', createProducts);

export default productRouter;