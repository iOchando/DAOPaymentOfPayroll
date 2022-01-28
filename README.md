# DAO Payment of Payroll:

Payment of Payroll es un contrato inteligente, el cual permite realizar los diferentes pagos a la nómina de desarrolladores, mediante el wallet de near.

Este smart contract permite:

- Crear un empleado utilizando el metodo crearEmpleado.
- Eliminar un empleado de la nomina con el metodo eliminarEmpleado.
- Crear una solicitud de pago con el metodo crearSolicitud.
- Eliminar una solicitud de pago con el metodo eliminarSolicitud.
- Realizar el pago de una solicitud con el metodo RealizarPago.

# Instalación :

Para la instalación local de este projecto:

## Pre - requisitos

- Asegúrese de haber instalado Node.js ≥ 12 (recomendamos usar nvm).

- Asegúrese de haber instalado yarn: npm install -g yarn.

- Instalar dependencias: yarn install.

- Crear un test near account NEAR test account.

- Instalar el NEAR CLI globally: near-cli es una interfaz de linea de comando (CLI) para interacturar con NEAR blockchain.

# Configurar NEAR CLI:

Configura tu near-cli para autorizar tu cuenta de prueba creada recientemente:

```html
near login
```

# Clonar el repositorio :palms_up_together:

```html
https://github.com/iOchando/DAOPaymentOfPayroll.git
```

```html
cd DAOPaymentOfPayroll
```

# Build del proyecto y despliegue en development mode.:rocket:

Instalar las dependencias necesarias con npm.

```html
npm install
```

Hacer el build y deployment en development mode.

```html
yarn deploy:dev
```
# Comandos :

## Comando para crear un Empleado:

```html
near call CONTRACT_ACCOUNT_ID crearEmpleado "{ \"nombre\": \"string\", \"nearid\": \"string\", \"sueldo\": number }"  --account-id YOUR_ACCOUNT_ID
```

## Comando para ver la nomina con todos los empleados registrados:

```html
near view CONTRACT_ACCOUNT_ID verNomina
```

## Comando para eliminar un empleado de la nomina:

```html
near call CONTRACT_ACCOUNT_ID eliminarEmpleado "{\"id\": number}"  --account-id YOUR_ACCOUNT_ID
```

## Comando para crear una Solicitud:

```html
near call CONTRACT_ACCOUNT_ID crearSolicitud "{ \"titulo\": \"string\", \"descripcion\": \"string\"}"  --account-id YOUR_ACCOUNT_ID
```

## Comando para conseguir la lista de Solicitudes:

```html
near call
near view CONTRACT_ACCOUNT_ID listarSolicitudes
```

## Comando para eliminar una solicitud:

```html
near call CONTRACT_ACCOUNT_ID eliminarSolicitud "{\"id\": number}"  --account-id YOUR_ACCOUNT_ID
```

## Comando para realizar el pago de una solicitud

```html
near call CONTRACT_ACCOUNT_ID RealizarPago "{ \"id\": number}"  --account-id YOUR_ACCOUNT_ID
```
# :framed_picture: Pantallas:

![Confirmacion de Pago](https://user-images.githubusercontent.com/96194326/151618887-88a40b0a-9873-4575-8b25-e2221aeadb2f.jpeg)
-Confirmacion de pago


![Muestra de pago 1](https://user-images.githubusercontent.com/96194326/151618895-9b03742e-2307-4540-b697-dd9b77c611a1.jpeg)
-Pago trabajador 1


![Muestra de Pago 2](https://user-images.githubusercontent.com/96194326/151618910-1e058f40-4d7e-4a86-93ca-fe5276e56b05.jpeg)
-Pago trabajador 2

# Gracias por visitar nuestro proyecto. :clap:
