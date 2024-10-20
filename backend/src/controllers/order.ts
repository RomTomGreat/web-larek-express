import { Request, Response, NextFunction } from 'express';
import { faker } from '@faker-js/faker';
import { Types, Error as MongooseError } from 'mongoose';
import Product, { IProduct } from '../models/product';
import BadRequestError from '../errors/bad-request-error';

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const basket:IProduct[] = [];
        const products = await Product.find<IProduct>({});
        const { total, items } = req.body;
        items.forEach((id: Types.ObjectId) => {
            const product = products.find((pr0duct) => pr0duct._id.equals(id));
            if (!product) {
                return next(new BadRequestError(`Товар с id ${id} не найден`));
            }
            if (product.price === null) {
                return next(new BadRequestError(`Товар с id ${id} нельзя купить`));
            }
            return basket.push(product);
        });
        return res.status(200).json({
            id: faker.string.uuid(),
            total
        });
    } catch (error) {
        return next(error);
    }
};