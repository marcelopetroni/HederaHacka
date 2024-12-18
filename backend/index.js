import express from 'express';
import { sequelize } from './config/db.js';
import { UserRoutes } from './routes/index.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const userRoute = new UserRoutes();
app.use('/users', userRoute.setup());

sequelize.authenticate()
.then(() => {
	console.log('Database connected successfully!');
})
.catch((err) => {
	console.error('Error connecting to the database:', err);
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
