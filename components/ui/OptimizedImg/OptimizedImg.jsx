// import Imgix from 'react-imgix'
// import 'lazysizes'
// import 'lazysizes/plugins/parent-fit/ls.parent-fit'
// import 'lazysizes/plugins/attrchange/ls.attrchange'
// import 'twin.macro'
import Image from 'next/image'

export const OptimizedImg = ({ src, alt, stylesTw, priority = false }) => {
  return (
    // <Imgix
    //   css={stylesTw}
    //   className="lazyload"
    //   width={500}
    //   height={500}
    //   src={`https://assets.tysawys.com${src}`}
    //   alt={alt}
    //   imgixParams={{ auto: 'compress,format' }}
    //   sizes="(max-width: 320px) 140vw,
    //     (max-width: 425px) 120vw,
    //     (max-width: 768px) 50vw,
    //     (max-width: 1200px) 33vw,
    //     25vw"
    //   attributeConfig={{
    //     src: 'data-src',
    //     srcSet: 'data-srcset',
    //     sizes: 'data-sizes',
    //   }}
    //   htmlAttributes={{
    //     src: 'https://i.giphy.com/media/sSgvbe1m3n93G/giphy.webp',
    //   }}
    // />
    <Image
      css={stylesTw}
      priority={priority}
      width={500}
      height={500}
      sizes="(max-width: 320px) 140vw,
  (max-width: 425px) 120vw,
  (max-width: 768px) 50vw,
  (max-width: 1200px) 33vw,
  25vw"
      src={`https://assets.tysawys.com${src}`}
      alt={alt}
    />
  )
}
