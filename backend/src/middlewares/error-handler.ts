import NotFoundError from "../errors/not-found-error";
import BadRequestError from "../errors/bad-request-error";
import ConflictError from "../errors/conflict-error";
import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof BadRequestError) {
        res.status(400).send({ message: 'Переданы некорректные данные в методы создания товара, заказа' });
    } else if (error instanceof NotFoundError) {
        res.status(404).send({ message: 'Маршрут не найден' });
    } else if (error instanceof ConflictError) {
        res.status(409).send({ message: 'Товар уже существует' });
    } else {
        res.status(500).send({ message: 'На сервере произошла ошибка' });
    }
    next();
};