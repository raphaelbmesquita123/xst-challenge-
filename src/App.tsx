import React, { useEffect, useState } from 'react'

//components
import { Posts } from './components/post'

//styles
import { GlobalStyle } from './styles/global'
import { Container, PostContainer } from './styles/styles'

//services
import { api } from './services/api'

//props
// interface PostsProps2 {
//   post: [
//     {
//       userName: string
//       id: string
//       postedOn: string
//       comment: string
//       userProfileImgUrl: string
//       validated: boolean
//     }
//   ]
// }

export default function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    api
      .get(`/api/posts?page=${page}`)
      .then((response) => {
        const xxx = response.data.posts
        
        const validatedPosts = xxx.map((x) => {
          if(x.validated) {
            return x
          }
        })
        console.log(response.data.posts[0].validated)
        setPosts(response.data.posts)
        setLoading(false)
      })
      .catch((err) => {
        throw err
      })
  }, [page])

  return (
    <Container>
      <GlobalStyle />
      <h1>oi</h1>
      {loading
        ? 'loading'
        : posts.map((post) => {
            return (
              <div>
                <Posts post={post} />
              </div>
            )
          })}
      <PostContainer></PostContainer>
    </Container>
  )
}
