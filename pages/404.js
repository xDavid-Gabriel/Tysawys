import Link from 'next/link'
import { Page } from '../components/layouts'
//Iconos
import { IoIosWater } from 'react-icons/io'
//Componentes
import * as C from '../components/ui'
import { useStateSeoContext } from '../context/seo'

import 'twin.macro'

const ErrorPage = () => {
  const { seo } = useStateSeoContext()
  return (
    <Page title="Pagina no encontrada">
      <section tw="container min-h-screen grid place-content-center">
        <div tw="flex flex-col items-center gap-8">
          <IoIosWater size={50} color="#1C77C3" />
          {seo ? (
            <h1 tw="text-dynamic-100 text-bright-navy-blue text-center">
              Error <br /> Página no encontrada
            </h1>
          ) : (
            <span tw="text-dynamic-100 text-bright-navy-blue text-center">
              Página no encontrada
            </span>
          )}

          <p tw="text-blue-jeans font-semibold text-2xl">
            Ups, algo parece haber salido mal
          </p>
          <Link
            href="/"
            tw="transition-colors duration-300 uppercase font-semibold py-3 px-10 rounded-full w-fit cursor-pointer bg-bright-navy-blue text-white  hover:bg-blue-jeans"
          >
            VOLVER AL INICIO
          </Link>
        </div>
      </section>
    </Page>
  )
}

export default ErrorPage
