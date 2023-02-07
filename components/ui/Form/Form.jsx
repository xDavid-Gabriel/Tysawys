import { Formik } from 'formik'
import { AiFillCheckCircle } from 'react-icons/ai'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { formSchema } from './schemas/FormSchema'
import { useStateSeoContext } from '../../../context/seo'
import { BsFillXCircleFill } from 'react-icons/bs'

import 'twin.macro'
import * as S from './Form.styles'
import * as C from '../'

export const Form = ({
  number = '977834196',
  type = 'contact',
  variant = 'primary',
  setIsDialogOpen,
}) => {
  const { seo } = useStateSeoContext()
  const MySwal = withReactContent(Swal)

  return (
    <S.Content dialog={type === 'dialog' && true}>
      {type === 'contact' && (
        <C.Heading>
          <C.H2 as={seo ? 'h2' : 'span'}>Contáctanos</C.H2>
          <p tw="text-white">
            No dude en contactarnos, estaremos encantados de atenderle y
            resolver todas sus dudas y consultas
          </p>
        </C.Heading>
      )}

      <Formik
        initialValues={{
          nombre: '',
          celular: '',
          correo: '',
          mensaje: '',
        }}
        onSubmit={(values, actions) => {
          const sendData = async () => {
            try {
              const res = await axios({
                method: 'POST',
                url: 'https://seo.empresasperu.net.pe/api/message',
                data: {
                  email: values.correo,
                  cellphone: values.celular,
                  message: values.mensaje,
                  fullname: values.nombre,
                  to: 'ventas@tysawys.com',
                  // Se pasa el ruc
                  ruc: '20607329860',
                },
              })

              if (res.status !== 200) {
                throw new Error(res.data.error)
              }

              if (!res.data) throw new Error(res.status)
              actions.resetForm()

              const text = `Hola 👋🏽, quisiera más información:%0A%0A*Mis datos de contacto son:*%0A*Nombres:* ${values.nombre}*%0A*Mi celular:* ${values.celular}*%0A*Mi Correo:* ${values.correo}*%0A%0A*Mi consulta es:* ${values.mensaje}`
              window.open(
                `https://api.whatsapp.com/send?phone=+51${number}&text=${text}`,
                '_blank',
              )
            } catch (error) {
              if (error.response) {
                console.log(`La solicitud fallo: ${error}`)
              } else {
                console.log('Error de conexión: ', error.message)
              }
            }
          }

          MySwal.fire({
            title: (
              <p tw="text-dynamic-200  ">¿Desea enviar el siguiente mensaje?</p>
            ),
            html: (
              <ul tw="flex flex-col gap-5 ">
                {Object.keys(values).map((key, index) => (
                  <li tw="flex gap-3" key={index}>
                    <AiFillCheckCircle
                      color="#1C77C3"
                      size={20}
                      tw="translate-y-2"
                    />
                    <p tw="flex flex-col items-start">
                      <span tw="font-semibold  ">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>
                      {values[key]}
                    </p>
                  </li>
                ))}
              </ul>
            ),
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Sí',
            denyButtonText: 'No',
            footer: <span tw="">Nota: Se enviara vía whatsapp y correo</span>,
            showLoaderOnConfirm: true,
            preConfirm: sendData,
          })
        }}
        validationSchema={formSchema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <S.Form onSubmit={handleSubmit}>
            {type === 'dialog' && (
              <header tw="flex justify-between items-center">
                <div />
                <C.H2 tw="text-center" as={seo ? 'h2' : 'span'}>
                  Contáctanos
                </C.H2>
                <C.Button
                  variant="close"
                  as="button"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <BsFillXCircleFill size={30} />
                </C.Button>
              </header>
            )}
            <S.Label htmlFor="nombres">
              <span tw="pl-3 ">Nombres</span>
              <S.Input
                id="nombres"
                name="nombre"
                variant={variant}
                type="text"
                placeholder="Ingrese sus nombres y apellidos"
                onChange={handleChange}
                value={values.nombre}
                onBlur={handleBlur}
              />
              {errors.nombre && touched.nombre && (
                <p tw="text-red-700">{errors.nombre}</p>
              )}
            </S.Label>
            <S.Label htmlFor="correo">
              <span tw="pl-3">Correo Electrónico</span>
              <S.Input
                id="correo"
                type="email"
                variant={variant}
                placeholder="tucorreo@ejemplo.com"
                onChange={handleChange}
                value={values.correo}
                onBlur={handleBlur}
              />
              {errors.correo && touched.correo && (
                <p tw="text-red-700">{errors.correo}</p>
              )}
            </S.Label>
            <S.Label htmlFor="celular">
              <span tw="pl-3">Número de teléfono</span>
              <S.Input
                id="celular"
                type="number"
                variant={variant}
                placeholder="Celular o teléfono"
                onChange={handleChange}
                value={values.celular}
                onBlur={handleBlur}
              />
              {errors.celular && touched.celular && (
                <p tw="text-red-700">{errors.celular}</p>
              )}
            </S.Label>
            <S.Label tw="lg:mb-6" htmlFor="mensaje">
              <span tw="pl-3  ">Déjanos un mensaje</span>
              <S.Input
                as="textarea"
                textarea
                variant={variant}
                id="mensaje"
                tw="resize-none h-28"
                type="text"
                placeholder="Escribe un mensaje"
                onChange={handleChange}
                value={values.mensaje}
                onBlur={handleBlur}
              />
              {errors.mensaje && touched.mensaje && (
                <p tw="text-red-700">{errors.mensaje}</p>
              )}
            </S.Label>
            <C.Button type="submit" tw="self-start w-fit px-14" as="button">
              Enviar
            </C.Button>
          </S.Form>
        )}
      </Formik>
    </S.Content>
  )
}
