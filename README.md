# Pagina Crochet

Sitio web de Laura's Crochet construido con React y Vite. Incluye una landing principal, secciones de colecciones, proceso de compra y contacto, con estilos basados en Tailwind CSS y soporte de tema claro/oscuro.

## Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 3 + PostCSS + Autoprefixer
- ESLint 9

## Caracteristicas

- Navegacion por rutas con `react-router-dom`.
- Tema claro/oscuro persistido en `localStorage`.
- Contenido centralizado en `src/data/siteContent.js`.
- Secciones reutilizables por pagina (`src/components/sections`).
- Sistema visual con tokens y fuentes personalizadas.

## Rutas

- `/` -> Home
- `/colecciones` -> Colecciones
- `/proceso-de-compra` -> Proceso
- `/contacto` -> Contacto

## Estructura principal

```text
src/
	components/
		layout/
		sections/
	data/
		siteContent.js
	hooks/
		useTheme.js
	pages/
		HomePage.jsx
		CollectionsPage.jsx
		ProcessPage.jsx
		ContactPage.jsx
	ui-system/
		tokens/
	App.jsx
	main.jsx
```

## Requisitos

- Node.js 18+
- npm 9+

## Instalacion

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev      # levanta servidor de desarrollo
npm run build    # genera build de produccion
npm run preview  # previsualiza build localmente
npm run lint     # ejecuta ESLint
```

## Desarrollo

1. Instala dependencias con `npm install`.
2. Ejecuta `npm run dev`.
3. Abre la URL local mostrada por Vite (normalmente `http://localhost:5173`).

## Notas

- Los assets publicos se encuentran en `public/`.
- La configuracion de Tailwind esta en `tailwind.config.js`.
- El punto de entrada de la app es `src/main.jsx`.
