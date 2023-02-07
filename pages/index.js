import { Page } from '../components/layouts'

//Componentes
import * as C from '../components/ui'
//Secciones
import * as P from '../views/home'

import 'twin.macro'

//Data
import { galleryImages } from '../data'

const Home = ({ results }) => {
  return (
    <Page
      title="🥇 Inicio | Transportes y Servicios de Agua W y S S.A.C 🥇"
      header={true}
      footer={true}
      nombre="Transportes y Servicios de Agua W y S S.A.C."
      results={results}
    >
      <C.Hero />
      <P.SProyectosNivelNacional
        title={
          <>
            Atendemos <span tw="text-blue-jeans">Proyectos</span> a Nivel
            Nacional
          </>
        }
        description="Nuestra experiencia nos permite gozar de la confianza de nuestra clientela, puesto que nos encontramos en condiciones de atender y abastecer, cumpliendo con los más altos estándares de seguridad, calidad y cuidado del medio ambiente."
        imgOne="/images/general/01.webp"
        imgAlt="Cisternas"
        //Este es un prop de array
        galleryImages={galleryImages}
        galleryImgAlt="Cisternas"
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

export default Home
