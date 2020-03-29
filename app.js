const { Album, Track } = require('./models');

var express = require('express')
var path = require('path')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

app = express();
app.set('port', 3002);

// setup handlebars and the view engine for res.render calls
// (more standard to use an extension like 'hbs' rather than
//  'html', but the Universiry server doesn't like other extensions)
app.set('view engine', 'html');
app.engine('html', expressHandlebars({
    extname: 'html',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.use(express.static(path.join(__dirname, 'static')))


app.get("/albums", function (req, res) {
    Album.findAll().then(albums => {
        //for your own debugging purposes
        console.log(JSON.stringify(albums,null,4));

        res.render('albums', {albums: albums});
    })
});

var server = app.listen(app.get('port'), function () {
    console.log("Server started...")
});


