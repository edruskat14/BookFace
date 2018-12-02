export const fetchNews = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=60aee6a571fa4dde8ac1ad8f0f4dd574',
    dataType: 'json'
  });
};
