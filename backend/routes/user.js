import { UserController } from '../controllers/index.js';
import { UserSchema } from '../schemas/index.js';
import { SchemaValidator } from '../middlewares/index.js';
import { Router } from 'express';

export default class userRoutes {
	constructor() {
        this.router = new Router();
		this.UserController = new UserController();
        this.SchemaValidator = SchemaValidator;
	}

	setup() {
		this.router.post('/', this.SchemaValidator.validate(UserSchema.create), this.UserController.create);
		this.router.get('/:id/exists', this.SchemaValidator.validate(UserSchema.exists), this.UserController.exists);
		this.router.put('/:id', this.SchemaValidator.validate(UserSchema.update), this.UserController.update);

		return this.router;
	}
}
