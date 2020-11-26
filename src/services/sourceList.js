import axios from 'axios';

const API_KEY = '099148be22804e849a0c6fe022b7cf5e';

export async function getSourceList() {
  const response = await axios
    .get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`, { params: { 
			_limit: 10}
		})
    .catch((error) => console.log(error.response.data.message));
  return response.data.sources;
}


// filter valu by typing
export async function getContentByFilter(value) {
	const response = await axios
	.get(`https://newsapi.org/v2/top-headlines?q=${value}&apiKey=${API_KEY}`, { params: { 
			_limit: 10}
		})
    .catch((error) => console.log(error));
  return response.data.sources;
}