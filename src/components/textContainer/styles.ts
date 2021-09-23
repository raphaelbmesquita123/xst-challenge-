import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: blue;
  height: 100%;
  section {
    display: flex;
    align-items: center;
    padding: 2.5rem 0;
    margin-top: 0.2rem;
    h1 {
      margin-right: auto;
      margin-left: 1rem;
      font-size: 1.2rem;
      color: black;
    }
  }

  button {
    margin-top: 1rem;
    padding: 1rem 4rem;
    background-color: #0092db;
    align-self: flex-start;
    margin-bottom: 1rem;
    border-radius: 10px;
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
      filter: brightness(0.9);
    }
    &:active {
      transform: scale(0.98);
    }
  }
`
export const TextEditorContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 1rem;
  margin: 0 auto;
  overflow-y: scroll;
  background: var(--gray);
  border-radius: 10px;
  color: black;
`
