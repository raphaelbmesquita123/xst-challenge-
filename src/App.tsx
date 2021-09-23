import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ToastContainer } from 'react-toastify'

//components
import { Posts } from './components/post'
import { TextField } from './components/textContainer'

//styles
import { GlobalStyle } from './styles/global'
import { Container, PostContainer } from './styles/styles'
import 'react-toastify/dist/ReactToastify.css'

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
  const [isPostContainerOpen, setIsPostContainerOpen] = useState(false)

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

  function handleFetchMoreData() {
    //Faking the timing from the request
    setTimeout(() => {
      setPage(page + 1)
    }, 500)
  }

  function handleClosePostContainer() {
    setIsPostContainerOpen(!isPostContainerOpen)
  }
  return (
    <Container>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />

      {loading ? (
        'Loading'
      ) : (
        <InfiniteScroll
          dataLength={page}
          next={handleFetchMoreData}
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
      )}
      <PostContainer bottom={isPostContainerOpen ? '0%' : '-29rem'}>
        <section onClick={() => handleClosePostContainer()}>
          <span></span>
        </section>
        <TextField handleClosePostContainer={handleClosePostContainer} />
      </PostContainer>
    </Container>
  )
}
