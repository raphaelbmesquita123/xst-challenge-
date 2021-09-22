import React from 'react'

//styles
import { Container } from './styles'

//images
import Like from '../../images/like.png'
import Share from '../../images/share.png'
import Dots from '../../images/dots.png'

//props
interface PostsProps {
  post: {
    userName: string
    id: string
    postedOn: string
    comment: string
    userProfileImgUrl: string
    validated: boolean
  }
}

export function Posts({ post }: PostsProps) {
  return (
    <Container>
      <div>
        <img src={post.userProfileImgUrl} alt='profile' />
        <main>
          <h2>{post.userName}</h2>
          <p>{post.comment}</p>
        </main>
      </div>
      <section>
        <img src={Like} alt='Like button ' />
        <img src={Share} alt='Share button ' />
        <img src={Dots} alt='Bots button' />
      </section>
    </Container>
  )
}
