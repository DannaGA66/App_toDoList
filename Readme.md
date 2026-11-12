# To-Do List Desktop App

Una aplicación de gestión de tareas (To-Do List) moderna, elegante y 100% funcional sin conexión a internet. Construida con **HTML, CSS y JavaScript vainilla**, y empaquetada como una aplicación de escritorio nativa utilizando **Tauri**.

![Tauri](https://img.shields.io/badge/Tauri-v1.5-blue?style=for-the-badge&logo=tauri)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Características:

*   **Interfaz Premium:** Diseño con efecto *Glassmorphism* (cristal), fondo espacial y tipografía elegante.
*   **Persistencia de Datos:** Las tareas se guardan localmente usando `localStorage`. Cierra la app y tus tareas seguirán ahí.
*   **Edición en Línea:** Haz clic en el lápiz para editar el texto directamente en la tarea, sin ventanas emergentes.
*   **Barra de Progreso:** Sigue tu progreso diario con un contador dinámico.
*   **Celebración:** ¡Confeti interactivo generado con `tsparticles` cuando completas todas tus tareas!
*   **100% Offline:** Todos los recursos (fuentes, iconos y librerías) están empaquetados localmente. No requiere internet para funcionar.

## Capturas de Pantalla

![Vista previa de la app](./dist/images/example.png)

## Tecnologías Utilizadas

*   **Frontend:** HTML5, CSS3, JavaScript (ES6+).
*   **Empaquetado:** [Tauri](https://tauri.app/) (Rust).
*   **Iconos:** Font Awesome (local).
*   **Fuentes:** Google Fonts (Playfair Display, local).
*   **Efectos:** Tsparticles Confetti (local).

## Requisitos Previos

Para ejecutar este proyecto en tu entorno de desarrollo local, necesitarás:
*   [Node.js](https://nodejs.org/) (v16 o superior)
*   [Rust](https://www.rust-lang.org/tools/install)
*   [Tauri Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites) (Dependencias del sistema para Windows/macOS/Linux).

## Instalación y Desarrollo

1. Clona este repositorio:
   ```bash
   git clone https://github.com/DannaGA66/App_toDoList.git

2. Entra a la carpeta del proyecto:
    cd App_toDoList

3. Instala las dependencias de Tauri:
    npm install

4. Inicia el entorno de desarrollo (abrirá la ventana de la app):
    npx tauri dev

5. En caso de querer crear el .exe :
    npx tauri build