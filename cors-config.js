module.exports = {
  origin: [
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'https://daplixo.github.io' // for GitHub Pages
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'x-auth-token',
    'cache-control',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin'
  ],
  exposedHeaders: ['x-auth-token']
};
