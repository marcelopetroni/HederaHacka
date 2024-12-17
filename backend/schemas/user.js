import * as yup from 'yup';
import { isValidEmail, isValidPassword, isValidName } from '../utils/utils.js';

const UserSchema = {
	create: {
		body: yup.object({
		firstName: yup.string()
			.min(3)
			.max(30)
			.test('invalidFormat', 'Invalid name format', value => isValidName(value))
			.required('First name is required'),
		lastName: yup.string()
			.min(3)
			.max(30)
			.test('invalidFormat', 'Invalid name format', value => isValidName(value))
			.required('Last name is required'),
		email: yup.string()
			.test('invalidFormat', 'Invalid email format', value => isValidEmail(value))
			.required('Email is required'),
		password: yup.string()
			.min(6, 'Password must be at least 6 characters')
			.max(30, 'Password can be up to 30 characters')
			.test('invalidFormat', 'Invalid password format', value => isValidPassword(value))
			.required('Password is required')
		}).noUnknown(),
	},

	exists: {
		body: yup.object({
			email: yup.string()
			.test('invalidFormat', 'Invalid email format', value => isValidEmail(value))
			.required('Email is required')
		}).noUnknown(),
	},

	update: {
		query: yup.object({
			id: yup.number().min(1).required('User ID is required'),
		}).noUnknown(),
		body: yup.object({
		firstName: yup.string().min(3).max(30),
		lastName: yup.string().min(3).max(30),
		email: yup.string().test('invalidFormat', 'Invalid email format', value => isValidEmail(value)),
		password: yup.string()
			.min(6, 'Password must be at least 6 characters')
			.max(30, 'Password can be up to 30 characters')
			.test('invalidFormat', 'Invalid password format', value => isValidPassword(value)),
		}).noUnknown(),
	},
};

export default UserSchema;
