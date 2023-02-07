import * as S from './Cards.styles'

export const Cards = ({ children, variant }) => {
  return <S.Cards variant={variant}>{children}</S.Cards>
}
