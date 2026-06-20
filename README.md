# Metas App React

Metas App React es una aplicación de productividad con elementos de gamificación. Permite registrar metas personales, visualizar el progreso, marcar avances como completados, editar metas, borrar metas y conservar la información en el navegador mediante `localStorage`.

Esta versión fue desarrollada con React usando una estructura más completa: rutas, componentes separados, estado global con Context, manejo de acciones con Reducer y estilos con Tailwind CSS.

## Objetivo del proyecto

El objetivo de la aplicación es ayudar al usuario a organizar metas personales como si fueran misiones o retos medibles.

En lugar de guardar metas de forma general, la app permite convertirlas en objetivos concretos con frecuencia, avance, fecha límite y progreso visual.

Ejemplos de metas usadas en esta versión:

* Completar rutinas de ejercicio en casa.
* Estudiar desarrollo web con prácticas guiadas.
* Crear proyectos para mi portafolio web.

## Funcionalidades principales

* Ver una lista de metas.
* Crear nuevas metas desde un formulario.
* Marcar metas como completadas.
* Editar metas desde un modal.
* Borrar metas.
* Visualizar avance con contador y barra de progreso.
* Guardar datos en `localStorage`.
* Mantener la información después de recargar la página.
* Navegar entre secciones usando React Router.
* Usar diseño responsive adaptable a escritorio, tablet y celular.

## Tecnologías utilizadas

* React
* JavaScript
* React Router
* Context API
* useReducer
* useState
* useEffect
* Tailwind CSS
* localStorage
* Create React App
* Git

## Estructura general del proyecto

```txt
src/
├─ components/
│  ├─ Footer.js
│  ├─ Header.js
│  ├─ Layout.js
│  ├─ MetaCard.js
│  ├─ MetaModal.js
│  └─ Sidebar.js
├─ context/
│  └─ MetasContext.js
├─ data/
│  └─ metasIniciales.js
├─ pages/
│  ├─ ListaMetas.js
│  └─ NuevaMeta.js
├─ reducers/
│  └─ metasReducer.js
├─ App.js
├─ index.css
└─ index.js
```

## Arquitectura usada

La aplicación se organizó en componentes para separar responsabilidades.

`Header`, `Sidebar`, `Footer` y `Layout` construyen la estructura visual principal.

`ListaMetas` muestra las metas guardadas.

`NuevaMeta` contiene el formulario para crear nuevas metas.

`MetaCard` representa cada tarjeta de meta.

`MetaModal` permite editar o borrar una meta.

`MetasContext` comparte el estado global de metas en toda la aplicación.

`metasReducer` centraliza las acciones principales: crear, completar, actualizar y borrar metas.

## Acciones principales del reducer

```txt
COMPLETAR
CREAR
ACTUALIZAR
BORRAR
```

Estas acciones permiten que el estado de las metas se modifique de forma más ordenada y controlada.

## Instalación

Para instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecutar el proyecto

Para iniciar la aplicación en modo desarrollo:

```bash
npm start
```

La aplicación se abrirá en:

```txt
http://localhost:3000
```

## Crear build de producción

Para generar una versión optimizada:

```bash
npm run build
```

## Rutas principales

```txt
/lista
/nueva
```

`/lista` muestra las metas registradas.

`/nueva` muestra el formulario para crear una nueva meta.

## Personalización del proyecto

La aplicación fue personalizada para que las metas no fueran solo ejemplos genéricos. Se adaptó a objetivos reales relacionados con entrenamiento personal, estudio de desarrollo web y creación de proyectos para portafolio.

También se personalizó el diseño con una paleta visual inspirada en colores tecnológicos: fondo oscuro, rojo, dorado y azul. Esto refuerza la idea de gamificación, progreso y energía.

## Footer de la aplicación

```txt
© 2026 Carlos Chávez Dev. Todos los derechos reservados.
Estudiante en Academia X
```

## Estado del proyecto

Proyecto funcional.

Incluye:

* Rutas.
* Componentes separados.
* Estado global con Context.
* Reducer.
* Formulario controlado.
* Modal de edición.
* LocalStorage.
* Tailwind CSS.
* Diseño responsive.

## Autor

Carlos Chávez Dev.
