import { NEWS_API_KEY, NEWS_API_BASE_URL } from "./constants";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const searchNews = (keyword) => {
  const toDate = new Date();
  const fromDate = new Date();
  fromDate.setDate(toDate.getDate() - 7);

  const to = toDate.toISOString();
  const from = fromDate.toISOString();

  const url = `${NEWS_API_BASE_URL}/everything?q=${keyword}&apiKey=${NEWS_API_KEY}&from=${from}&to=${to}&pageSize=100`;

  return fetch(url).then(checkResponse);
};
