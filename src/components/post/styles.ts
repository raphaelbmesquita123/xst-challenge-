import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  margin: 1rem 0rem;
  max-height: 10rem;
  overflow: hidden;
  border-bottom: 2px solid var(--gray);
  div {
    display: flex;
    img {
      height: 2.5rem;
      border-radius: 100%;
    }
    main {
      margin-left: 1rem;
      h2 {
        font-size: 1rem;
        font-weight: bold;
      }
      p{
          max-height: 2.8rem;
          overflow: hidden;
          margin-top: 0.5rem;
          line-height: 1.4rem;
      }
    }
  }
  section {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 1rem;
      img{
          margin-left: 0.5rem;
          cursor: pointer;
      }
  }
`
