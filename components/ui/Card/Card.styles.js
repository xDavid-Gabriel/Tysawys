import tw, { styled } from 'twin.macro'
import { cardVariants } from './Card.variants'

export const Card = styled.div(() => [
  tw`bg-alice-blue rounded-3xl shadow-primary-blue-100 flex flex-col text-center`,
  ({ variant = 'primary' }) => cardVariants[variant],
])

// export const NServicio = tw.span`rounded-full bg-bright-navy-blue py-[6px] px-[13px] shadow-primary-white-200 text-white font-bold lg:text-3xl lg:px-5 lg:py-3 lg:mb-4`

// export const Img = tw.img`w-44 h-32 mx-auto`

// export const List = tw.ul`text-start flex flex-col gap-2 text-granite-gray w-full justify-self-start lg:mb-7`
