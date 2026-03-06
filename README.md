#  Proyecto Star Wars API — Archivo Galáctico

> **Desarrollado por:** Andressann  
> **Carrera:** Ingeniería Informática  
> **Tecnologías usadas:** HTML5 · CSS3 · JavaScript Vanilla · SWAPI · Akabab Star Wars API

---

##  Descripción del Proyecto

Este proyecto es una **base de datos galáctica interactiva** sobre el universo de Star Wars, construida como práctica de consumo de APIs REST usando JavaScript puro (sin frameworks). La interfaz fue diseñada con estética de **videojuego espacial / terminal holográfico**, con efectos visuales como scanlines, estrellas animadas y tipografía futurista.

El usuario puede explorar todos los personajes del universo Star Wars, ver sus datos biométricos, descripción, era galáctica y su frase mítica más icónica.

---

##  Tecnologías y Herramientas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica de la página |
| **CSS3** | Estilos, animaciones, efectos holográficos |
| **JavaScript ES6+** | Lógica de la app, consumo de APIs, DOM |
| **SWAPI** (`swapi.dev`) | Datos oficiales de personajes Star Wars |
| **Akabab Star Wars API** | Fotografías reales de los personajes |
| **Google Fonts** | Tipografías `Orbitron` y `Share Tech Mono` |

---

## Estructura del Código

```
proyecto-star-wars-api/
├── index.html      → Estructura HTML de la app
├── styles.css      → Todos los estilos y animaciones
├── script.js       → Lógica completa (APIs, filtros, render)
└── README.md       → Este archivo
```

---

##  APIs utilizadas

### 1. SWAPI — The Star Wars API
```
GET https://swapi.dev/api/people/?page=1
GET https://swapi.dev/api/people/?page=2
... (paginación automática)
```
Devuelve los datos de los personajes: nombre, altura, género, especie, planeta natal, películas en las que aparece, año de nacimiento, etc.

Como SWAPI pagina los resultados de 10 en 10, el código hace un **bucle `while`** que va pidiendo páginas hasta que el campo `next` viene `null`:

```javascript
while (url) {
  const res  = await fetch(url);
  const data = await res.json();
  chars = chars.concat(data.results);
  url = data.next; // null cuando ya no hay más páginas
}
```

### 2. Akabab Star Wars API
```
GET https://akabab.github.io/starwars-api/api/all.json
```
Devuelve un array con todos los personajes incluyendo URLs de sus fotografías reales. El código construye un **mapa nombre → URL de imagen** para buscar rápido:

```javascript
data.forEach(c => {
  imageMap[c.name.toLowerCase()] = c.image;
});
```

Ambas APIs se cargan **en paralelo** con `Promise.all()` para que la carga sea más rápida:

```javascript
const [rawChars] = await Promise.all([
  fetchAllCharacters(),
  fetchCharacterImages()
]);
```

---

## Funcionalidades implementadas

###  Carga de datos con feedback visual
- Barra de progreso que se actualiza en tiempo real mientras se descargan las páginas
- Mensaje de estado que indica qué se está cargando

###  Enriquecimiento de datos
Como SWAPI no trae descripción, era galáctica ni frase mítica, se creó un objeto `CHAR_EXTRA` con datos extra para ~60 personajes icónicos. Para el resto se genera información genérica automáticamente:

```javascript
const CHAR_EXTRA = {
  'Luke Skywalker': {
    era: 'Imperio',
    descripcion: 'Granjero de Tatooine convertido en Jedi...',
    frase: '«La Fuerza estará contigo. Siempre.»',
    avatar: '👦'
  },
  // ...
};
```

###  Búsqueda y filtros en tiempo real
- Buscador por nombre, planeta, especie o era
- Filtro por género
- Filtro por era galáctica
- Orden por nombre A-Z, altura o año de nacimiento

### Render de tarjetas dinámico
Por cada personaje se crea un elemento `div` con `createElement` y se inserta en el DOM usando un `DocumentFragment` (más eficiente que modificar el DOM en cada iteración).

###  Modal de detalle
Al hacer clic en una tarjeta se abre un panel modal con todos los datos del personaje, su frase mítica resaltada en dorado, sus datos biométricos y la lista de películas donde aparece.

### Imagen con fallback automático
Si la foto del personaje no existe en la Akabab API, se muestra un placeholder con las **iniciales del personaje** generadas automáticamente:

```javascript
function getInitials(name) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}
```

---

##  Decisiones de diseño

- **Paleta de colores:** cian neón (`#00e5ff`) sobre negro espacial (`#010a0f`), con detalles en dorado (`#ffd700`) para elementos importantes como las frases míticas.
- **Tipografía:** `Orbitron` para títulos (futurista, geométrica) y `Share Tech Mono` para datos (estilo terminal).
- **Animaciones:** las tarjetas entran con `fadeIn + translateY`, las estrellas del fondo titiilan con `animation-delay` aleatorio, y hay un efecto glitch en el título principal al hacer hover.
- **Responsive:** grid con `auto-fill` + `minmax` para adaptarse a cualquier tamaño de pantalla.

---

##  Cómo ejecutar el proyecto

No necesita servidor ni instalación. Solo abre el archivo directamente en el navegador:

```
Doble clic en index.html → Se abre en el navegador
```

>  Requiere conexión a internet para consumir las APIs.

---

##  Lo que aprendí con este proyecto

- Consumo de APIs REST con `fetch` y `async/await`
- Manejo de **promesas en paralelo** con `Promise.all`
- Paginación automática de APIs
- Manipulación avanzada del DOM con JavaScript puro
- Diseño de interfaces sin frameworks usando solo CSS3
- Uso de `localStorage` para caché de datos (optimización futura)

---

##  Mejoras futuras

- [ ] Agregar página de naves espaciales y planetas (también disponibles en SWAPI)
- [ ] Modo oscuro / modo "lado luminoso" vs "lado oscuro"
- [ ] Caché local con `localStorage` para no re-descargar en cada visita
- [ ] Comparador de personajes lado a lado
- [ ] Sonidos de Star Wars al interactuar

---

*"Que la Fuerza... y el JavaScript... te acompañen."* 
