import axios from 'axios';

export default axios.create({
  baseURL: 'https://zoomy-1ot3.onrender.com',
});

//"start": "node ./backend/server.js",
//"start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
