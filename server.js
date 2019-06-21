const express = require('express');
const compression = require('compression');
const path = require('path');
const https = require('https');
const fs = require('fs');

const port = process.env.PORT || 8080;
const app = express();

app.use(compression());
app.use(express.static(__dirname + '/static', {
  maxAge: 31557600000
}));
app.get('*', (_, response) => {
  response.sendFile(path.resolve(__dirname + '/static', 'index.html'));
});

https.createServer({
  key: fs.readFileSync('cert/localhost.key'),
  cert: fs.readFileSync('cert/localhost.crt')
}, app)
.listen(port, () => {
  console.log(`Server started on port ${port}. Visit https://localhost:${port}/`);
  console.log('Press CTRL + C to stop the server');
});
