var express = require('express')
var app = express()

app.use('/', express.static('./dist'));
app.get('/index', function (req, res) {
    return res.json("this is my server and code peace")
})
app.listen(3000  , function (err) {
    if (err) console.error(err);
    console.log(3000)
})
