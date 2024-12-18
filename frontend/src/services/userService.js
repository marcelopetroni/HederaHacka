import axios from 'axios';

const API_URL = 'https://hederahacka-production.up.railway.app';

export const userService = {
	getAllUsers: async () => {
		try {
			const response = await axios.get(`${API_URL}/users`);
			return response.data;
		} catch (error) {
			console.error('Error fetching users:', error);
			throw error;
		}
	},

	login: async () => {
		try {
			const response = await axios.post(`${API_URL}/login`);
			return response.data;
		} catch (error) {
			console.error('Error fetching users:', error);
			throw error;
		}
	},

	createUser: async (userData) => {
		try {
			const response = await axios.post(`${API_URL}/users/create-user`, userData);
			return response.data;
		} catch (error) {
		console.error('Error creating user:', error);
			throw error;
		}
	},

	updateUser: async (userData) => {
		try {
			const response = await axios.put(`${API_URL}/users/update-user`, userData);
			return response.data;
		} catch (error) {
			console.error('Error updating user:', error);
			throw error;
		}
	},
};
