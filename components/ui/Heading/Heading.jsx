import * as S from './Heading.styles'

export const Heading = ({ children, variant }) => {
  return <S.Heading variant={variant}>{children}</S.Heading>
}
