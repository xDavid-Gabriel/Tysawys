import tw, { styled } from 'twin.macro'
import { headingVariants } from './Heading.variants'

export const Heading = styled.header(() => [
  ({ variant = 'primary' }) => headingVariants[variant],
])
