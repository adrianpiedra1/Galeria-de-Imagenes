# Galería de Recursos Educativos Digitales (MEP)

Aplicación web interactiva desarrollada con **React**, **Vite** y **Bootstrap 5** que presenta una galería de recursos educativos y tecnológicos mediante tarjetas adaptables, consumiendo datos de forma asíncrona desde un archivo JSON local con identidad visual institucional del Ministerio de Educación Pública (MEP) de Costa Rica.

## Características principales

- **Identidad visual institucional:** Encabezado (`Header`) y pie de página (`Footer`) con paleta cromática del MEP (`#003366`, `#0066CC`, `#CE1126`) y tipografías **Montserrat** y **Open Sans**.
- **Consumo asíncrono de datos:** Lectura de `public/data/images.json` mediante `fetch()` nativo dentro de `useEffect`, gestionando estados con `useState`.
- **Búsqueda y filtrado dinámico:** Filtro en tiempo real por nombre de recurso (insensible a mayúsculas/minúsculas) y selector por etiquetas temáticas (`#educación`, `#tecnología`, `#multimedia`, etc.) con opción `"Todas"`, sin mutar el arreglo original.
- **Diseño responsivo y manejo de estados:** Cuadrícula adaptativa en Bootstrap 5 para escritorio y móviles, indicador de carga, alerta de error y aviso cuando no existen coincidencias.

## Arquitectura de componentes

- **`App.jsx`**: Componente principal que ejecuta la petición `fetch('/data/images.json')`, administra los estados (`images`, `searchTerm`, `selectedTag`, `loading`, `error`), aplica los filtros en memoria y coordina la estructura general.
- **`Header.jsx`**: Encabezado institucional con título del portal y distintivo gráfico en el extremo derecho.
- **`ImageGallery.jsx`**: Contenedor responsable de validar si existen resultados filtrados (mostrando una alerta si el arreglo está vacío) y renderizar la cuadrícula de tarjetas mediante `.map()`.
- **`ImageCard.jsx`**: Tarjeta individual que recibe cada objeto por `props` y muestra la fotografía con su atributo `alt`, el título y sus etiquetas.
- **`Footer.jsx`**: Pie de página institucional 

## Estructura del proyecto

```text
Galeria-de-Imagenes/
├── public/
│   ├── data/
│   │   └── images.json       # logica imagenes
│   └── images/               # Recursos gráficos locales 
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ImageCard.jsx
│   │   └── ImageGallery.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json