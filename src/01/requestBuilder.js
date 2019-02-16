import axios from 'axios';

export default (host = 'http://ip-api.com/json/') => async (ip = '') => {
  const response = await axios.get(`${host}${ip}`);
  return response;
};
