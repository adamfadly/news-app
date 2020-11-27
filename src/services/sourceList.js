import axios from 'axios';

const API_KEY = 'eaa83bedb0fa434fa6a6aaa481cb4d1a';

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
  return response.data.articles;
}

