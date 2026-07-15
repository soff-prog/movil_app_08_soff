# 🧙‍♂️ Desafío React Native: El Duelo Mágico y el Dragón 🐉

¡Bienvenido, Arquitecto de la Academia de Magia! 
Tu misión es desarrollar el sistema backend y la interfaz móvil para la Academia. Debes crear un sistema de gestión de hechiceros y sus hechizos, y finalmente, probar su poder en la Arena contra un temible dragón.

##  Objetivos de Aprendizaje
1. Comprender y aplicar **Claves Primarias (PK)** y **Claves Foráneas (FK)** en una relación 1:N.
2. Manejar estados complejos en **React Native**.
3. Implementar **lógica matemática** (cálculo de daño, consumo de recursos) en el frontend.
4. Diseñar una interfaz de usuario (UI) dividida en 4 pantallas funcionales.

---

##  Modelo de Datos (Tu "Base de Datos")
Aunque usarás `useState` en React Native para simular la base de datos (o `expo-sqlite` si tu profesor lo indica), tu estructura de datos debe respetar este esquema relacional:

**Tabla 1: `Hechiceros`**
*   `id` (PK - Entero autoincremental)
*   `nombre` (String)
*   `nivel` (Entero)
*   `mana_max` (Entero)
*   `mana_actual` (Entero)

**Tabla 2: `Hechizos`**
*   `id` (PK - Entero autoincremental)
*   `nombre` (String)
*   `daño_base` (Entero)
*   `costo_mana` (Entero)
*   `id_hechicero` (FK - Entero) 

---

## 📱 Instrucciones de las 4 Ventanas (Pantallas)

Debes implementar un sistema de navegación (puede ser simple con estados o usando `React Navigation`) que contenga las siguientes 4 vistas:

### 1. Ventana: `Hechicero` (Registro de Magos)
*   **Función:** Formulario para dar de alta a un nuevo hechicero.
*   **Campos:** Nombre, Nivel (default 1), Maná Máximo (default 100).
*   **Lógica:** Al guardar, se debe generar automáticamente la **Clave Primaria (ID)**. El `mana_actual` se inicializa igual al `mana_max`.
*   **Requisito:** Mostrar una alerta de éxito con el ID asignado.

### 2. Ventana: `Hechizos` (Taller de Magia)
*   **Función:** Formulario para crear un nuevo hechizo y vincularlo a un mago.
*   **Campos:** Nombre del hechizo, Daño Base, Costo de Maná.
*   **El Reto de la FK:** Debe haber un campo (input numérico o dropdown) para seleccionar el **ID del Hechicero**.
*   **Validación (Integridad Referencial):** Si el estudiante ingresa un ID de hechicero que no existe en el "estado" de la app, el sistema **debe rechazar** la creación del hechizo y mostrar un error: *"Error: El hechicero no existe"*.

### 3. Ventana: `ListaHechicero` (El Tablero)
*   **Función:** Mostrar un `FlatList` con todos los hechiceros registrados.
*   **UI:** Cada item debe mostrar el Nombre, Nivel y un botón que diga **"Ir a la Arena"**.
*   **Lógica:** Al presionar el botón, se debe navegar a la ventana `Arena` pasando los datos de ese hechicero específico.

### 4. Ventana: `Arena` (El Jefe Final: El Dragón)
*   **Función:** Pantalla de combate. Al entrar, se selecciona el hechicero y se carga al enemigo.
*   **El Enemigo:** 
    *   Nombre: 🐉 **Dragón de Fuego Anciano**
    *   HP (Vida): **150**
    *   HP Máximo: **150**
*   **UI:** 
    *   Barra de vida del Dragón.
    *   Barra de maná del Hechicero.
    *   Lista de botones con los hechizos que pertenecen a ese hechicero (Filtrados por la FK).

---

## ⚔️ Reglas del Combate (Lógica Matemática)

En la ventana `Arena`, el estudiante debe implementar la siguiente lógica al presionar un botón de hechizo:

1.  **Validación de Maná:** Si el `mana_actual` del hechicero es menor al `costo_mana` del hechizo, el botón debe estar deshabilitado o mostrar una alerta.
2.  **Cálculo de Daño (La Fórmula Mágica):**
    El daño no es solo el `daño_base`. El nivel del mago potencia el hechizo.
    > `Daño_Real = daño_base + (nivel_hechicero * 1.5)`
    *(Ejemplo: Hechizo de 20 de daño + Mago nivel 10 = 20 + 15 = 35 de daño real).*
3.  **Actualización de Estados (UPDATE):**
    *   Restar el `costo_mana` al `mana_actual` del hechicero.
    *   Restar el `Daño_Real` al `hp` del Dragón.
4.  **Condiciones de Victoria/Derrota:**
    *   🏆 **Victoria:** Si el `hp` del Dragón llega a 0 o menos. Mostrar alerta "¡Victoria! El dragón ha caído" y volver al menú.
    *   💀 **Derrota:** Si el `mana_actual` del hechicero llega a 0 y no tiene maná suficiente para lanzar ni su hechizo más barato. Mostrar alerta "¡Te has quedado sin maná! El dragón te ha derrotado".

---

## 🛠️ Requisitos Técnicos

*   **Framework:** React Native (Expo).
*   **Estado:** Uso de `useState` para simular las tablas de la base de datos (o `expo-sqlite` si se requiere base de datos local real).
*   **Navegación:** Puede ser un `switch` basado en un estado `pantallaActual` o usar `@react-navigation/native`.
*   **Estilos:** Usar `StyleSheet`. Se valorará el uso de colores temáticos (ej. fondo oscuro, barras de vida rojas/azules).

---

## 🌟 Retos Extra (Para los Archimagos)

Si terminas antes de tiempo, implementa estas mejoras para ganar puntos extra:

1.  **Animación de Daño:** Cuando el dragón recibe daño, el número del daño (ej. "-35") debe aparecer flotando en la pantalla y desvanecerse (usando `Animated` o `react-native-reanimated`).
2.  **Golpe Crítico:** Agrega un 15% de probabilidad (`Math.random()`) de que el hechizo haga el doble de daño. Si ocurre, cambia el color del texto del daño a dorado.
3.  **Persistencia:** Usa `AsyncStorage` o `expo-sqlite` para que, si el estudiante cierra la app y la vuelve a abrir, sus hechiceros y hechizos sigan guardados.

---
*¡Que la magia de las bases de datos y React Native esté contigo! Envía tu repositorio o archivo `App.js` a tu profesor para su evaluación.*