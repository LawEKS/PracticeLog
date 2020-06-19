const { REACT_APP_API_URL } = process.env

function getJSON(response) {
  return response.json()
}

export async function getAllPractices() {
  try {
    const data = fetch(`${REACT_APP_API_URL}/practices`).then(getJSON)
    return data
  } catch (error) {
    const message = "there was a problem with the request"
    console.error(message)
    return {
      confirmation: "failure",
      message,
    }
  }
}
