import { db } from '../models/index.js';
const { User } = db;

class UserService {
	async create(data) {
		const transaction = await User.sequelize.transaction();
		try {
		const userCreated = await User.create(data, { transaction });

		const user = userCreated.toJSON();

		await transaction.commit();
		return user;
		} catch (error) {
			await transaction.rollback();
			throw error;
		}
	}

	async exists(data) {
		const user = await User.findOne({
		where: {
			id: data.id,
		},
		attributes: ['id']
		});

		return !!user;
	}

	async update({ changes, filter }) {
		const user = await User.findOne({
		where: {
			id: filter.id
		},
		attributes: ['id']
		});

		if (!user) {
			throw new Error('User not found');
		}

		const transaction = await User.sequelize.transaction();

		try {
		const promises = [
			User.update(changes, {
			where: {
				id: filter.id
			},
			transaction
			})
		];

		await Promise.all(promises);
		await transaction.commit();
		} catch (error) {
			await transaction.rollback();
			throw error;
		}

		return { ...user, ...changes };
	}
}

export default UserService;
