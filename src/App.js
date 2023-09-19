import React, { useState, useEffect } from 'react'

import './tailwind-config.js'

export default function App() {
  const [code, setCode] = useState('')

  useEffect(() => {
    const savedCode = localStorage.getItem('code')
    if (savedCode) {
      setCode(savedCode)
    }
  }, [])

  const handleChange = event => {
    const newCode = event.target.value
    setCode(newCode)
    localStorage.setItem('code', newCode)
  }

  const wordCount = code.trim().split(/\s+/).length

  return (
    <div className="p-2 bg-blue-100">
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
        My Daily Journal 📕🙂
      </h1>
      <textarea
        className="w-full h-64 mt-4 p-2 border rounded"
        value={code}
        onChange={handleChange}
      />
      <p className="mt-2">Word Count: {wordCount}</p>
    </div>
  )
}