const port = 2030
const express = require("express")

const router = require("./router/studentRouter")
const awardRouter = require("./router/awardRouter")

const app = express()

app.use(express.json())

app.use(awardRouter)

app.use(router)

app.listen(port, () => {
    console.log(`my server is running on port ${port}`)
})