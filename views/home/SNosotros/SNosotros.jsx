import { useStateSeoContext } from '../../../context/seo'
// Importaciones Swiper React
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Importaciones requerida para modulos swiper
import { FreeMode, Autoplay, Pagination } from 'swiper'

//Pequeña data
import { cardMisionVision } from './attributes'

//Componentes
import * as C from '../../../components/ui'

//Estilos
import * as S from './SNosotros.styles'

import 'twin.macro'

export const SNosotros = () => {
  const { seo } = useStateSeoContext()
  return (
    <S.SNosotros id="nosotros">
      <S.Picture>
        <C.OptimizedImg
          src="/images/general/04.webp"
          alt="Nosotros"
          stylesTw={S.Img}
        />
      </S.Picture>
      <S.Inner>
        <C.Heading>
          <C.H2 as={seo ? 'h2' : 'span'}>Nosotros</C.H2>
          <p>
            Desde 1998 atendiendo el mercado nacional con puntualidad,
            responsabilidad y eficiencia
          </p>
        </C.Heading>
        {/* Con slider */}
        <Swiper
          tw="m-0 pb-11 lg:hidden"
          pagination={true}
          draggable={true}
          slidesPerView={1}
          spaceBetween={20}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {cardMisionVision.map(card => (
            <SwiperSlide key={card.id}>
              <S.Card>
                {card.icon}
                <h3 tw="text-dynamic-300">{card.title}</h3>
                <p>{card.description}</p>
              </S.Card>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Sin slider */}
        <S.Content>
          {cardMisionVision.map(card => (
            <S.Card key={card.id}>
              {card.icon}
              <h3 tw="text-dynamic-300">{card.title}</h3>
              <p>{card.description}</p>
            </S.Card>
          ))}
        </S.Content>
      </S.Inner>
    </S.SNosotros>
  )
}
