import { useStateSeoContext } from '../../../context/seo'

// Importaciones Swiper React
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Importaciones requerida para modulos swiper
import { FreeMode, Autoplay, Pagination } from 'swiper'

//Iconos
import { IoIosWater } from 'react-icons/io'

//Componentes
import * as C from '../../../components/ui'

//Estilos
import * as S from './SModernasCisternas.styles'

import tw from 'twin.macro'

import { modernasCisternasG } from './attributes'

export const SModernasCisternas = () => {
  const { seo } = useStateSeoContext()
  return (
    <S.SModernasCisternas>
      <C.Heading>
        <C.H2 as={seo ? 'h2' : 'span'} variant="secondary">
          Modernas Cisternas{' '}
          <span tw="text-blue-jeans">
            para el <br /> Transporte
          </span>{' '}
          de Agua
        </C.H2>
      </C.Heading>
      {/* Sin slider */}
      <S.SinSlider>
        {modernasCisternasG.map(info => (
          <C.Card variant="tertiary" key={info.id}>
            <C.H3 as={seo ? 'h3' : 'span'} tw="text-center">
              {info.title}
            </C.H3>
            <S.CardBody>
              {info.descriptions.map(description => (
                <S.CardDescription key={description.id}>
                  <IoIosWater size={25} color="#1C77C3" tw="flex-none" />
                  {description.des}
                </S.CardDescription>
              ))}
            </S.CardBody>
          </C.Card>
        ))}
      </S.SinSlider>
      {/* Con slider */}
      <Swiper
        tw="m-0 px-4 pb-11 lg:hidden"
        pagination={true}
        draggable={true}
        slidesPerView={1}
        spaceBetween={20}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor
      >
        {modernasCisternasG.map(info => (
          <SwiperSlide key={info.id}>
            <S.ConSlider>
              <C.Card variant="tertiary">
                <C.H3 as={seo ? 'h3' : 'span'} tw="text-center">
                  {info.title}
                </C.H3>
                <S.CardBody>
                  {info.descriptions.map(description => (
                    <S.CardDescription key={description.id}>
                      <IoIosWater size={25} color="#1C77C3" tw="flex-none" />
                      {description.des}
                    </S.CardDescription>
                  ))}
                </S.CardBody>
              </C.Card>
            </S.ConSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SModernasCisternas>
  )
}
