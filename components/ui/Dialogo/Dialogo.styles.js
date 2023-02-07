import tw, { styled, css } from 'twin.macro'

export const Overlay = tw.div`fixed inset-0 w-full h-full backdrop-blur-sm z-40 transition-[opacity,visibility] bg-black/10`

export const Dialog = styled.div`
  ${css`
    ${tw`fixed z-50 max-w-[90%] w-full max-h-[97%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-xl lg:max-w-2xl [background: rgba(255, 255, 255, 0.32)] rounded-[70px] [backdrop-filter: blur(20px)] flex-col h-[90vh] overflow-auto`}

    &::-webkit-scrollbar {
      ${tw`bg-transparent w-0`}
    }
  `}
`
