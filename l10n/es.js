OC.L10N.register(
    "cookbook",
    {
    "No image with the matching MIME type was found on the server." : "No se ha encontrado ninguna imagen con el tipo MIME correspondiente en el servidor.",
    "Recipe with ID %d was not found in database." : "No se ha encontrado en la base de datos la recete con ID %d",
    "Downloading of a file failed returned the following error message: %s" : "La descarga de un archivo ha fallado devolviendo el siguiente mensaje de error: %s",
    "No content encoding was detected in the content." : "No se ha detectado en el contenido ninguna codificación de contenido.",
    "The given image for the recipe %s cannot be parsed. Aborting and skipping it." : "La imagen provista para la receta %s no puede ser procesada. Se aborta y se ignora.",
    "No valid recipe was left after heuristics of recipe %s." : "No se encontró una receta válida luego del análisis heurístico de la receta %s.",
    "Heuristics failed for image extraction of recipe %s." : "Falló el análisis heurístico de extracción de imágenes para la receta %s.",
    "Could not guess image URL as no recipe URL was found." : "No fue posible indagar el URL de la imagen ya que no se consiguió un URL para la receta.",
    "Could not guess image URL scheme from recipe URL %s" : "No fue posible indagar el esquema URL de la imagen a partir de la URL de la receta %s",
    "Could not parse recipe ingredients. It is no array." : "No se pudieron procesar los ingredientes de la receta. No es un arreglo de datos.",
    "Could not parse recipe instructions as they are no array." : "No fue posible procesar las instrucciones de la receta ya que no son un arreglo de datos.",
    "Cannot parse recipe: Unknown object found during flattening of instructions." : "Imposible procesar la receta: Se encontró un objeto desconocido al normalizar las instrucciones.",
    "Did not find any p or li entries in the raw string of the instructions." : "No se encontraron entradas p ó li en la cadena cruda de las instrucciones.",
    "Could not parse the keywords for recipe {recipe}." : "No fue posible procesar las palabras claves de la receta {recipe}.",
    "Could not parse the nutrition information successfully for recipe {name}." : "No fue posible procesar con éxito la información nutricional de la receta {recipe}.",
    "Using heuristics to parse the \"recipeYield\" field representing the number of servings of recipe {name}." : "Utilizando heurística para procesar el campo \"recipeYield\" que representa el número de porciones de la receta {name}.",
    "_Only a single number was found in the \"recipeYield\" field. Using it as number of servings._::_There are %n numbers found in the \"recipeYield\" field. Using the highest number found as number of servings._" : ["Se encontró un único número en el campo \"recipeYield\". Se utilizará este valor como el número de porciones.","Hay %n números en el campo \"recipeYield\". Se utilizará el número más alto encontrado como el número de porciones.","Hay %n números en el campo \"recipeYield\". Se utilizará el número más alto encontrado como el número de porciones."],
    "Could not parse \"recipeYield\" field. Falling back to 1 serving." : "No fue posible procesar el campo \"recipeYield\". Se utilizará 1 como el número de porciones.",
    "Could not parse recipe tools. Expected array or string." : "No fue posible procesar los implementos para la receta. Se esperaba un arreglo o una cadena.",
    "Could not find recipe in HTML code." : "No se ha podido encontrar la fórmula en el código HTML.",
    "JSON cannot be decoded." : "El JSON no puede ser decodificado.",
    "No recipe was found." : "¡No se ha encontrado la formula!",
    "Parsing of HTML failed." : "Fallo en el análisis de HTML.",
    "Unsupported error level during parsing of XML output." : "Nivel de error no soportado durante el análisis de la salida XML.",
    "_Warning %u occurred while parsing %s._::_Warning %u occurred %n times while parsing %s._" : ["El aviso %u ha saltado al analizar %s.","El aviso %u ha saltado %n veces al analizar %s.","El aviso %u ha saltado %n veces al analizar %s."],
    "_Error %u occurred while parsing %s._::_Error %u occurred %n times while parsing %s._" : ["El error %u ha sucedido al analizar %s.","El error %u ha ocurrido %n veces al analizar %s.","El error %u ha ocurrido %n veces al analizar %s."],
    "_Fatal error %u occurred while parsing %s._::_Fatal error %u occurred %n times while parsing %s._" : ["Ha ocurrido el error fatal %u al analizar %s.","Ha ocurrido %n veces el error fatal %u al analizar %s.","Ha ocurrido %n veces el error fatal %u al analizar %s."],
    "First time it occurred in line %u and column %u" : "La primera vez que ocurrió en la línea %u y la columna %u",
    "Could not parse duration {duration}" : "No fue posible procesar la duración {duration}",
    "The recipe has already an image file. Cannot create a new one." : "La receta ya tiene un archivo de imagen. No se puede crear una nueva.",
    "There is no primary image for the recipe present." : "No hay imagen primaria para la presente recete.",
    "Cannot parse non-POST multipart encoding. This is a bug." : "No se puede analizar la codificación multiparte que no es POST. Esto es un error.",
    "Cannot detect type of transmitted data. This is a bug, please report it." : "No se pudo detectar el tipo de datos transmitidos. Esto es un error, por favor informe de esto.",
    "Invalid URL-encoded string found. Please report a bug." : "Se ha encontrado una cadena no válida de codificación URL. Por favor, informe de este error.",
    "Could not parse timestamp {timestamp}" : "No fue posible procesar la marca de tiempo {timestamp}",
    "The user is not logged in. No user configuration can be obtained." : "El usuario no está conectado. No se puede obtener la configuración del usuario.",
    "Recipes" : "Recetas",
    "The user folder cannot be created due to missing permissions." : "La carpeta de usuario no se puede crear debido a que faltan permisos.",
    "The configured user folder is a file." : "La carpeta de usuario configurada es un archivo.",
    "User cannot create recipe folder" : "El usuario no puede crear la carpeta de recetas",
    "in %s" : "en %s",
    "Cannot read content of JSON file %s" : "No se puede leer el contenido del archivo JSON %s",
    "The JSON file in the folder with ID %d does not have a valid name." : "El archivo JSON en la carpeta con ID %d no tiene un nombre válido.",
    "Could not parse URL" : "No se ha podido analizar la URL",
    "Exception while downloading recipe from %s." : "Excepción al descargar la receta de %s.",
    "Download from %s failed as HTTP status code %d is not in expected range." : "Descarga desde %s falló porque el código de estado HTTP %d no está en el rango esperado",
    "Could not find a valid encoding when parsing %s." : "No se pudo encontrar una codificación válida al analizar %s.",
    "No parser found for the given import." : "No se ha encontrado ningún analizador para la importación indicada.",
    "No recipe name was given. A unique name is required to store the recipe." : "No se ha dado ningún nombre a la fórmula. Se requiere un nombre único para almacenar la fórmula.",
    "Another recipe with that name already exists" : "Ya existe otra receta con ese nombre",
    "Cannot download image using curl" : "No se puede descargar la imagen usando curl",
    "No recipe data found. This is a bug" : "No se han encontrado datos de la fórmula. Esto es un error",
    "Recipe with ID %d not found." : "No se ha encontrado la receta con ID%d.",
    "Image size \"%s\" is not recognized." : "No se reconoce el tamaño «%s» de la imagen.",
    "The full-sized image is not a thumbnail." : "La imagen a tamaño completo no es una miniatura.",
    "The thumbnail type %d is not known." : "No se conoce el tipo de vista previa %d. ",
    "Cookbook" : "Recetario",
    "An integrated cookbook using schema.org JSON files as recipes" : "Recetario que utiliza archivos JSON para recetas según el estándar schema.org",
    "A library for all your recipes. It uses JSON files following the schema.org recipe format. To add a recipe to the collection, you can paste in the URL of the recipe, and the provided web page will be parsed and downloaded to whichever folder you specify in the app settings." : "Una biblioteca para todas tus recetas. Utiliza archivos en formato JSON, según el estándar schema.org. Para añadir una receta a la colección puedes copiar  y pegar el URL de la receta, de manera que la página web es analizada y descargada en la carpeta especificada en la configuración de la aplicación.",
    "Category" : "Categoría",
    "Recipe name" : "Nombre de la receta",
    "Tags" : "Etiquetas",
    "Search for recipes" : "Buscar recetas",
    "Are you sure you want to delete this recipe?" : "¿Realmente quieres borrar la receta?",
    "Delete failed" : "Ha fallado el borrado",
    "Editing recipe" : "Editando receta",
    "Viewing recipe" : "Viendo receta",
    "All recipes" : "Todas las recetas",
    "None" : "Ninguno",
    "Loading app" : "Cargando app",
    "Loading recipe" : "Cargando receta",
    "Recipe not found" : "Receta no encontrada",
    "Page not found" : "Página no encontrada",
    "Creating new recipe" : "Creando receta nueva",
    "Edit" : "Editar",
    "Save" : "Guardar",
    "Search" : "Buscar",
    "Filter current recipes" : "Filtrar recetas actuales",
    "Filter" : "Filtro",
    "Search recipes" : "Buscar recetas",
    "Reload recipe" : "Recargar receta",
    "Abort editing" : "Abortar edición",
    "Print recipe" : "Imprimir receta",
    "Clone recipe" : "Clonar receta",
    "Delete recipe" : "Borrar receta",
    "Path to your recipe collection" : "Ruta a tu colección de recetas",
    "Cannot access recipe folder." : "No puede acceder a la carpeta de recetas.",
    "Select recipe folder" : "Selecciona la carpeta de recetas",
    "You are logged in with a guest account. Therefore, you are not allowed to generate arbitrary files and folders on this Nextcloud instance. To be able to use the Cookbook app as a guest, you need to specify a folder where all recipes are stored. You will need write permission to this folder." : "Se ha registrado con una cuenta de invitado. Por ello no tiene permitido crear archivos o carpetas en este Nextcloud. Para ser capaz de usar la app del Recetario como invitado, deberá especificar la carpeta donde están las recetas. Necesitará permisos de escritura en dicha carpeta.",
    "Failed to load category {category} recipes" : "Error al cargar la categoría {category} de las recetas",
    "Failed to update name of category \"{category}\"" : "Error al actualizar la categoría \"{category}\"",
    "The server reported an error. Please check." : "El servidor ha informado de un error. Por favor, compruébalo.",
    "Could not query the server. This might be a network problem." : "No se ha podido consultar al servidor. Puede deberse a un error de red.",
    "Loading category recipes …" : "Cargando las categorías de las recetas …",
    "Failed to fetch categories" : "Fallo al buscar las categorías",
    "Create recipe" : "Crear nueva receta",
    "Download recipe from URL" : "Descargar receta desde URL",
    "Uncategorized recipes" : "Recetas sin categoría",
    "Categories" : "Categorías",
    "Rename" : "Renombrar",
    "Enter new category name" : "Escribe una nueva categoría",
    "Cookbook settings" : "Configuración del recetario",
    "Path to your recipe image" : "Ruta a tu imagen de la receta",
    "Enter URL or select from your Nextcloud instance on the right" : "Introduce la URL o selecciona desde tu instancia de Nextcloud a la derecha",
    "Pick a local image" : "Seleccione una imagen local",
    "Move entry up" : "Mover entrada hacia arriba",
    "Move entry down" : "Mover entrada hacia abajo",
    "Insert entry above" : "Insertar entrada encima",
    "Delete entry" : "Eliminar entrada",
    "Add" : "Añadir",
    "Select option" : "Seleccione opción",
    "Delete nutrition item" : "Eliminar ítem de nutrición",
    "Please select option first." : "Por favor, seleccione una opción primero.",
    "No recipes created or imported." : "No hay recetas creadas o importadas.",
    "To get started, you may use the text box in the left navigation bar to import a new recipe. Click below to create a recipe from scratch." : "Para comenzar, puede usar el cuadro de texto en la barra de navegación izquierda para importar una nueva receta. Haga clic a continuación para crear una receta desde cero.",
    "No recipes" : "Sin recetas",
    "Create new recipe!" : "¡Crear nueva receta!",
    "Name" : "Nombre",
    "Show settings for filtering recipe list" : "Mostrar ajustes para el filtrado de la lista de recetas",
    "Order" : "Ordenar",
    "Show filter settings" : "Mostrar los ajustes de filtrado",
    "Filter name" : "Nombre del filtro",
    "Search term" : "Término de búsqueda",
    "All categories" : "Todas las categorías",
    "Show recipes containing any selected category" : "Mostrar recetas que contengan cualquier categoría seleccionada",
    "Show recipes containing all selected categories" : "Mostrar recetas que contengan todas las categorías seleccionadas",
    "All keywords" : "Todas las palabras clave",
    "Keywords" : "Palabras clave",
    "Show recipes containing any selected keyword" : "Mostrar recetas que contengan cualquier palabra clave seleccionada",
    "Show recipes containing all selected keywords" : "Mostrar recetas que contengan todas las palabras clave seleccionadas",
    "Clear" : "Borrar",
    "Recipe filters" : "Filtros de receta",
    "Matching all selected categories" : "Haciendo coincidir todas las categorías seleccionadas",
    "Matching any selected category" : "Haciendo coincidir cualquier categoría seleccionada",
    "Matching all selected keywords" : "Haciendo coincidir todas las palabras claves seleccionadas",
    "Matching any selected keyword" : "Haciendo coincidir cualquier palabra clave seleccionada",
    "Apply" : "Aplicar",
    "Order keywords by number of recipes" : "Ordenar palabras clave por número de recetas",
    "Order keywords alphabetically" : "Ordenar palabras clave alfabéticamente",
    "Toggle keyword" : "Conmutar palabra clave",
    "Keyword not contained in visible recipes" : "La palabra clave no aparece en las recetas visibles",
    "Toggle keyword area size" : "Cambiar el tamaño del área de las palabras clave",
    "Creation date" : "Fecha de creación",
    "Modification date" : "Fecha de modificación",
    "Select order" : "Selecciona orden",
    "Could not set preference for image printing" : "No se pudo ajustar las preferencias para impresión de imágenes",
    "Could not set recipe update interval to {interval}" : "No se puede ajustar el intervalo de actualización de la receta a {interval}",
    "Could not save visible info blocks" : "No fue posible guardar los bloques de información visibles",
    "Could not set recipe folder to {path}" : "No fue posible establecer {path} como ruta para la carpeta de recetas",
    "Recipe folder" : "Carpeta de recetas",
    "Rescan library" : "Releer biblioteca",
    "Please pick a folder" : "Seleccionar una carpeta",
    "Update interval in minutes" : "Intervalo de actualización en minutos",
    "Recipe display settings" : "Configuraciones de vista de recetas",
    "Print image with recipe" : "Imprimir imagen con la receta",
    "Show filters and sorting in recipe lists" : "Mostrar filtros y ordenamiento en las listas de recetas",
    "Info blocks" : "Bloques de información",
    "Control which blocks of information are shown in the recipe view. If you do not use some features and find them distracting, you may hide them." : "Controla que bloques de información se mostrarán en la vista de recetas. Si no utiliza alguna de las características y le distraen, podrá ocultarlas.",
    "Preparation time" : "Tiempo de preparación",
    "Cooking time" : "Tiempo de cocción",
    "Total time" : "Tiempo total",
    "Nutrition information" : "Información nutricional",
    "Tools" : "Herramientas",
    "Frontend debug settings" : "Ajustes de depuración de la interfaz",
    "This allows to temporarily enable logging in the browser console in case of problems. You will not need these settings by default." : "Esto le permite habilitar temporalmente el registro en la consola del navegador en caso de problemas. No necesitará estos ajustes por defecto.",
    "Enable debugging" : "Habilitar modo de depuración",
    "Dismiss" : "Descartar",
    "Cancel" : "Cancelar",
    "OK" : "OK",
    "The page was not found" : "Página no encontrada",
    "You have unsaved changes! Do you still want to leave?" : "¡Tiene cambios sin guardar! , ¿Está seguro que desea salir?",
    "Calories" : "Calorías",
    "E.g.: 450 kcal (amount & unit)" : "P. ej.: 450 kcal (cantidad y unidad)",
    "Carbohydrate content" : "Contenido de carbohidratos",
    "E.g.: 2 g (amount & unit)" : "P. ej.: 2 g (cantidad y unidad)",
    "Cholesterol content" : "Contenido de colesterol",
    "Fat content" : "Contenido de grasas",
    "Fiber content" : "Contenido de fibra",
    "Protein content" : "Contenido de proteína",
    "Saturated-fat content" : "Contenido de grasas saturadas",
    "Serving size" : "Tamaño de porción",
    "Enter serving size (volume or mass)" : "Introduce el tamaño de la porción (volumen o masa)",
    "Sodium content" : "Contenido de sodio",
    "Sugar content" : "Contenido de azúcar",
    "Trans-fat content" : "Contenido de grasas trans",
    "Unsaturated-fat content" : "Contenido de grasas insaturadas",
    "Failed to fetch keywords" : "Fallo al recuperar las palabras clave",
    "Unknown answer returned from server. See logs." : "El servidor respondió algo desconocido. Echa un vistazo a los registros.",
    "No answer for request was received." : "No se ha recibido respuesta a la petición.",
    "Could not start request to save recipe." : "No se pudo iniciar la petición de guardado de receta.",
    "Clone of {name}" : "Clon de {name}",
    "Loading recipe failed" : "Fallo al cargar la receta",
    "Description" : "Descripción",
    "URL" : "URL",
    "Image" : "Imagen",
    "Preparation time (hours:minutes:seconds)" : "Tiempo de preparación (horas:minutos:segundos)",
    "Cooking time (hours:minutes:seconds)" : "Tiempo de cocción (horas:minutos:segundos)",
    "Total time (hours:minutes:seconds)" : "Tiempo total (horas:minutos:segundos)",
    "Choose category" : "Escoge una categoría",
    "Choose keywords" : "Escoge palabras clave",
    "Servings" : "Porciones",
    "Toggle if the number of servings is present" : "Seleccione si el número de porciones está presente",
    "Nutrition Information" : "Información de nutrición",
    "Pick option" : "Elegir opción",
    "Ingredients" : "Ingredientes",
    "Instructions" : "Instrucciones",
    "Recipe image" : "Imagen de la receta",
    "Cooking time is up!" : "¡Se acabó el tiempo de cocción!",
    "{item} copied to clipboard" : "{item} copiado al portapapeles",
    "Copying {item} to clipboard failed" : "Fallo al copiar {item} al portapapeles",
    "ingredients" : "ingredientes",
    "Loading…" : "Cargando…",
    "Search recipes with this keyword" : "Buscar recetas con esta palabra clave",
    "Date created" : "Fecha de creación",
    "Last modified" : "Última modificación",
    "Source" : "Origen",
    "Copy ingredients to the clipboard" : "Copiar ingredientes al portapapeles",
    "Copy ingredients" : "Copiar ingredientes",
    "Serving Size" : "Tamaño de la porción",
    "Energy" : "Energía",
    "Sugar" : "Azúcar",
    "Carbohydrate" : "Carbohidratos",
    "Cholesterol" : "Colesterol",
    "Fiber" : "Fibra",
    "Protein" : "Proteínas",
    "Sodium" : "Sodio",
    "Fat total" : "Grasas totales",
    "Saturated Fat" : "Grasas saturadas",
    "Unsaturated Fat" : "Grasas no saturadas",
    "Trans Fat" : "Grasas trans",
    "The ingredient cannot be recalculated due to incorrect syntax. Please ensure the syntax follows this format: amount unit ingredient and that a specific number of portions is set for this function to work correctly. Examples: 200 g carrots or 1 pinch of salt." : "El ingrediente no puede ser re-calculado debido a una sintaxis incorrecta. Por favor, asegúrese de que la sintaxis cumpla con este formato: cantidad unidad ingrediente y que una cantidad específica de porciones está establecida para que esta función opere correctamente. Ejemplos: 200 g zanahorias o 1 pizca de sal.",
    "Failed to load recipes with keywords: {tags}" : "Fallo al cargar recetas con palabras clave: {tags}",
    "Failed to load search results" : "Fallo al cargar los resultados de la búsqueda"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
