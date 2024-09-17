import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('Deve ter heading', () => {
    //render
    const { container } = render(<Main />)
    //busca elemento e verifica existencia
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('fundo é azul marinho', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
