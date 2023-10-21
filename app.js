const express = require ('express')
const app = express()
const routers = require ('./routes')
const port = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use(routers)


if (process.env.NODE_ENV != "test"){
    app.listen(port, () => {
        console.log(`App Started on http://localhost:${port}`)
    })
}

module.exports = app