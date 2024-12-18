import { UserService } from '../services/index.js';

class UserController {
	constructor() {
		this.userService = new UserService();
		this.create = this.create.bind(this);
		this.login = this.login.bind(this);
		this.getAllUsers = this.getAllUsers.bind(this);
		this.update = this.update.bind(this);
	}

	async create(req, res) {
		const { firstName, lastName, email, password } = req.body;

		try {
			const user = await this.userService.create({
				firstName,
				lastName,
				email,
				password,
			});

			res.status(201).json({
				success: true,
				data: user,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				error: error.message || 'An unexpected error occurred',
			});
		}
	}

	async getAllUsers(req, res) {
		try {
			const users = await this.userService.getAllUsers();
			res.status(200).json({
				success: true,
				data: users,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				error: error.message || 'An unexpected error occurred',
			});
		}
	}

	async login(req, res) {
		const { email, password } = req.body;

		try {
			const user = await this.userService.login({ email, password });

			if (!user) {
				console.log('Invalid email or password');

				return res.status(401).json({
					success: false,
					message: 'Invalid email or password',
				});
			}

			return res.status(200).json({
				success: true,
				message: 'Login successful'
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				error: error.message || 'An unexpected error occurred',
			});
		}
	}

	async update(req, res) {
		const { id } = req.query;

		try {
			const options = {
				filter: {
					id: id,
				},
				changes: req.body,
			};

			const response = await this.userService.update(options);

			res.status(200).json({
				success: true,
				data: response,
			});

		} catch (error) {
			res.status(500).json({
				success: false,
				error: error.message || 'An unexpected error occurred',
			});
		}
	}

}

export default UserController;
