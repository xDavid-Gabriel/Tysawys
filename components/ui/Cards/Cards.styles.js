import { styled } from 'twin.macro'
import { cardsVariants } from './Cards.variants'

export const Cards = styled.div(() => [
  ({ variant = 'primary' }) => cardsVariants[variant],
])
