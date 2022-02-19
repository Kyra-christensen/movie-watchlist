const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async (event) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&include_adult=false&query=${event.queryStringParameters.searchQuery}`);
    const data = await response.json();
    const json = JSON.stringify({ data });
    console.log(json);
    return { 
      statusCode: 200, 
      body: JSON.stringify(json),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
