import tw from 'twin.macro'
import styled from 'styled-components'

export const SHeader = tw.header`fixed top-0 py-4 container z-20 w-full right-0 left-0`
export const Nav = tw.nav`relative z-10`
export const NavDesktop = tw.div`flex justify-between items-center py-3 rounded-full  transition-[box-shadow,background-color,padding] duration-500`
export const NavLogo = tw`w-[9rem] md:w-[11rem] object-contain`
export const NavList = tw.ul`hidden xl:flex gap-10 items-center font-semibold`

// export const NavMobile = tw.nav`xl:hidden bg-alice-blue fixed w-full inset-0 z-[-1] overflow-auto transition-[height] duration-500`
export const NavMobile = styled.nav`
  ${tw`xl:hidden bg-alice-blue fixed w-full inset-0 z-[-1] overflow-auto transition-[height] duration-500`}
  &::-webkit-scrollbar {
    width: 0;
  }
`
export const NavListMobile = tw.ul`flex flex-col gap-[1.3rem] items-center font-bold text-bright-navy-blue font-ubuntu min-h-screen justify-center w-[85%] mx-auto pt-[100px] pb-[50px] max-w-[600px]`

export const NavLinkMobile = tw.a`text-center block p-4 rounded-xl hover:bg-[#e4eeff] transition-colors duration-500`

export const NavHrMobile = tw.hr`bg-light-cobalt-blue/30 h-[3px] mt-[1.3rem]`

export const Hr = tw.hr`h-[4px] absolute -bottom-2 rounded-full w-0 transition-[width,background-color] duration-500 group-hover:bg-bright-navy-blue group-hover:w-full`

export const HrWhiteInicio = tw.hr`h-[4px]  absolute -bottom-2 bg-white w-full rounded-full`

export const HrWhiteHover = tw.hr`h-[4px] absolute -bottom-2 w-0 transition-[width,background-color] duration-500 group-hover:bg-white group-hover:w-full rounded-full`
