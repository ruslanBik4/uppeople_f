const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    // app.use(createProxyMiddleware('http://f2.uppeople.space/api', { target: 'http://api.uppeople.local/api', changeOrigin: true }));
    app.use(createProxyMiddleware('/api', { target: 'http://api.uppeople.local/api', changeOrigin: true }));
};
