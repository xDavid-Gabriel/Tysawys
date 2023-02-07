import { useStateSeoContext } from '../../../context/seo'

// Importaciones Swiper React
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

// Importaciones requerida para modulos swiper
import { FreeMode, Autoplay, Navigation } from 'swiper'

//Componentes
import * as C from '../../../components/ui'

//Estilos
import * as S from './SAlquilerUnidadesCisternas.styles'
import tw from 'twin.macro'

//Data
import { sliderAlquilerUnidadesCisternas } from './attributes'

export const SAlquilerUnidadesCisternas = () => {
  const { seo } = useStateSeoContext()

  return (
    <section tw="mb-28 pt-28" id="uni-cisternas">
      <S.Inner>
        <C.Heading>
          <C.H2 as={seo ? 'h2' : 'span'} variant="secondary">
            Alquiler <span tw="text-blue-jeans">de Unidades</span> de Cisternas
          </C.H2>
          <p>
            Nuestra experiencia nos permite gozar de la confianza de nuestra
            clientela, puesto que nos encontramos en condiciones de atender y
            abastecer, cumpliendo con los más altos estándares de seguridad,
            calidad y cuidado del medio ambiente
          </p>
        </C.Heading>

        <Swiper
          className="swiper--uni-cisternas"
          pagination={true}
          navigation={true}
          draggable={true}
          slidesPerView={1}
          spaceBetween={30}
          modules={[FreeMode, Navigation, Autoplay]}
          breakpoints={{
            768: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {sliderAlquilerUnidadesCisternas.map(slider => (
            <SwiperSlide key={slider.id}>
              <C.Card variant="secondary">
                <C.OptimizedImg
                  stylesTw={tw`rounded-[20px]`}
                  src={slider.img}
                  alt={slider.imgAlt}
                />
                <S.CardBody>
                  <h3 tw="text-dynamic-300">{slider.title}</h3>
                  <p>{slider.description}</p>
                  <C.Button variant="primary" href={slider.href}>
                    {slider.btnLink}
                  </C.Button>
                </S.CardBody>
              </C.Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Inner>
    </section>
  )
}
