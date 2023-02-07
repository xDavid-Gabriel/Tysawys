import { BsWhatsapp } from 'react-icons/bs'
import tw, { styled } from 'twin.macro'

export const SocialNetworks = tw.div`fixed right-2 bottom-2 flex z-30 `

export const Whatsapp = tw(
  BsWhatsapp,
)`bg-whatsapp rounded-full p-3 hover:bg-whatsapp/90 transition-colors duration-200 lg:h-20 lg:w-20 lg:p-4`
