const express = require("express")
const router = express.Router()

const { practices } = require("../controllers")

router.get("/", practices.getAllPractices)
router.post("/", practices.addNewPractice)
// router.get("/:weekNumber/:year", practices)
// router.put("/:id", practices)
// router.delete("/:id", practices)

module.exports = router
