const axios = require('axios');
require('dotenv').config();
const { API_ENDPOINT, API_KEY } = process.env;

exports.handler = async function ({ body }) {
  const options = JSON.parse(body);
  const { imdbID } = options;
  const { data } = await axios(`${API_ENDPOINT}?apikey=${API_KEY}&i=${imdbID}`);
  return  {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
