import axios from 'axios';

const API_KEY = 'd786172fe207489fbd36c0d9a4849f7f';
const BASE_URL = 'https://newsapi.org/v2/top-headlines?'

export async function topHeadlines() {
  const response = await axios
    .get(`${BASE_URL}country=us&apiKey=${API_KEY}`)
    .catch((error) => console.log(error.response.data.message));
  return response.data.articles;
}

// filter value by typing
export async function topHeadlinesByFilter(value) {
	const response = await axios
	  .get(`${BASE_URL}q=${value}&apiKey=${API_KEY}`)
    .catch((error) => console.log(error.response.data.message));
  return response.data.articles;
}
