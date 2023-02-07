/* 
Importaciones de la libreria next-seo es especialmente para squemas
nota: Para saber mas informacion de como utilizarlo, ir a la documenatción 
link:https://github.com/garmeeh/next-seo#readme
*/
import {
  OrganizationJsonLd,
  ProductJsonLd,
  LocalBusinessJsonLd,
  BreadcrumbJsonLd,
} from 'next-seo'

//Para obtener el Dominio
const origin = typeof window === 'undefined' ? '' : window.location.origin
const title = typeof window === 'undefined' ? '' : document.title

//Para obtener la url amigable
const originPathname =
  typeof window === 'undefined' ? '' : window.location.pathname

export const SchemaOrganization = () => {
  return (
    <OrganizationJsonLd
      name="Transporte y Servicios de Agua W y S S.A.C."
      alternateName={[
        'Transporte y servicios de agua WyS',
        'Transporte y servicios de agua',
        'Tysawys',
        'Alquiler de camiones cisterna',
        'Transporte de agua',
        'Servicio de transporte',
        'Servicio de agua',
      ]}
      url={`${origin}`}
      logo={`${origin}/images/general/tysawys-logo.svg`}
      sameAs={['https://www.facebook.com/TransportesdeAguaWyS', `${origin}`]}
    />
  )
}

export const SchemaProduct = () => {
  return (
    <ProductJsonLd
      type="Product"
      productName="Transporte de agua y alquiler de camiones cisterna"
      images="https://assets.tysawys.com/images/general/06.webp"
      description="Transporte y abastecimiento de agua en todo Lima y Callao. Alquiler de camiones cisterna para proyectos a nivel nacional."
      logo={`${origin}/images/general/tysawys-logo.svg`}
      brand="Transporte y Servicios de Agua W y S S.A.C."
      aggregateRating={{
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '0',
        ratingCount: '1351',
      }}
      reviews={{
        name: 'Opinión de usuario',
        reviewBody:
          'Excelente servicio de transporte de agua y alquiler de camiones cisterna, muy agradecidos.',
        datePublished: '2023-01-13',
        author: { '@type': 'Person', name: 'Alexander' },
      }}
    />
  )
}

export const SchemaLocal = () => {
  return (
    <LocalBusinessJsonLd
      name="Transporte y Servicios de Agua W y S S.A.C."
      images="https://assets.tysawys.com/images/general/01.webp"
      url={`${origin}`}
      telephone="+51977834196"
      address={{
        streetAddress: 'Villa María del Triunfo',
        addressLocality: 'Lima',
        postalCode: '15817',
        addressCountry: 'PE',
      }}
      openingHours={{
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
      }}
    />
  )
}

//Este es un squema personalizado
export const SchemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Transporte y Servicios de Agua W y S S.A.C.',
  url: `${origin}`,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${origin}/{search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const listItems = [
  {
    position: 1,
    name: 'Transporte de Agua Potable en Callao',
    item: 'https://tysawys.com/transporte-de-agua-potable-en-callao',
  },
  {
    position: 2,
    name: 'Transporte de Agua Potable en Lima',
    item: 'https://tysawys.com/transporte-de-agua-potable-en-lima',
  },
  {
    position: 3,
    name: 'Transporte de Agua Potable en Comas',
    item: 'https://tysawys.com/transporte-de-agua-potable-en-comas',
  },
  {
    position: 4,
    name: 'Transporte de Agua Potable en La Molina',
    item: 'https://tysawys.com/transporte-de-agua-potable-en-la-molina',
  },
  {
    position: 5,
    name: 'Transporte de Agua Potable en Miraflores',
    item: 'https://tysawys.com/transporte-de-agua-potable-en-miraflores',
  },
  {
    position: 6,
    name: 'Transporte de Agua Potable en Los Olivos',
    item: 'https://tysawys.com/transporte-de-agua-potable-en-los-olivos',
  },
  {
    position: 7,
    name: 'Transporte de Agua Potable en Puente Piedra',
    item: 'https://tysawys.com/transporte-de-agua-potable-en-puente-piedra',
  },
  {
    position: 8,
    name: 'Transporte de Agua Potable en Rimac',
    item: 'https://tysawys.com/transporte-de-agua-potable-en-rimac',
  },
  {
    position: 9,
    name: 'Transporte de Agua Potable en San Borja',
    item: 'https://tysawys.com/transporte-de-agua-potable-en-san-borja',
  },
  {
    position: 10,
    name: 'Transporte de Agua Potable en San Isidro',
    item: 'https://tysawys.com/transporte-de-agua-potable-en-san-isidro',
  },
  {
    position: 11,
    name: 'Alquiler de Camiones Cisterna en San Isidro',
    item: 'https://tysawys.com/alquiler-de-camiones-cisterna-en-san-isidro',
  },
  {
    position: 12,
    name: 'Alquiler de Camiones Cisterna en Independencia',
    item: 'https://tysawys.com/alquiler-de-camiones-cisterna-en-independencia',
  },
  {
    position: 13,
    name: 'Alquiler de Camiones Cisterna en Salamanca',
    item: 'https://tysawys.com/alquiler-de-camiones-cisterna-en-salamanca',
  },
  {
    position: 14,
    name: 'Alquiler de Camiones Cisterna en Abancay',
    item: 'https://tysawys.com/alquiler-de-camiones-cisterna-en-abancay',
  },
  {
    position: 15,
    name: 'Alquiler de Camiones Cisterna en Zarumilla',
    item: 'https://tysawys.com/alquiler-de-camiones-cisterna-en-zarumilla',
  },
  {
    position: 16,
    name: 'Alquiler de Camiones Cisterna en Piura',
    item: 'https://tysawys.com/alquiler-de-camiones-cisterna-en-piura',
  },
  {
    position: 17,
    name: 'Alquiler de Camiones Cisterna en La Victoria',
    item: 'https://tysawys.com/alquiler-de-camiones-cisterna-en-la-victoria',
  },
  {
    position: 18,
    name: 'Alquiler de Camiones Cisterna en Cusco',
    item: 'https://tysawys.com/alquiler-de-camiones-cisterna-en-cusco',
  },
  {
    position: 19,
    name: 'Alquiler de Camiones Cisterna en Chancay',
    item: 'https://tysawys.com/alquiler-de-camiones-cisterna-en-chancay',
  },
  {
    position: 20,
    name: 'Alquiler de Camiones Cisterna en Trujillo',
    item: 'https://tysawys.com/alquiler-de-camiones-cisterna-en-trujillo',
  },
]

export const SchemaBreadcrumb = () => {
  return (
    <BreadcrumbJsonLd
      itemListElements={listItems.map(info => {
        return {
          position: info.position,
          name: info.name,
          item: `${origin}/${info.slug}`,
        }
      })}
    />
  )
}
