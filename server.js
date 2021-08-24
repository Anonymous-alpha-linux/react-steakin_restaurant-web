///Core Modules
const http = require('http');
const fs = require('fs');
const path = require('path');

///Local Variables
const port = 3000;

///Third-party Modules
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');


///Local Import
const adminRoutes = require('./src/route/admin');
const shopRoutes = require('./src/route/shop');
const rootDir = require('./src/util/path');

///Server Initialization
const app = express();
const config = require('./webpack.config.js');
const admin = require('./src/route/admin');
const compiler = webpack(config);

///App Configuration 
app.set('view engine', 'ejs');
app.set('views', './src/View')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, '/src')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
 // res.status(404).sendFile(path.join(__dirname, 'src', 'View', '404.html'))
 res.status(404).render('404', { docTitle: 'Steak-in | 404 Error' });
 console.log()
})

app.use(webpackDevMiddleware(compiler, {
 publicPath: config.output.publicPath,
}));

app.listen(port, function () {
 console.log('Example app listening on port ' + port);
});

module.exports = app;

// const server = http.createServer((req, res) => {
//  const url = req.url;
//  const method = req.method;
//  const body = [];

//  if (url === '/') {
//   fs.readFile('index.html', function (error, data) {
//    if (error) {
//     res.write('<h1>Error: File not found</h1>');
//    }
//    else {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//    }
//   })
//   return res.end();
//  }
//  else if (url === '/message' && method === 'POST') {
//   // req.on('data', chunk => {
//   //  body.push(chunk);
//   // }).on('end', () => {
//   //  const parsedReqBody = Buffer.concat(body).toString();
//   // });
//   // res.statusCode = 302;
//   // res.setHeader('Location', '/');
//   return res.end();
//  }
// })

// server.listen(port, (error) => {
//  if (error) {
//   res.write('Error: File not found');
//  }
//  else {
//   console.log('Server is running on port ' + port);
//  }
// })

