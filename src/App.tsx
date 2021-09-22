import React, { useEffect, useState } from 'react'

//styles
import { GlobalStyle } from './styles/global'

//services
import { api } from './services/api'

export default function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function getPosts() {
      api
        .get('/api/posts')
        .then((response) => {
          setPosts(response.data)
          setLoading(false)
        })
        .catch((err) => {
          throw err
        })
    }
    getPosts()
  }, [])
  return (
    <div>
      <GlobalStyle/>
      <h1>oi</h1>
    </div>
  )
}
