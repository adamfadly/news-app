import axios from 'axios';

const API_KEY = 'd786172fe207489fbd36c0d9a4849f7f';

export async function getSourceList() {
  const response = await axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`, { params: { 
			_limit: 10}
		})
    .catch((error) => console.log(error.response.data.message));
  return response.data.articles;
}


// filter valu by typing
export async function getContentByFilter(value) {
	const response = await axios
	.get(`https://newsapi.org/v2/top-headlines?q=${value}&apiKey=${API_KEY}`, { params: { 
			_limit: 10}
		})
    .catch((error) => console.log(error.response.data.message));
  return response.data.articles;
}

