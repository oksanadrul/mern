import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.create({ withCredentials: true })
  }
};

export default setAuthToken;
