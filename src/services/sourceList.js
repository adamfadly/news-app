import axios from 'axios';


export async function getSourceList() {
  const response = await axios
    .get('https://newsapi.org/v2/sources?apiKey=099148be22804e849a0c6fe022b7cf5e')
    .catch((error) => console.log(error));
  return response.data.sources;
}
