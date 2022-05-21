const axios = require('axios');
require('dotenv').config();
const { API_ENDPOINT, API_KEY } = process.env;

exports.handler = async function ({ body }) {
  const options = JSON.parse(body);
  const { keyword = '', page = 1 } = options;
  const { data } = await axios({
    url: `${API_ENDPOINT}?apikey=${API_KEY}&s=${keyword}&page=${page}`,
    method: 'POST'
  });
  return  {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
