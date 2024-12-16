import { UserController } from '../controllers/index.js';
import { UserSquema } from '../schemas/index.js';
import { SchemaValidator } from '../middlewares/SchemaValidator.js';

export default class userRoutes {
	constructor() {
		this.UserController = new UserController();
        this.SchemaValidator = SchemaValidator;
	}

	setup() {
		this.router.post('/', this.SchemaValidator.validate(UserSquema.create), this.UserController.create);
		this.router.get('/:id/exists', this.SchemaValidator.validate(UserSquema.exists), this.UserController.exists);
		this.router.put('/:id', this.SchemaValidator.validate(UserSquema.update), this.UserController.update);

		return this.router;
	}
}