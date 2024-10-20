import { Types } from 'mongoose';
import { celebrate, Joi } from 'celebrate';

enum PaymentType {
    Card = "card",
    Online = "online"
};

export const validateOrderBody = celebrate({
    body: Joi.object().keys({
        items: Joi.array().min(1).items(
            Joi.string().custom((value, helper) => {
                if (Types.ObjectId.isValid(value)) {
                    return value;
                }
                return helper.message({ custom: 'Невалидный id' });
            })
        )
        .messages({
            'array.min': 'В заказе существует товар'
        }),
        total: Joi.number().required().messages({
            'any.required': 'Не указана сумма заказа'
        }),
        payment: Joi.string().valid(...Object.values(PaymentType)).required().messages({
            'any.required': 'Не выбран способ оплаты'
        }),
        email: Joi.string().email().required().messages({
            'any.required': 'Не указан email'
        }),
        phone: Joi.string().required().messages({
            'any.required': 'Не указан номер телефона'
        }),
        address: Joi.string().required().messages({
            'any.required': 'Не указан адрес доставки'
        })
    })
});

