const express = require('express');
const compression = require('compression');
const path = require('path');

const port = process.env.PORT || 3030;
const app = express();

app.use(compression());
app.use(express.static(__dirname + '/static', {
  // maxAge: 31557600000
}));
app.get('*', (_, response) => {
  response.sendFile(path.resolve(__dirname + '/static', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}. Visit http://localhost:${port}/`);
  console.log('Press CTRL + C to stop the server');
});
