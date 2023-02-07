# Estructura de carpetas

La carpeta pages se utiliza para crear las páginas de tu sitio web. Cada página tiene su propia carpeta dentro de pages, y cada una de estas carpetas puede tener su propias secciones en carpetas adicionales.

Cada sección puede tener sus propios estilos en archivos con el nombre de ejemplo: "section1.styled.js", también puede tener un "atributte" pequeño para almacenar información pequeña relacionada con la sección. Sin embargo, para información más grande, se recomienda usar una API.

Ejemplo de estructura de carpetas:

![Estructura de carpetas](https://i.postimg.cc/sDCZ2BC6/estructura-de-carpetas.png)

# Ojo

La carpeta "home" no tendra un "index.js" o un "index.jsx" ya que ese archivo con nombre index, solamente en la carpeta "page" su unica funcion es crear paginas, nada mas, es por ello que lo unico que nesecitariamos de la carpeta "home" seria importar las secciones para la el archivo principal "index.js" o index.jsx

Ejemplo:

![Estructura de carpetas](https://i.postimg.cc/kXsdzZJJ/estructura-de-carpetas-2.png)

# Diccionario

S.Servicios -> Styles o Estilos de Servicios (css con jsx)
SServicios -> SectionServicios o Sección Servicios (sólo html con jsx)
