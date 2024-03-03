const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.get('/baseURL', (req, res, next) => {
    res.json({ url: req?.headers['x-host-filter'] })

    next()
})
    
module.exports = app  
