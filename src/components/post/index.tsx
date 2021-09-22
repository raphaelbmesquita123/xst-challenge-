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
        <img src={post.userProfileImgUrl} alt='profile Image' />
        <main>
          <h2>{post.userName}</h2>
          <p>{post.comment}</p>
        </main>
      </div>
      <section>
        <img src={Like} alt='profile Image' />
        <img src={Share} alt='profile Image' />
        <img src={Dots} alt='profile Image' />
      </section>
    </Container>
  )
}
