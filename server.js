let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./router/router');
routes(app);

app.listen(port, () => {
    console.log(`running server in port ${port}`);
})