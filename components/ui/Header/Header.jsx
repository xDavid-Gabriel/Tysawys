import { useState, useEffect } from 'react'
import Link from 'next/link'
//Componentes
import * as C from '../'
//Estilos
import * as S from './Header.styles'

//Iconos
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'

import tw from 'twin.macro'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(null)
  const [scrollY, setScrollY] = useState(null)
  const [navigation, setNavigation] = useState(null)

  //Ojo: Utilizamos el useEffect ya que esto se ejecuta del lado cliente para las interaciones, si lo llamamos fuera tendriamos que hacer una validacion para que no choque con el lado del servidor
  useEffect(() => {
    //Para el redimencion de la pantalla
    function handleResize() {
      setScreenWidth(window.innerWidth)
      if (window.innerWidth >= 1280) {
        setMenuOpen(false)
      }
    }
    handleResize()
    //Para hacer Scroll
    function handleScroll() {
      setScrollY(window.scrollY)
    }

    handleScroll()
    //Para el redimencion de la pantalla
    window.addEventListener('resize', handleResize)

    //Para hacer Scroll
    window.addEventListener('scroll', handleScroll)

    //S.Navegación activo
    const sections = document.querySelectorAll('section')

    const options = {
      threshold: '0.6',
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setNavigation(entry.target.id)
        }
      })
    }, options)

    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      //Para hacer el redimencionamiento
      window.removeEventListener('resize', handleResize)
      //Para hacer Scroll
      window.removeEventListener('scroll', handleScroll)

      //Para Intersection Observer
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WDP8K7Q"
          height="0"
          width="0"
          tw="hidden invisible"
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <S.SHeader>
        <S.Nav>
          <S.NavMobile css={menuOpen ? tw`h-screen` : tw`h-0`}>
            <S.NavListMobile
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li
                tw="w-full"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <S.NavLinkMobile
                  itemProp="item"
                  itemID="#inicio"
                  onClick={() => setMenuOpen(false)}
                  href="#inicio"
                  css={navigation === 'inicio' ? tw`bg-[#e4eeff]` : ''}
                >
                  INICIO
                  <span tw="hidden" itemProp="name">
                    Inicio
                  </span>
                </S.NavLinkMobile>
                <meta tw="hidden" itemprop="position" content="1" />
                <S.NavHrMobile />
              </li>
              <li
                tw="w-full"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <S.NavLinkMobile
                  itemProp="item"
                  itemID="#nosotros"
                  onClick={() => setMenuOpen(false)}
                  href="#nosotros"
                  css={navigation === 'nosotros' ? tw`bg-[#e4eeff]` : ''}
                >
                  NOSOTROS
                  <span tw="hidden" itemProp="name">
                    Nosotros
                  </span>
                </S.NavLinkMobile>
                <meta tw="hidden" itemprop="position" content="2" />
                <S.NavHrMobile />
              </li>
              <li
                tw="w-full"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <S.NavLinkMobile
                  itemProp="item"
                  itemID="#trans-agua-potable"
                  onClick={() => setMenuOpen(false)}
                  href="#trans-agua-potable"
                  css={
                    navigation === 'trans-agua-potable' ? tw`bg-[#e4eeff]` : ''
                  }
                >
                  TRANSPORTE DE AGUA
                  <span tw="hidden" itemProp="name">
                    Transporte de Agua
                  </span>
                </S.NavLinkMobile>
                <meta tw="hidden" itemprop="position" content="3" />
                <S.NavHrMobile />
              </li>
              <li
                tw="w-full"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <S.NavLinkMobile
                  itemProp="item"
                  itemID="#uni-cisternas"
                  onClick={() => setMenuOpen(false)}
                  href="#uni-cisternas"
                  css={navigation === 'uni-cisternas' ? tw`bg-[#e4eeff]` : ''}
                >
                  ALQUILER DE CISTERNAS
                  <span tw="hidden" itemProp="name">
                    Alquiler de Camiones Cisterna
                  </span>
                </S.NavLinkMobile>
                <meta tw="hidden" itemprop="position" content="4" />
                <S.NavHrMobile />
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <C.Button
                  itemProp="item"
                  itemID="#contacto"
                  onClick={() => setMenuOpen(false)}
                  variant="primary"
                  href="#contacto"
                >
                  CONTACTO
                  <span tw="hidden" itemProp="name">
                    Contacto
                  </span>
                </C.Button>
                <meta tw="hidden" itemprop="position" content="5" />
              </li>
            </S.NavListMobile>
          </S.NavMobile>
          <S.NavDesktop
            css={
              menuOpen || scrollY > 0
                ? tw`shadow-primary-blue-300 bg-alice-blue px-7`
                : ''
            }
          >
            <Link href="/">
              {scrollY || menuOpen ? (
                <C.OptimizedImg
                  stylesTw={S.NavLogo}
                  src="/images/general/tysawys-logo.svg"
                  alt="Logo tysawys"
                />
              ) : (
                <C.OptimizedImg
                  stylesTw={S.NavLogo}
                  src="/images/general/tysawys-positivo.svg"
                  alt="Logo tysawys"
                />
              )}
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              tw="cursor-pointer xl:hidden"
            >
              {menuOpen ? (
                <RiCloseLine color="#1C77C3" size={35} />
              ) : (
                <GiHamburgerMenu
                  color={scrollY ? '#1C77C3' : '#fff'}
                  size={35}
                />
              )}
            </button>
            {/* La lista de enlaces Desktop*/}
            <S.NavList
              css={scrollY ? tw`text-bright-navy-blue` : tw`text-white`}
            >
              <li tw="relative" className="group">
                <a href="#inicio">INICIO</a>
                {scrollY ? (
                  <S.Hr
                    css={
                      navigation === 'inicio'
                        ? tw`w-full bg-bright-navy-blue`
                        : ''
                    }
                  />
                ) : (
                  <S.HrWhiteInicio />
                )}
              </li>
              <li tw="relative" className="group">
                <a href="#nosotros">NOSOTROS</a>
                {scrollY ? (
                  <S.Hr
                    css={
                      navigation === 'nosotros'
                        ? tw`w-full bg-bright-navy-blue`
                        : ''
                    }
                  />
                ) : (
                  <S.HrWhiteHover />
                )}
              </li>
              <li tw="relative" className="group">
                <a href="#trans-agua-potable">TRANSPORTE DE AGUA</a>
                {scrollY ? (
                  <S.Hr
                    css={
                      navigation === 'trans-agua-potable'
                        ? tw`w-full bg-bright-navy-blue`
                        : ''
                    }
                  />
                ) : (
                  <S.HrWhiteHover />
                )}
              </li>
              <li tw="relative" className="group">
                <a href="#uni-cisternas">ALQUILER DE CISTERNAS</a>
                {scrollY ? (
                  <S.Hr
                    css={
                      navigation === 'uni-cisternas'
                        ? tw`w-full bg-bright-navy-blue `
                        : ''
                    }
                  />
                ) : (
                  <S.HrWhiteHover />
                )}
              </li>
              <li>
                <C.Button
                  href="#contacto"
                  variant={scrollY ? 'primary' : 'secondary'}
                >
                  CONTACTO
                </C.Button>
              </li>
            </S.NavList>
          </S.NavDesktop>
        </S.Nav>
      </S.SHeader>
    </>
  )
}
