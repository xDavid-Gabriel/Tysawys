import tw, { styled } from 'twin.macro'

export const SProyectosNivelNacional = tw.section`container flex flex-col gap-20 pt-28 mb-32`

//Para Cambiar el Seo
export const SProyectosNivelNacionalH2 = tw.h2`text-dynamic-200 text-bright-navy-blue text-center`
//Para Cambiar el Seo
export const SProyectosNivelNacionalSpan = tw.span`text-dynamic-200 text-bright-navy-blue text-center`

export const SProyectosNivelNacionalContent = tw.div`grid md:grid-cols-2 gap-9 items-center`

//export const SProyectosNivelNacionalImg = tw.img`max-w-[37rem] rounded-3xl xl:h-[17rem] 2xl:h-[25rem] [filter: drop-shadow(0px 10px 100px #AEC8F2)]`
// export const SProyectosNivelNacionalImg = styled(Image)`
//   ${tw`max-w-[37rem] rounded-3xl xl:h-[17rem] 2xl:h-[25rem] [filter: drop-shadow(0px 10px 100px #AEC8F2)]`}
// `
export const SProyectosNivelNacionalImg = tw`max-w-[37rem] rounded-3xl xl:h-[17rem] 2xl:h-[25rem] [filter: drop-shadow(0px 10px 100px #AEC8F2)]`

// export const SProyectosNivelNacionalGota = tw.img`w-[4rem] h-[4rem]  absolute top-8 left-8`
export const SProyectosNivelNacionalGota = tw`w-[4rem] h-[4rem]  absolute top-8 left-8`

export const SProyectosNivelNacionalGallery = tw.div`grid sm:grid-cols-2 xl:grid-cols-3  gap-10`
