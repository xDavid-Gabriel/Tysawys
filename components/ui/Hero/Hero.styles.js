import tw from 'twin.macro'

export const SHero = tw.section`grid`

export const Picture = tw.picture`block col-start-1 row-start-1 bg-bright-navy-blue-light-350`

export const HeroInner = tw.div`container col-start-1 row-start-1  grid min-h-screen 2xl:[grid-template-columns:29rem 1fr] 2xl:gap-28 content-center text-center 2xl:text-start  2xl:items-center py-[95.6px]`

export const HeroContent = tw.div`flex flex-col gap-4 2xl:w-fit relative items-center 2xl:items-start z-10 justify-center  text-white`

// export const HeroSwiperImg = styled(Image)`
//   ${tw`rounded-3xl object-center [filter: drop-shadow(0px 0px 30px rgba(58, 58, 58, 0.7));]`}
// `
export const HeroSwiperImg = tw`rounded-3xl object-center [filter: drop-shadow(0px 0px 30px rgba(58, 58, 58, 0.7));]`

export const HeroSwiperSpan = tw.span`absolute bottom-[1.5rem] left-[1.5rem] text-3xl text-white`
