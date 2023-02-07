// Importaciones Swiper React
import { Swiper, SwiperSlide } from 'swiper/react'

//Estilos para el swiper
import 'swiper/css'
// Importaciones Swiper estilos
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

// Importaciones requerida para modulos
import { FreeMode, Autoplay, Navigation } from 'swiper'

//Componente
import * as C from '../'

//Estilos
import * as S from './Hero.styles'
import tw from 'twin.macro'

//Para el seo
import { useStateSeoContext } from '../../../context/seo'
export const Hero = ({
  title = 'Transporte de agua potable las 24 horas',
  description = 'Contamos con flota propia, atendemos los 365 días del año ',
}) => {
  const { seo } = useStateSeoContext()

  return (
    <S.SHero id="inicio">
      <S.Picture>
        <C.OptimizedImg
          priority={true}
          src="/images/general/03.webp"
          alt="Hero"
          stylesTw={tw`relative -z-10 aspect-video`}
        />
      </S.Picture>
      <S.HeroInner>
        <S.HeroContent>
          {/* Importante para desactivar el Seo y activarlo */}
          {seo ? (
            <h1 tw="text-dynamic-100">{title}</h1>
          ) : (
            <span tw="text-dynamic-100">{title}</span>
          )}

          <p>{description}</p>
          <C.Button href="#nivel-nacional" variant="secondary">
            VER MÁS
          </C.Button>
        </S.HeroContent>

        {/* El slider */}

        <Swiper
          className="swiper--hero"
          navigation={true}
          breakpoints={{
            800: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          draggable={true}
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <figure tw="relative h-full">
              <C.OptimizedImg
                stylesTw={S.HeroSwiperImg}
                src="/images/general/02.webp"
                alt="Cisternas"
              />
              <S.HeroSwiperSpan>Industrias</S.HeroSwiperSpan>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure tw="relative h-full">
              <C.OptimizedImg
                stylesTw={S.HeroSwiperImg}
                src="/images/general/01.webp"
                alt="Cisternas"
              />
              <S.HeroSwiperSpan>Carreteras</S.HeroSwiperSpan>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure tw="relative h-full">
              <C.OptimizedImg
                stylesTw={S.HeroSwiperImg}
                src="/images/general/04.webp"
                alt="Cisternas"
              />
              <S.HeroSwiperSpan>Piscinas</S.HeroSwiperSpan>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure tw="relative h-full">
              <C.OptimizedImg
                stylesTw={S.HeroSwiperImg}
                src="/images/general/10.webp"
                alt="Cisterna"
              />
              <S.HeroSwiperSpan>Obras</S.HeroSwiperSpan>
            </figure>
          </SwiperSlide>
        </Swiper>
      </S.HeroInner>
    </S.SHero>
  )
}
