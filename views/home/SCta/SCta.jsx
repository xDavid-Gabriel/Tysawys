import * as S from './SCta.styles'
import * as C from '../../../components/ui'

export const SCta = () => {
  return (
    <S.Cta>
      <S.Picture>
        <C.OptimizedImg
          stylesTw={S.Img}
          src="/images/general/09.webp"
          alt="Fondo de cta"
        />
      </S.Picture>
      <S.Inner>
        <C.H2>SI DESEAS COTIZAR DÉJANOS UN MENSAJE</C.H2>
        <C.Button href="#contacto" variant="secondary">
          Contactar
        </C.Button>
      </S.Inner>
    </S.Cta>
  )
}
