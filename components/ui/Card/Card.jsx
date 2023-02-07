import * as S from './Card.styles'

export const Card = ({ variant, children }) => {
  return <S.Card variant={variant}>{children}</S.Card>
}
