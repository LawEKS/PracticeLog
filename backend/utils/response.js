function success(data = {}) {
  return {
    confirmation: "success",
    data,
  }
}

function failure(message = "") {
  return {
    confirmation: "failure",
    message,
  }
}

module.exports = { success, failure }
