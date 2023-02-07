import tw, { styled } from 'twin.macro'
import { formVariants } from './Form.variants'

export const Form = tw.form`text-primary-100 flex flex-col gap-7 max-w-xl mx-auto w-full justify-between`

export const Content = styled.div(({ dialog }) => [
  tw`[background: rgba(255, 255, 255, 0.32)] [backdrop-filter: blur(20px)] max-w-[55rem] rounded-[70px] mx-auto px-7 flex flex-col justify-center gap-7 h-fit w-full py-16 min-h-[90vh]`,
  dialog && tw`bg-transparent backdrop-blur-none`,
])

export const Label = tw.label`flex flex-col gap-1 text-white font-medium`

export const Input = styled.input(({ textarea }) => [
  tw`border-bright-navy-blue border-2 rounded-full px-5 py-3 bg-alice-blue text-bright-navy-blue placeholder:(font-medium text-bright-navy-blue/70) focus:outline-bright-navy-blue font-medium w-full`,
  textarea && tw`rounded-[30px]`,
  ({ variant = 'primary' }) => formVariants[variant],
])
