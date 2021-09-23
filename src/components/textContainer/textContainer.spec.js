import { render, screen } from '@testing-library/react'
import { TextField } from './'

describe('TextField Component', () => {
  it('Rendering User Name', () => {
    render(
      <TextField
      ></TextField>
    )
    expect(screen.getByText('Invest in Local Food and Sustainability')).toBeInTheDocument
  })
})
