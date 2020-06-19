import React, { useState, useEffect } from "react"
import "./App.css"
import { getAllPractices } from "./api"

function PracticeList() {
  const [practices, setPractices] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!practices) {
      async function fetchPractices() {
        setLoading(true)
        const data = getAllPractices()
        setPractices(data)
        setLoading(false)
      }
      fetchPractices()
    }
  }, [practices])

  if (loading) {
    return <p>loading</p>
  }

  if (!practices || !practices.length) {
    return <p>You have not logged a practice yet</p>
  }

  return (
    <ul>
      {practices.map((item) => (
        <pre key={item.id}>
          <code>{JSON.stringify(item, null, 2)}</code>
        </pre>
      ))}
    </ul>
  )
}

function App() {
  return (
    <div className="App">
      <PracticeList />
    </div>
  )
}

export default App
