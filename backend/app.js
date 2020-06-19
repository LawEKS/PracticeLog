const express = require("express")
const app = express()

const { practices } = require("./router")

function logRequestInfo(req, _res, next) {
  const { method, path } = req
  console.log(method, path)
  next()
}

app.use(logRequestInfo)
app.use("/practices", practices)

module.exports = app
