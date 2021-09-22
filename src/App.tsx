import { useEffect, useState } from 'react'
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
  const [posts, setPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [ totalOfPages, setTotalOfPages ] = useState(1)
  console.log(totalOfPages)
  useEffect(() => {
    console.log(posts.length)
    // window.addEventListener('scroll', () => {
    //   if (
    //     window.innerHeight + window.scrollY >=
    //     document.body.offsetHeight
    //   ) {
    //     setTimeout(() => {
    //       setPage(page + 1)
    //     }, 1500)
    //   }
    // })

    async function getPosts() {
      await api
        .get(`/api/posts?page=${page}`)
        .then((response) => {
          console.log(response.data)
          const validatedPostsArray: PostProps[] = []
          response.data.posts.map((post: PostProps) => {
            if (post.validated) {
              return validatedPostsArray.push(post)
            }
          })
          setTotalOfPages(Number(response.data.total_pages))
          setPosts([...posts, ...validatedPostsArray])
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
      {/* {loading
        ? 'loading'
        : posts.map((post) => {
            return (
              <div>
                <Posts post={post} />
              </div>
            )
          })} */}
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
            {posts.map((post) => {
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
