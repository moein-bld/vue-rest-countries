import axios from 'axios';

const baseURL = `https://restcountries.com/v2/`;
const baseHeader = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
};

export const BaseClient = axios.create({
	baseURL: baseURL,
	headers: {
		...baseHeader,
	},
});
