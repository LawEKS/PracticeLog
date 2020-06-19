const { success, failure } = require("../utils/response")
const { Practice } = require("../models")

function getFallbackData() {
  return [
    {
      id: 1,
      title: "flute",
      duration: 20,
      date: "1592434800000",
    },
    {
      id: 2,
      title: "flute",
      duration: 30,
      date: "1592348400000",
    },
    {
      id: 3,
      title: "flute",
      duration: 20,
      date: "1592348400000",
    },
  ]
}

async function getAllPractices(req, res) {
  try {
    // TODO: fix getting data from atlas
    let data = await Practice.find()

    if (!data || !data.length) {
      // @ts-ignore
      data = getFallbackData()
    }
    res.status(200).json(success(data))
  } catch (error) {
    res.status(500).json(failure(`An error occurred: ${error.message}`))
  }
}

function addNewPractice(req, res) {
  res.status(201).json(success())
}

module.exports = {
  getAllPractices,
  addNewPractice,
}
