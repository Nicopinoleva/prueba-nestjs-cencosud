# Prueba NestJs Cencosud

Desarrollada por Nicolás Pino Leva

# Tecnologías

La apliacación se desarrolló con las siguientes tecnologías:
- Backend: NestJs
- Base de datos: Postgresql
- Docker
- Graphql

# Para testeo remoto
- Conectarse a [http://186.67.240.48:3000/graphql](http://186.67.240.48:3000/graphql) para visualizar y realizar pruebas con playground. También se puede conectar a través de postman a la misma dirección indicada. En la pestaña **docs** se pueden visualizar todas las queries y mutaciones disponibles.

# Para levantar local
- En el repositorio se encuentra un archivo Makefile para poder subir la aplicación de manera local. Se resume en lo siguiente:
    - Construye el contenedor de NestJs.
    ```bash
    make build
    ```
    - Levanta el contenedor de NestJs junto con postgresql.
    ```bash
    make up_nest
    ```

- Se incluye un pequeño dump con datos de prueba para importar con contenedor de postgres corriendo con credenciales genéricas incluidas en .env. Se requiere tener previamente instalado cliente de postgres.
    ```bash
    psql -h localhost -p 5432 -U nico postgres < dumpdb.sql
    ```
