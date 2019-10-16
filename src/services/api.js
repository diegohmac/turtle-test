import axios from 'axios';

const API = axios.create({
  baseURL: 'https://turtletest-5d8b4.firebaseio.com/'
});

export default API;
