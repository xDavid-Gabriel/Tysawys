import tw, { styled } from 'twin.macro'
import { h2Variants, h3Variants } from './Typography.variants'

export const H2 = styled.h2(() => [
  tw`font-bold font-ubuntu text-dynamic-200`,
  ({ variant = 'primary' }) => h2Variants[variant],
])

export const H3 = styled.h3(() => [
  ({ variant = 'primary' }) => h3Variants[variant],
])

//Aqui ponderemos un estilo para darle Scale a los links y se use de manera global

export const ScaleLink = tw`hover:scale-[1.1] transition duration-200`
