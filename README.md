# NutriVida - Plantilla Web para Nutricionistas

Una elegante y profesional plantilla web para nutricionistas, creada con Astro JS y Tailwind CSS. Perfecta para profesionales de la nutrición que desean una presencia web moderna y funcional.

## ✨ Características

- Diseño responsive y moderno
- Animaciones elegantes con biblioteca AOS
- SEO optimizado
- Secciones completas (Inicio, Sobre mí, Servicios, Testimonios, Contacto)
- Blog con soporte para Markdown
- Optimizada para rendimiento
- Fácil personalización mediante Tailwind CSS

## 🚀 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```text
/
├── public/               # Archivos estáticos
│   ├── favicon.svg
│   └── img/               # Imágenes del sitio
├── src/
│   ├── assets/            # Recursos adicionales
│   ├── components/        # Componentes reutilizables
│   │   ├── AboutSection.astro
│   │   ├── BlogSection.astro
│   │   ├── ContactSection.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── Navbar.astro
│   │   ├── ServicesSection.astro
│   │   └── TestimonialsSection.astro
│   ├── content/           # Contenido del blog
│   │   └── blog/
│   ├── layouts/
│   │   └── Layout.astro   # Plantilla principal
│   ├── pages/             # Páginas del sitio
│   │   ├── index.astro    # Página de inicio
│   │   └── blog/
│   │       ├── index.astro # Listado del blog
│   │       └── [slug].astro # Plantilla artículo
│   └── styles/            # Estilos CSS
├── astro.config.mjs       # Configuración de Astro
├── package.json
├── tailwind.config.mjs    # Configuración de Tailwind
└── vercel.json           # Configuración para Vercel
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Despliegue en Vercel

Este proyecto está configurado para ser desplegado fácilmente en Vercel. Sigue estos pasos:

1. **Crea una cuenta en Vercel**: Si aún no tienes una cuenta, regístrate en [vercel.com](https://vercel.com)

2. **Instala la CLI de Vercel** (opcional):
   ```sh
   npm install -g vercel
   ```

3. **Inicia sesión en Vercel**:
   ```sh
   vercel login
   ```

4. **Despliega el sitio**:
   
   **Opción 1**: Despliegue directo desde el repositorio:
   - Conecta tu repositorio GitHub/GitLab/Bitbucket en el dashboard de Vercel
   - Selecciona el repositorio y configura las opciones (framework: Astro)
   - Vercel detectará automáticamente la configuración

   **Opción 2**: Despliegue desde la línea de comandos:
   ```sh
   vercel
   ```

   **Opción 3**: Despliegue desde la interfaz web de Vercel:
   - Sube tu código a GitHub/GitLab/Bitbucket
   - Importa el proyecto desde vercel.com

5. **¡Tu sitio estará publicado!** Vercel te proporcionará una URL para tu sitio.

## 📝 Personalización

Para personalizar el sitio:

1. **Datos del nutricionista**: Modifica los textos en los componentes de `src/components/`
2. **Imágenes**: Reemplaza las imágenes en la carpeta `public/img/`
3. **Colores**: Ajusta los colores en `tailwind.config.mjs`
4. **Blog**: Agrega o modifica artículos en `src/content/blog/`

## 📋 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo para tus proyectos.
