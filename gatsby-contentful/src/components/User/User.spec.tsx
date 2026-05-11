import React from "react"
import { render } from "@testing-library/react"

// You have to write data-testid

describe("Testing for User Component", () => {
  test("Testing test", () => {
    expect(true).toBe(true)
  })

  test("Displays the correct title", () => {
    const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>
    const { getByTestId } = render(<Title />)
    expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
  })
})
