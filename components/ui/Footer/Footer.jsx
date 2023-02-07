import 'twin.macro'
import * as C from '../'
import * as S from './Footer.styles'
import { useStateSeoContext } from '../../../context/seo'
import { CgFacebook } from 'react-icons/cg'

export const Footer = ({ setIsDialogOpen, setNumber }) => {
  const { seo } = useStateSeoContext()
  return (
    <S.SFooter>
      <div tw="container">
        <S.Content>
          <S.Item>
            <C.Heading variant="secondary">
              <C.H3 as={seo ? 'h3' : 'span'} variant="secondary">
                SERVICIOS
              </C.H3>
              <S.Hr />
            </C.Heading>
            <C.Heading variant="tertiary">
              <a href="#trans-agua-potable" css={C.ScaleLink}>
                Transporte de agua potable
              </a>
              <a href="#uni-cisternas" css={C.ScaleLink}>
                Alquiler de unidades cisterna
              </a>
            </C.Heading>
          </S.Item>
          <S.Item>
            <C.Heading variant="secondary">
              <C.H3 as={seo ? 'h3' : 'span'} variant="secondary">
                CONTACTO
              </C.H3>
              <S.Hr />
            </C.Heading>
            <C.Heading variant="tertiary">
              <C.Button
                css={C.ScaleLink}
                as="button"
                variant="dialog"
                onClick={() => {
                  setIsDialogOpen(true)
                  setNumber('977834196')
                }}
              >
                +51 977834196
              </C.Button>
              <C.Button
                css={C.ScaleLink}
                as="button"
                variant="dialog"
                onClick={() => {
                  setIsDialogOpen(true)
                  setNumber('969958020')
                }}
              >
                +51 969958020
              </C.Button>
              <a href="mailto:ventas@tysawys.com" css={C.ScaleLink}>
                ventas@tysawys.com
              </a>
            </C.Heading>
          </S.Item>
          <S.Item>
            <C.Heading variant="secondary">
              <C.H3 as={seo ? 'h3' : 'span'} variant="secondary">
                SÍGUENOS
              </C.H3>
              <S.Hr />
            </C.Heading>
            <a
              href="https://www.facebook.com/TransportesdeAguaWyS"
              target="_blank"
              css={C.ScaleLink}
            >
              <CgFacebook size={25} color="#fff" />
            </a>
          </S.Item>
        </S.Content>
        <hr />
        <S.Copyright>
          © Copyright 2022 TYSAWYS | Todos los derechos reservados Realizado por
          <a
            target="_blank"
            href="https://limadigital.pe/"
            tw="ml-2 hover:( bg-white text-bright-navy-blue) px-1 transition-colors duration-200"
          >
            Agencia Lima Digital
          </a>
        </S.Copyright>
      </div>
    </S.SFooter>
  )
}
