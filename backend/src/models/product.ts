import { model, Schema, Types } from "mongoose";

export interface IProduct {
    _id: Types.ObjectId,
    title: string,
    image: IFile,
    category: string,
    description: string,
    price: number
};

interface IFile {
    fileName: string,
    originalName: string
};

const productSchema = new Schema<IProduct>({
    title: {
        type: String,
        minlength: [2, 'Минимальная длина поля "title" - 2'],
        maxlength: [30, 'Максимальная длина поля "title" - 30'],
        unique: true,
        required: [true, 'Поле "title" должно быть заполнено']
    },
    image: {
        fileName: {
            type: String,
            required: [true, 'Поле "image.fileName" должно быть заполнено']
        },
        originalName: {
            type: String
        }
    },
    category: {
        type: String,
        required: [true, 'Поле "category" должно быть заполнено']
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: null
    }
});

export default model<IProduct>('product', productSchema);