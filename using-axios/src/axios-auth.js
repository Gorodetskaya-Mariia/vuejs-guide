import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://using-axios-e30c4.firebaseio.com/'
});

instance.defaults.headers.common['Something'] = 'something';

export default instance;
