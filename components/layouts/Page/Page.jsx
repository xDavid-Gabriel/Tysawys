import { useState } from 'react'

import Head from 'next/head'
//Componentes
import * as C from '../../ui'
import { useStateSeoContext } from '../../../context/seo'

/*Mis Esquemas para el Seo*/
import {
  SchemaLocal,
  SchemaOrganization,
  SchemaProduct,
  SchemaWebSite,
  SchemaBreadcrumb,
} from '../'

export const Page = ({ children, title, header, footer, nombre }) => {
  //El "useStateSeoContext()" se usa para validar si est en true estara con SEO si no, no lo estara
  const { seo } = useStateSeoContext()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [number, setNumber] = useState('977834196')

  return (
    <>
      <Head>
        <title>{title}</title>
        {seo && (
          <>
            <meta
              httpEquiv="Content-Security-Policy"
              content="default-src *; font-src https: 'self' data:; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'; img-src * data: 'unsafe-inline'; connect-src * 'unsafe-inline'; frame-src * 'self'"
            />
            <meta
              name="description"
              content={`${nombre} | Brindamos el mejor servicio de transporte de agua potable a nivel local y nacional las 24 horas del día, con una moderna flota de camiones cisterna contribuyendo en proyectos.`}
            />
            <meta
              name="keywords"
              content="transporte,servicio,agua,alquiler,cisterna,tysawys,proyectos,nivel,nacional,local,lima,callao,camiones,distritos,potable,confianza,compromiso,puntualidad,seriedad,perú"
            />
            <meta
              name="theme-color"
              content="Ser una empresa líder en el mercado y ser su principal socio estratégico, contribuyendo activamente en el desarrollo de sus proyectos, así como en el desarrollo de nuestro Perú."
            />
            <meta name="robots" content="index,follow" />
            <meta httpEquiv="expires" content="259200" />
            <meta name="author" content="limadigital.pe" />
          </>
        )}
        <link
          rel="shortcut icon"
          href="/images/general/favicon.ico"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/images/general/favicon.ico" />

        {/* Por si queremos utilizar un schema personalizado que la libreria no incluye */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SchemaWebSite),
          }}
        />
      </Head>
      {/* Squemas para el seo de la libreria next-seo */}
      {seo && (
        <>
          {/*Squema de Organización */}
          <SchemaOrganization />
          {/*Squema de Producto */}
          <SchemaProduct />
          {/*Squema de Local */}
          <SchemaLocal />
          {/*Squema de Breadcrumb */}
          <SchemaBreadcrumb />
        </>
      )}
      {header ? <C.Header /> : ''}

      <main>{children}</main>
      <C.SocialNetworks setIsDialogOpen={setIsDialogOpen} />
      {isDialogOpen && (
        <C.Dialogo setIsDialogOpen={setIsDialogOpen} number={number} />
      )}
      {footer ? (
        <C.Footer setIsDialogOpen={setIsDialogOpen} setNumber={setNumber} />
      ) : (
        ''
      )}
    </>
  )
}
