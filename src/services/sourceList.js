import axios from "axios";

const API_KEY = "d786172fe207489fbd36c0d9a4849f7f";
const BASE_URL = "https://newsapi.org/v2/top-headlines?";

export async function topHeadlines() {
  const response = await axios
    .get(`${BASE_URL}country=us&apiKey=${API_KEY}`)
    .catch((error) => console.log(error.response.data.message));
  // console.log(response.data.articles);

  let data = response.data.articles;
  let news = [];
  data.map((item, index) => {
    let headlines = new Object();

    headlines.id = index + 1;
    headlines.author = item.author;
    headlines.content = item.content;
    headlines.description = item.description;
    headlines.publishedAt = item.publishedAt;
    headlines.name = item.source.name;
    headlines.title = item.title;
    headlines.url = item.url;
    headlines.picture = item.urlToImage;
    news.push(headlines);
  });

  return news;
}

// filter value by typing
export async function topHeadlinesByFilter(value) {
  const response = await axios
    .get(`${BASE_URL}q=${value}&apiKey=${API_KEY}`)
    .catch((error) => console.log(error.response.data.message));

  let data = response.data.articles;
  let news = [];
  data.map((item, index) => {
    let headlines = new Object();
    headlines.id = index + 1;
    headlines.author = item.author;
    headlines.content = item.content;
    headlines.description = item.description;
    headlines.publishedAt = item.publishedAt;
    headlines.name = item.source.name;
    headlines.title = item.title;
    headlines.url = item.url;
    headlines.picture = item.urlToImage;
    news.push(headlines);
  });

  return news;
}
