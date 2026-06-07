async function fetchNews() {
  const response = await axios.get("https://newsapi.org/v2/everything", {
    params: params
  });
  return response.data;
}

// Или если у вас экспортируемая функция:
module.exports = async function getNews() {
  const response = await axios.get("https://newsapi.org/v2/everything", {
    params: params
  });
  return response.data;
};