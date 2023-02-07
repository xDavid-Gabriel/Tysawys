import { Page } from '../components/layouts'

//Componentes
import * as C from '../components/ui'
//Secciones
import * as P from '../views/home'

//Estilos para el swiper en la pagina home
import 'swiper/css'
import { pagesApi } from '../apis'
// import { distritos } from '../data'

const TysawysDistritos = ({ result }) => {
  return (
    <Page
      title={`🥇 ${result.nombre} 🥇`}
      header={true}
      footer={true}
      nombre={result.nombre}
    >
      <C.Hero title={result.nombre} description={result.descripcion} />

      <P.SProyectosNivelNacional
        title={result.proyectosNivelNacional.title}
        imgOne={result.proyectosNivelNacional.img}
        imgAlt={result.proyectosNivelNacional.imgAlt}
        description={result.proyectosNivelNacional.descripcion}
        //Este es un prop de array
        galleryImages={result.proyectosNivelNacional.images}
        galleryImgAlt={result.proyectosNivelNacional.imgAlt}
      />
      <P.SNosotros />
      <P.SServicios />
      <P.STransporteAguaPotable />
      <P.SAlquilerUnidadesCisternas />
      <P.SModernasCisternas />
      <P.SCta />
      <P.SClientes />
      <P.SContacto />
    </Page>
  )
}

export default TysawysDistritos

export const getStaticPaths = async ctx => {
  const { data } = await pagesApi.get('/20607329860')

  const pages = data.data.results

  const distritosSlug = pages.map(name => name.slug)

  return {
    //Ejemplo:individualmente para prueba de entenderlo
    // paths: [
    //   {
    //     params: {
    //       id: "1",
    //     },
    //     params: {
    //       id: "2",
    //     },
    //   },
    // ],

    //Ejemplo: como en realidad se debe hacer, el "paths" que contiene el array de todos los elementos recorridos por un map, si o si tiene que retornar un objeto con la propiedad "params" y ese params tendra importante el "id" o el "slug" como propiedad, que tendra todo lo que tiene el array
    paths: distritosSlug.map(slug => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  const { data } = await pagesApi.get('/20607329860')

  const pages = data.data.results

  const result = pages.find(item => item.slug === slug)
  return {
    props: { result },
  }
}
