// Importaciones Swiper React
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

// Importaciones requerida para modulos swiper
import { FreeMode, Autoplay, Navigation } from 'swiper'

//Context
import { useStateSeoContext } from '../../../context/seo'

//Componentes
import * as C from '../../../components/ui'

//Estilos
import * as S from './STransporteAguaPotable.styles'
import 'twin.macro'

//Data
import { sliderTransporteAguaPotable } from './attributes'
import tw from 'twin.macro'

export const STransporteAguaPotable = () => {
  const { seo } = useStateSeoContext()

  return (
    <section tw=" pt-28" id="trans-agua-potable">
      <S.Inner>
        <C.Heading>
          <C.H2 as={seo ? 'h2' : 'span'} variant="secondary">
            Transporte <span tw="text-blue-jeans">de Agua</span> Potable
          </C.H2>
          <p>
            Nuestra experiencia nos permite gozar de la confianza de nuestra
            clientela, puesto que nos encontramos en condiciones de atender y
            abastecer, cumpliendo con los más altos estándares de seguridad,
            calidad y cuidado del medio ambiente
          </p>
        </C.Heading>

        <Swiper
          className="swiper--agua-potable"
          pagination={true}
          draggable={true}
          navigation={true}
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
          {sliderTransporteAguaPotable.map(slider => (
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
