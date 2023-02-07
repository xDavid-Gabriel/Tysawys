import * as yup from 'yup'

export const formSchema = yup.object().shape({
  nombre: yup.string().required('Sus nombres son requeridos'),
  celular: yup.number().required('El numero es requerido'),
  correo: yup
    .string()
    .email('Ingrese un correo valido')
    .required('El correo es requerido'),
  mensaje: yup.string().required('El mensaje es requerido'),
})
