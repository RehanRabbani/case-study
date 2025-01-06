
import axios from "axios";
const API_KEY = "597769d1a8c94debbcd0bcaa2cb96ef7";
const BASE_URL ="https://newsapi.org/v2/"

export const fetchArticles = async (queryParams) => {
  try {
   
    let url;
    if(queryParams){
      url = `${BASE_URL}everything`;
    }
    else{
      url = `${BASE_URL}everything?sources=bbc-news`;
    }
    console.log(queryParams,"aa");
    const { data } = await axios.get(url, {
      params: { ...queryParams, apiKey: API_KEY },
    });
    return data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

// export const fetchArticles = async (keyword, dateFrom, dateTo, category) => {
//   const response = await fetch(
//     `https://newsapi.org/v2/everything?q=${keyword}&from=${dateFrom}&to=${dateTo}&category=${category}&apiKey=${API_KEY}`
//   );
//   const data = await response.json();
//   return data.articles;
// };

// const fetchPersonalizedFeed = async (sources, categories, authors) => {
//   const response = await fetch(
//     `https://newsapi.org/v2/everything?sources=${sources}&category=${categories}&author=${authors}&apiKey=${API_KEY}`
//   );
//   const data = await response.json();
//   return data.articles;
// };

// const fetchFromMultipleSources = async (sources) => {
//   const responses = await Promise.all(sources.map(source => 
//     fetch(`https://newsapi.org/v2/everything?sources=${source}&apiKey=${API_KEY}`)
//   ));
//   const data = await Promise.all(responses.map(res => res.json()));
//   return data.flatMap(item => item.articles);
// };
