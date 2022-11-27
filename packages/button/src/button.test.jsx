import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './button.jsx'

const buttonText = 'BUTTON TEXT'

it('renders', () => {
  const spyOnClick = jest.fn()
  render(<Button onClick={spyOnClick}>{buttonText}</Button>)

  const subject = screen.getByText(buttonText)
  expect(subject).toBeInTheDocument()
  fireEvent.click(subject, { target: 'JavaScript' })
  expect(spyOnClick).toBeCalled()
})
