# Calculadora Web

Este proyecto es una calculadora web desarrollada con Next.js. La calculadora permite realizar operaciones básicas de suma, resta, multiplicación y división. También incluye funcionalidades adicionales como la conversión de números a negativos y el uso del punto decimal. Además, este proyecto está configurado para realizar pruebas automáticas con Jest y mostrar historias de componentes utilizando Storybook.

## Requerimientos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tuusuario/calculadora-web.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd calculadora-web
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Uso

Para iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```
## Pruebas

npm test

## StoryBook

npm run storybook

## Estructura del Proyecto

calculadora-web/
├── public/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Button.js
│   │   │   ├── Button.module.css
│   │   │   ├── Button.test.js
│   │   │   ├── Calculadora.js
│   │   │   ├── Calculadora.module.css
│   │   │   ├── Calculadora.test.js
│   │   │   ├── Display.js
│   │   │   ├── Display.module.css
│   │   │   ├── Display.test.js
│   │   ├── globals.css
│   ├── pages/
│   │   ├── _app.js
│   │   ├── index.js
├── .gitignore
├── README.md
├── package.json
├── jest.config.js
└── storybook/
    ├── main.js
    ├── preview.js


## Funcionalidades
  Suma, Resta, Multiplicación, División: Permite realizar operaciones aritméticas básicas.
  Conversión a negativo: Convierte números positivos a negativos y viceversa.
  Punto decimal: Permite la entrada de números decimales.
  Limitación de dígitos: El display no permite más de 9 dígitos.

