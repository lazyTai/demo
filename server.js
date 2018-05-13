var express = require('express')
var app = express()

app.use(express.static('./'));
app.listen(4000, function (err) {
    if (err) {
        console.error(err)
    }
    console.log("listen 4000")
})
