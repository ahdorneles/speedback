let express = require('express')
let app = express()
let port = 3000


app.listen(port, () => {
    console.log('Listening on 3000...')

})


app.get("/", function(req, res) {
    res.send('<h1> Welcome to the Brand New app for Speedback in NodeJS and ExpressJS</h1>');
})