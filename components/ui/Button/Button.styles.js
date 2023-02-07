import tw, { styled } from 'twin.macro'
import { buttonVariants } from './Button.variant'

export const Button = styled.a(() => [
  tw`transition duration-300 uppercase rounded-full w-fit cursor-pointer hover:scale-[0.9] `,
  ({ variant = 'primary' }) => buttonVariants[variant],
])
