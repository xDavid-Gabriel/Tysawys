import * as C from '../../../components/ui'
import * as S from './SServicios.styles'
import { useStateSeoContext } from '../../../context/seo'
import { servicios } from './attributes'
import tw from 'twin.macro'

export const SServicios = () => {
  const { seo } = useStateSeoContext()

  return (
    <S.Servicios>
      <S.Picture>
        <C.OptimizedImg
          stylesTw={S.Img}
          src="/images/general/01.webp"
          alt="Fondo de la sección servicios"
        />
      </S.Picture>
      <S.Inner>
        <C.Heading>
          <C.H2 as={seo ? 'h2' : 'span'}>Nuestros Servicios</C.H2>
          <p tw="leading-5 max-w-[947px]">
            Brindamos servicios de calidad cumpliendo con todos los estándares
            de calidad y con los protocolos de bioseguridad, con una flota
            moderna de vehículos cisternas con certificación de desinfección e
            higiene
          </p>
        </C.Heading>
        <C.Cards>
          {servicios.map(servicio => (
            <C.Card key={servicio.id}>
              <span tw="rounded-full bg-bright-navy-blue py-[6px] px-[13px] shadow-primary-white-200 text-white font-bold lg:text-3xl lg:px-5 lg:py-3 lg:mb-4">
                {servicio.id}
              </span>
              <C.H3>{servicio.titulo}</C.H3>
              <ul tw="text-start flex flex-col gap-2 text-granite-gray w-full justify-self-start lg:mb-7">
                {servicio.items.map(item => (
                  <li key={item.id}>{item.descripcion}</li>
                ))}
              </ul>
              <C.Button
                href={servicio.href}
                css={servicio.id === 2 && tw`mt-auto`}
              >
                VER MÁS
              </C.Button>
            </C.Card>
          ))}
        </C.Cards>
      </S.Inner>
    </S.Servicios>
  )
}
