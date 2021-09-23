import styled from 'styled-components'

interface PostContainerProps {
  bottom: string
}

export const Container = styled.div`
  position: relative;
`
export const PostContainer = styled.div<PostContainerProps>`
  position: fixed;
  bottom: ${(props) => props.bottom};
  width: 90%;
  max-width: 1080px;
  padding: 0rem 1rem 0 1rem;
  background-color: white;
  transition: all 0.3s;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  -webkit-box-shadow: 0px 48px 50px 32px #a9a9a9;
  box-shadow: 0px 48px 50px 32px #a9a9a9;
  height: 31rem;
  section {
    position: relative;
    width: 100%;
    height: 1.6rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    cursor: pointer;
    span {
      position: absolute;
      display: block;
      content: '';
      width: 4rem;
      height: 3px;
      background-color: #0092db;
      left: 50%;
      transform: translateX(-50%);
      top: 50%;
      z-index: 1;
    }
  }
`
