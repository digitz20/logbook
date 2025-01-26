const port = 2014
const express = require("express")

const router = require("./router/studentRouter")

const app = express()

app.use(express.json())


app.use(router)

app.listen(port, () => {
    console.log(`my server is running on port ${port}`)
})