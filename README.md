# Trabajo Final - ICARO 2023

## Ecommerce

Trabajo final del Curso Diplomatura Universitaria en Desarrollo Web Full Stack

## Contenido 🚀.

Tiene dos ramas dentro del mismo proyecto.

- La carpeta node se encuentra el backend la cual corre en el puerto 5001

```
npm run server
```

- El frontend corre en React y fue creada con [Vite](https://vitejs.dev/guide/)

```
npm run dev
```

## Contenido DB 🚀.

En la carpeta node/datavase/Data_Input_Base se encuentran dos archivos JSON, estos pueden ser utilizados para cargar la DB segun los campos correspondientes.

Se ulilizo la base de datos [MySQL](https://www.mysql.com/) la cual cuenta con la siguiente estructura

- Nombre de la base: database_app
- Tablas de la base:

  - blogs

    - id : autoincremental
    - name : varchar(50)
    - ndescriptionLong : varchar(150)
    - descriptionShort : varchar(50)
    - price : int(5)
    - link : varchar(300)
    - category : varchar(30)

  - users
    - id : autoincremental
    - name : varchar(30)
    - mail : varchar(100)
    - password : varchar(100)
    - isAdmin : tinyint(1) (este campo es boolean)

### Pre-requisitos - Instalación 📋

Las dependencias se encuentran el los respectivos archivos package.json

## Construido con 🛠️

Para los estilos se uso el framework [Tailwind](https://tailwindcss.com/).
En el archivo React-Tailwind.pdf esta la explicación de como instalarlo.

Herramienta para hacer las consultas al servidor. [TanStack Query v4](https://tanstack.com/query/latest/docs/react/installation)

```
@tanstack/react-query
```

Cliente HTTP para node.js
[Axios](https://axios-http.com/es/docs/intro)

```
npm install axios
```

Para el manejo de las imagenes que aparecen uso la libreria
[AOS](https://michalsnik.github.io/aos/)

```
npm install aos --save
```

Instalacion de
[Ant Design 5.0](https://ant.design/)

```
npm install antd
```

Tambien los iconos de [Ant Design 5.0](https://ant.design/)

```
npm install --save @ant-design/icons
```

Para el formulario de Login uso [Formik](https://formik.org/docs/overview)

```
npm install formik --save
```

para las variables de sesion uso
[universal-cookie](https://www.npmjs.com/package/universal-cookie)

```
npm i universal-cookie
```

Para los alertas uso sweetalert2
[sweetalert2](https://sweetalert2.github.io/)

```
npm install sweetalert2
```

Para las cookie uso univeral cookie
[universal-cookie](https://www.npmjs.com/package/universal-cookie)

```
npm i universal-cookie
```

Para las animaciones del texto
[react-type-animation](https://www.npmjs.com/package/react-type-animation?activeTab=readme)

```
npm i react-type-animation
```

## Autores ✒️

- **Guillermo Salinas** - _Trabajo Final_ - [ecommerce_final](https://github.com/GuilleSalinas/ecommerce_final)

## Licencia 📄

Este proyecto no contiene Licencia

## Expresiones de Gratitud 🎁

- En especial a mi Familia, quienes me apoyan incondicionalmente 📢
- A todos mis compañeros de esta carrera.
- Al cuerpo docente de ICARO, a Juan Arguelles, [Angel Martinez](https://github.com/letoor1234),
  [Andrés Alvarez](https://github.com/aalvarezto).🤓.
- A quienes me apoyaron día a día en esta hermosa profesión.

---

### Capturas

![Image text](https://github.com/GuilleSalinas/ecommerce_final/blob/master/React/public/Capturas/Captura-01.png?raw=true)
![Image text](https://github.com/GuilleSalinas/ecommerce_final/blob/master/React/public/Capturas/Captura-02.png?raw=true)
![Image text](https://github.com/GuilleSalinas/ecommerce_final/blob/master/React/public/Capturas/Captura-03.png?raw=true)
![Image text](https://github.com/GuilleSalinas/ecommerce_final/blob/master/React/public/Capturas/Captura-04.png?raw=true)

---

⌨️ con ❤️ por [Guille Salinas](https://github.com/GuilleSalinas) 😊
