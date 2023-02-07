import { useStateSeoContext } from '../../../context/seo'
import * as C from '../../../components/ui'

import * as S from './SProyectosNivelNacional.styles'

import 'twin.macro'

export const SProyectosNivelNacional = ({
  title,
  description,
  imgOne,
  imgAlt,
  galleryImages,
  galleryImgAlt,
}) => {
  const { seo } = useStateSeoContext()
  return (
    <S.SProyectosNivelNacional id="nivel-nacional">
      <C.H2 variant="secondary" as={seo ? 'h2' : 'span'}>
        {title}
      </C.H2>
      <S.SProyectosNivelNacionalContent>
        <figure tw="relative">
          <C.OptimizedImg
            stylesTw={S.SProyectosNivelNacionalImg}
            src={imgOne}
            alt={imgAlt}
          />
          <C.OptimizedImg
            stylesTw={S.SProyectosNivelNacionalGota}
            src="/images/general/gota.svg"
            alt="Gota"
          />
        </figure>
        <p>{description}</p>
      </S.SProyectosNivelNacionalContent>
      {/* Galleria de imagenes */}
      <S.SProyectosNivelNacionalGallery>
        {galleryImages.map(gallery => (
          <figure tw="relative" key={gallery.id}>
            <C.OptimizedImg
              stylesTw={S.SProyectosNivelNacionalImg}
              src={gallery.img}
              alt={galleryImgAlt}
            />
            <C.OptimizedImg
              stylesTw={S.SProyectosNivelNacionalGota}
              src="/images/general/gota.svg"
              alt="Gota"
            />
          </figure>
        ))}
      </S.SProyectosNivelNacionalGallery>
    </S.SProyectosNivelNacional>
  )
}
