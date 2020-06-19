const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection

db.on("error", (error) => {
  console.error("connection error:", error)
})

db.once("open", function () {
  console.log("we're connected to mongodb atlas")
})

module.exports = mongoose
