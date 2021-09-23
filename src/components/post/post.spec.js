import { render, screen } from '@testing-library/react'
import { Posts } from './'

describe('Post Component', () => {
  it('Rendering User Name', () => {
    render(
      <Posts
        post={{
          userName: 'John Doe',
        }}
      ></Posts>
    )
    expect(screen.getByText('John Doe')).toBeInTheDocument
  })

  it('Rendering User Comment', () => {
    render(
      <Posts
        post={{
          comment: 'Lorem ipsum dolor sit amet',
        }}
      ></Posts>
    )
    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument
  })
})
