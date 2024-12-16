import { UserService } from '../services/index.js';

class UserController {
	constructor() {
		this.userService = new UserService();
	}

	async create(req, res) {
		try {
		const user = await this.userService.create({
			...req.data
		});

		this.sendSuccess({
			data: user,
			res
		});
		} catch (error) {
			this.sendError({ error, req, res });
		}
	}

	async exists(req, res) {
		try {
		const response = await this.userService.exists({
			email: req.filter.email
		});

		this.sendSuccess({
			data: response,
			res
		});
		} catch (error) {
			this.sendError({ error, req, res });
		}
	}

	async update(req, res) {
		try {
		const options = {
			filter: {
			id: req.filter.id
			},
			changes: req.data
		};

		const response = await this.userService.update(options);

		this.sendSuccess({
			data: response,
			res
		});
		} catch (error) {
			this.sendError(error, req, res);
		}
	}
}

export default UserController;
