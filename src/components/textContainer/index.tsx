import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'

//styles
import { Container, TextEditorContainer } from './styles'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

//image
import Arrow from '../../images/arrow.png'
import Itens from '../../images/itens.png'

//services
import { api } from '../../services/api'

interface TextFieldProps {
  handleClosePostContainer: () => void
}

export function TextField({ handleClosePostContainer }: TextFieldProps) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [text, setText] = useState('')

  async function handlePostText() {
    if (text.length === 0) {
      toast.error('Add some text to your post')
    } else {
      await api
        .post('api/posts', {
          userName: 'Raphael Msquita',
          userProfileImgUrl:
            'https://avatars.githubusercontent.com/u/75806678?s=400&u=c48c0769eb567e15178d7a0a5eb975a178b17ae1&v=4',
          comment: text,
          validated: true,
        })
        .then((response) => {
          toast.success('You post was recived successfully')
          handleClosePostContainer()
          setText('')
          setEditorState(EditorState.createEmpty())
        })
        .catch((error) => {
          throw error
        })
    }
  }

  function onEditorStateChange(editorState: any) {
    setEditorState(editorState)

    const text = convertToRaw(editorState.getCurrentContent())
    const content = text.blocks[0].text

    setText(content)
  }

  return (
    <Container>
      <section>
        <img src={Arrow} alt='arrow' className='arrow' />
        <h1>Invest in Local Food and Sustainability</h1>
        <img src={Itens} alt='itens' className='itens' />
      </section>
      <TextEditorContainer>
        <Editor
          editorState={editorState}
          toolbarClassName='toolbarClassName'
          wrapperClassName='wrapperClassName'
          editorClassName='editorClassName'
          onEditorStateChange={onEditorStateChange}
          placeholder='Write your post'
        />
      </TextEditorContainer>
      <button onClick={() => handlePostText()}>Reply</button>
    </Container>
  )
}
