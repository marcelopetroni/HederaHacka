import { ValidationError } from 'yup';

export default class SchemaValidator {
	static validate(schema) {
		return async (req, res, next) => {
			try {
				if (req.body) {
					await schema.body.validate(req.body, { abortEarly: false });
				}
				if (req.params) {
					await schema.params.validate(req.params, { abortEarly: false });
				}
				next();
			} catch (error) {
				if (error instanceof ValidationError) {
					return res.status(400).json({
						message: 'Validation failed',
						errors: error.errors,
					});
				}
				return res.status(500).json({ message: 'Internal Server Error' });
			}
		};
	}
}
