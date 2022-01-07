//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/ej2-angular-main-test'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ej2-angular-main-test/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);