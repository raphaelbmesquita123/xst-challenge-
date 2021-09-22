import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

//components
import { Posts } from './components/post'

//styles
import { GlobalStyle } from './styles/global'
import { Container, PostContainer } from './styles/styles'

//services
import { api } from './services/api'

//props
interface PostProps {
  userName: string
  id: string
  postedOn: string
  comment: string
  userProfileImgUrl: string
  validated: boolean
}

export default function App() {
  const [allPosts, setAllPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function getPosts() {
      await api
        .get(`/api/posts?page=${page}`)
        .then((response) => {
          const validatedPostsArray: PostProps[] = []
          response.data.posts.map((post: PostProps) => {
            if (post.validated) {
              return validatedPostsArray.push(post)
            }
          })
          setAllPosts([...allPosts, ...validatedPostsArray])
          setLoading(false)
        })
        .catch((err) => {
          throw err
        })
    }

    getPosts()
  }, [page])

  return (
    <Container>
      <GlobalStyle />

      {loading ? (
        ''
      ) : (
        <PostContainer>
          <InfiniteScroll
            dataLength={page}
            next={() => setPage(page + 1)}
            hasMore={page === 5 ? false : true}
            loader={<h4>Loading...</h4>}
          >
            {allPosts.map((post) => {
              return (
                <div key={post.id}>
                  <Posts post={post} />
                </div>
              )
            })}
          </InfiniteScroll>
        </PostContainer>
      )}
      {/* <PostContainer></PostContainer> */}
    </Container>
  )
}
