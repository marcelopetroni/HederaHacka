import { db } from './models/index.js';
const { sequelize } = db;

async function testConnection() {
	try {
		await sequelize.authenticate();
		console.log('Database connection established successfully!');

		const [result] = await sequelize.query('SELECT NOW()');
		console.log('Current time of the PostgreSQL server:', result[0]);
	} catch (error) {
		console.error('Error connecting to the database:', error);
	} finally {
		await sequelize.close();
	}
}

testConnection();
