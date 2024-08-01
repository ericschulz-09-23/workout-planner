import express from 'express';
import dotenv from ' dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userRoute from './routes/users'
import authRoute from './routes/auth'
import entryRoute from './routes/entries'
import routineRoute from './routes/routines';
import mealRoute from './routes/meals'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongoDB');
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected!');
});

app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

app.use(cookieParser());
app.use(express.json());
app.use(helmet());

app.use(cors({
    origin: 'http://localhost:3000',
    credentals: true
}));
app.use(morgan('common'));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/entries', entryRoute);
app.use('/api/routines', routineRoute);
app.use('/api/meals', mealRoute);

app.listen(PORT, () => {
    console.log('Listening on port 5000');
});
