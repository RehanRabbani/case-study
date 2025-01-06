
import axios from "axios";
const API_KEY = "use your key";
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

