import 'twin.macro'
//Componentes
import * as C from '../../../components/ui'
import * as S from './SContacto.styles'

export const SContacto = () => {
  return (
    <S.SContacto id="contacto">
      <S.Picture>
        <C.OptimizedImg
          src="/images/general/14.webp"
          alt="Contacto"
          stylesTw={S.Img}
        />
      </S.Picture>
      <div tw="container col-start-1 row-start-1 py-20 lg:py-32">
        <C.Form />
      </div>
    </S.SContacto>
  )
}
