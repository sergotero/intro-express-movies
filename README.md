# Intro API CRUD de peliculas

Pequeno ejercicio para practicar un CRUD REST con Express usando un mock de peliculas.

## Objetivos

- Implementar los 5 endpoints en `app.js` usando el modulo `Movie` (mock) que expone operaciones asincronas en memoria.
- Usar respuestas HTTP con codigos adecuados y cuerpos JSON.
- Mantener datos en memoria; no se requiere base de datos.

## Requisitos previos

- Node.js >= 20 (probado con 22).
- Instalar dependencias:
  ```bash
  npm install
  ```
- Levantar el servidor en modo watch:
  ```bash
  npm run dev
  ```
  El servidor escucha en `http://localhost:3000`.

## Mock de peliculas

- Fuente de datos: `data/movies.json` (lista inicial de objetos con campos `title`, `year`, `director`, `duration`, `genre`, `rate`).
- El modulo `movies.js` expone funciones asincronas (devuelven Promises con un `setTimeout` aleatorio):
  - `Movie.find()` -> devuelve todas las peliculas.
  - `Movie.findById(id)` -> devuelve una pelicula o `null`.
  - `Movie.create(payload)` -> agrega y devuelve la nueva pelicula (el id es string autogenerado).
  - `Movie.findByIdAndUpdate(id, payload)` -> mezcla campos y devuelve la pelicula actualizada o `null` si no existe.
  - `Movie.findByIdAndDelete(id)` -> elimina y resuelve `undefined`.

## Endpoints a implementar (en `app.js`)

1. `GET /movies`

- 200 con array de peliculas.

2. `GET /movies/:id`

- 200 con la pelicula.
- 404 si no existe.

3. `POST /movies`

- Body JSON con al menos `title` y `year`. Resto de campos opcionales.
- 201 con la pelicula creada.
- 400 si falta informacion obligatoria.

4. `PATCH /movies/:id`

- Body JSON con campos a actualizar.
- 200 con la pelicula actualizada.
- 404 si no existe.

5. `DELETE /movies/:id`

- 204 sin cuerpo al borrar.
- 404 si no existe.

## Ejemplos rapidos

Crear una pelicula:

```bash
curl -X POST http://localhost:3000/movies \
  -H "Content-Type: application/json" \
  -d '{"title":"Arrival","year":"2016"}'
```

Obtener una pelicula:

```bash
curl http://localhost:3000/movies/1
```

Actualizar una pelicula:

```bash
curl -X PATCH http://localhost:3000/movies/1 \
  -H "Content-Type: application/json" \
  -d '{"rate":"9.5"}'
```

Borrar una pelicula:

```bash
curl -X DELETE http://localhost:3000/movies/1
```

## Criterios de evaluacion

- CRUD funcional segun los casos anteriores.
- Respuestas HTTP coherentes y consistentes.
- Codigo claro y organizado.
