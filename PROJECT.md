# Web App de Ministración

## 1. Propósito y Objetivos
**Web App de Ministración** es una aplicación diseñada para gestionar, organizar y dar seguimiento a los esfuerzos de ministración (visitas, atención y cuidado de miembros). 
Se enfoca en proporcionar una herramienta centralizada y exclusiva para **3 gestores administradores**. Todo está diseñado bajo un enfoque **Mobile-First moderno** (PWA y Desktop Web), buscando una experiencia de usuario rápida, fluida y sumamente visual.

**Objetivos clave:**
- Trackear visitas y organizar directorios.
- Controlar zonas geográficas a través de mapas interactivos.
- Monitorear métricas vitales (familias visitadas, atenciones urgentes, etc.).
- Agilizar la asignación de familias a ministrantes mediante inteligencia artificial (Fase 2).

---

## 2. Stack Tecnológico (Ecosistema Microsoft Azure)
El proyecto está construido íntegramente sobre un ecosistema de **Microsoft Azure** (aprovechando sus capas "Always Free" donde sea posible) y tecnologías web modernas.

- **Frontend (PWA y Web App):** React inicializado con Vite y **TypeScript**.
- **Estilos y UI:** Tailwind CSS, enfocado en un Design System premium, vibrante y con soporte para Dark Mode, micro-interacciones y diseño "glassmorphism".
- **Backend Custom (API Serverless):** Desarrollado con **Azure Functions** (Node.js y TypeScript).
- **Base de Datos:** **Azure Cosmos DB** (Usando la API compatible con MongoDB).
- **Almacenamiento de Archivos:** **Azure Blob Storage** (Para almacenar de forma segura las fotografías de las familias/usuarios).
- **Hosting Frontend:** **Azure Static Web Apps**.
- **Autenticación:** Sistema propio utilizando **JWT** y Bcrypt, con flujo completo de recuperación de contraseñas.
- **Mapas y Geolocalización:** Leaflet.js + OpenStreetMap.
- **Asistente IA (Fase 2):** Google Gemini API.

---

## 3. Sistema de Testing
- **Pruebas Unitarias y de Componentes:** **Vitest** en combinación con **React Testing Library**.

---

## 4. Arquitectura y Diagrama del Sistema

El sistema se divide en cuatro capas principales: una capa de Frontend alojada estáticamente que se comunica con una API Serverless. Dicha API maneja la autenticación y conecta tanto con la base de datos (Cosmos DB) como con el Storage y servicios de Inteligencia Artificial de terceros.

![Diagrama de Sistema](./system_diagram.png)

*Para una vista profunda de las relaciones de infraestructura, el diagrama superior muestra cómo el administrador interactúa con la ReactApp, que a su vez se apoya en Azure Functions para cualquier solicitud externa de datos, mapas o autenticación.*

---

## 5. Backlog y Fases de Desarrollo (Agile)

### Epic 1: Pantalla Principal y Dashboards
- **Pantalla "Resumen General":** Tarjetas de métricas, alertas de visitas pendientes y sección de atenciones urgentes.
- **Tablero de Compañerismos:** Listado de compañeros con progreso (%) y filtros visuales por zonas.
- **Detalle de Compañerismo:** Checklist interactivo y notas.
- **Vista de Formación:** Organigrama interactivo visual (tipo alineación).

### Epic 2: Gestión de Datos (CRUD y Azure API)
- **Desarrollo API:** Endpoints en Azure Functions, integración con Cosmos DB y Blob Storage.
- **Gestión de Familias y Usuarios:** Creación/edición con subida de fotografía y cuantificador de miembros familiares.
- **Directorio General:** Listado organizado y con filtros dinámicos.

### Epic 3: Autenticación Propia
- **Sistema de Login:** Protegido con JWT.
- **Recuperación:** Flujo para restablecer contraseñas de forma segura.

### Epic 4: Geolocalización y Analíticas (Fase 1.5)
- **Mapa interactivo:** División territorial por zonas de colores, ubicación de familias y botón de centrado.
- **Panel de Analítica Global:** Métricas avanzadas e informes.

### Epic 5: Testing y QA
- **Pruebas:** Cobertura de tests unitarios utilizando Vitest.

### Epic 6: Asistente de IA (Fase 2)
- **Sugerencias y Automatizaciones:** Integración con Google Gemini para sugerir compañeros, rutas o atenciones urgentes.

---

## 6. Diseños de Pantalla (Diseños Premium)

A continuación se presentan los mockups oficiales de la aplicación (enfoque Mobile-First). Todos los diseños buscan proveer una experiencia visual atractiva y fluida.

| Pantalla | Descripción e Imagen |
|----------|----------------------|
| **01 Login** | Flujo de entrada de los gestores.<br>![01 Login](./diseños/png/atualizado/01%20_%20Login%20(1).png) |
| **02 Layout Base** | Estructura general de navegación de la App.<br>![02 Layout Base](./diseños/png/atualizado/02%20_%20Layout%20base.png) |
| **03 Dashboard** | Pantalla principal "Resumen General" con métricas.<br>![03 Dashboard](./diseños/png/atualizado/03%20_%20Dashboard.png) |
| **04 Formación** | Organigrama visual interactivo de los compañeros.<br>![04 Formación](./diseños/png/atualizado/04%20_%20Formacion.png) |
| **05 Detalle Checklist** | Vista profunda para verificar atenciones e hitos.<br>![05 Detalle Checklist](./diseños/png/atualizado/05%20_%20Detalle%20_%20Checklist.png) |
| **06 Gestión CRUD** | Panel general de Directorio y Tableros.<br>![06 Gestión CRUD](./diseños/png/atualizado/06%20_%20Gesti_n%20_CRUD_.png) |
| **07 Formulario** | Inserción de nuevas familias, control de miembros y fotos.<br>![07 Formulario](./diseños/png/atualizado/07%20_%20Formulario.png) |
| **08 Mapa y Zonas** | Visualización interactiva Leaflet + OpenStreetMap.<br>![08 Mapa y Zonas](./diseños/png/atualizado/08%20_%20Mapa%20y%20zonas.png) |
| **09 Analítica** | Gráficos y reportes de estado del servicio.<br>![09 Analítica](./diseños/png/atualizado/09%20_%20Anal_tica.png) |
| **10 Asistente IA** | Chat de sugerencias y soporte basado en Gemini API.<br>![10 Asistente IA](./diseños/png/atualizado/10%20_%20Asistente%20IA%20(1).png) |
