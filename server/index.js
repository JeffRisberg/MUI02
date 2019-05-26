var path = require('path');
var globSync = require('glob').sync;
var express = require('express');
var app = express();

var mocks = globSync('./mocks/**/*.js', {cwd: __dirname}).map(require);

const PATH_DIST = path.resolve(__dirname, '../dist');
const PATH_PUBLIC = path.resolve(__dirname, ROOT, 'public');

app.use('/', express.static(PATH_PUBLIC));
app.use(express.static(PATH_DIST));

var nedb = require('nedb');

app.itemsDB = new nedb({filename: 'db-content/items', autoload: true});
app.eventsDB = new nedb({filename: 'db-content/events', autoload: true});

mocks.forEach(function (route) {
    route(app);
});

var server = app.listen(process.env.PORT || 3000, () => {
    var port = server.address().port;

    console.log('Server is listening at %s', port);
});
