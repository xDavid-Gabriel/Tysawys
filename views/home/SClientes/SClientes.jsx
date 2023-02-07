import { useStateSeoContext } from '../../../context/seo'
import * as S from './SClientes.styles'
import * as C from '../../../components/ui'
import 'twin.macro'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { clientes } from './attributes'
import tw from 'twin.macro'

import { Autoplay, Pagination } from 'swiper'

export const SClientes = () => {
  const { seo } = useStateSeoContext()

  return (
    <S.Clientes>
      <C.Heading>
        <C.H2 as={seo ? 'h2' : 'span'} variant="tertiary">
          Nuestros
          <span tw="text-bright-navy-blue"> Clientes</span>
        </C.H2>
        <p tw="text-granite-gray">
          Confían y garantizan nuestra calidad de servicio
        </p>
      </C.Heading>
      <Swiper
        tw="w-full h-full pb-11 xl:pb-28"
        // loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={20}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {clientes.map(cliente => (
          <SwiperSlide key={cliente.id}>
            <C.Card variant="quaternary">
              <picture>
                <C.OptimizedImg
                  stylesTw={tw`w-44 h-32 mx-auto`}
                  src={cliente.imgMobile}
                  alt={cliente.alt}
                />
              </picture>
            </C.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Clientes>
  )
}
