import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import { requestLogger, errorLogger } from './middlewares/Logger';
import { errorHandler } from './middlewares/error-handler';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/weblarek');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(requestLogger);
app.use(routes);
app.use(errorLogger);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('listening on Port 3000');
});