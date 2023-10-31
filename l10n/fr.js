OC.L10N.register(
    "cookbook",
    {
    "No image with the matching MIME type was found on the server." : "Aucune image au format MIME correspondant n'a été trouvée sur le serveur.",
    "Recipe with ID %d was not found in database." : "La recette avec l'ID %d n'a pas été trouvée dans la base de données.",
    "Downloading of a file failed returned the following error message: %s" : "Le téléchargement d'un fichier a renvoyé le message d'erreur suivant : %s",
    "No content encoding was detected in the content." : "Aucun encodage de contenu détecté dans le contenu.",
    "The given image for the recipe %s cannot be parsed. Aborting and skipping it." : "L'image fournie pour la recette %s ne peut être traitée. Non traitée et ignorée.",
    "No valid recipe was left after heuristics of recipe %s." : "Aucune recette valide après recherche de recettes %s.",
    "Heuristics failed for image extraction of recipe %s." : "Les heuristiques lors de l'extraction de l'image pour la recette %s.",
    "Could not guess image URL as no recipe URL was found." : "URL de l'image non trouvé  car URL de la recette invalide.",
    "Could not guess image URL scheme from recipe URL %s" : "Schéma de l'URL de l'image non trouvé à partir de l'URL de la recette1%s",
    "Could not parse recipe ingredients. It is no array." : "Impossible de lire les ingrédients de la recette. Ils ne sont pas un tableau.",
    "Could not parse recipe instructions as they are no array." : "Impossible de lire les instructions de la recette. Elles ne sont pas un tableau.",
    "Cannot parse recipe: Unknown object found during flattening of instructions." : "Impossible de traiter la recette : objet inconnu trouvé durant la mise à plat des instructions.",
    "Did not find any p or li entries in the raw string of the instructions." : "Aucun élément « p » ou « li » trouvé dans la chaine brute des instructions.",
    "Could not parse the keywords for recipe {recipe}." : "Impossible d'analyser les mots-clefs pour la recette {recipe}.",
    "Could not parse the nutrition information successfully for recipe {name}." : "Impossible d'analyser avec succès les informations nutritionnelles pour la recette {name}.",
    "Using heuristics to parse the \"recipeYield\" field representing the number of servings of recipe {name}." : "Analyser heuristique du champ \"recipeYield\" représentant le nombre de portions de la recette {name}.",
    "_Only a single number was found in the \"recipeYield\" field. Using it as number of servings._::_There are %n numbers found in the \"recipeYield\" field. Using the highest number found as number of servings._" : ["Un seul nombre trouvé dans le champ \"recipeYield\". Utilisation de celui-ci comme nombre de portions.","%n nombres trouvés dans le champ \"recipeYield\". Utilisation du plus grand nombre comme nombre de portions.","%n nombres trouvés dans le champ \"recipeYield\". Utilisation du plus grand nombre comme nombre de portions."],
    "Could not parse \"recipeYield\" field. Falling back to 1 serving." : "Impossible d'analyser le champ \"recipeYield\". Utilisation d'une portion par défaut.",
    "Could not parse recipe tools. It is no array." : "Impossible de lire les outils de la recette. Ils ne sont pas un tableau.",
    "Could not find recipe in HTML code." : "Recette introuvable dans le code HTML.",
    "JSON cannot be decoded." : "Le JSON ne peut être décodé.",
    "No recipe was found." : "Pas de recette trouvée.",
    "Parsing of HTML failed." : "Échec de l'analyse syntaxique du HTML.",
    "Unsupported error level during parsing of XML output." : "Niveau d'erreur non supporté pendant l'analyse de la sortie XML.",
    "_Warning %u occurred while parsing %s._::_Warning %u occurred %n times while parsing %s._" : ["Avertissement %u survenu pendant l'analyse de %s.","Avertissement %u survenu %n fois pendant l'analyse de %s.","Avertissement %u survenu %n fois pendant l'analyse de %s."],
    "_Error %u occurred while parsing %s._::_Error %u occurred %n times while parsing %s._" : ["Erreur %u survenue pendant l'analyse de %s.","Erreur %u survenue %n fois pendant l'analyse de %s.","Erreur %u survenue %n fois pendant l'analyse de %s."],
    "_Fatal error %u occurred while parsing %s._::_Fatal error %u occurred %n times while parsing %s._" : ["Erreur fatale %u survenue pendant l'analyse de %s.","Erreur fatale %u survenue %n fois pendant l'analyse de %s.","Erreur fatale %u survenue %n fois pendant l'analyse de %s."],
    "First time it occurred in line %u and column %u" : "Première occurence à la ligne %u, colonne %u",
    "Could not parse duration {duration}" : "Impossible d'analyser la durée {duration}",
    "The recipe has already an image file. Cannot create a new one." : "La recette a déjà un fichier image. Impossible d'en créer un nouveau.",
    "There is no primary image for the recipe present." : "Il n'y a pas d'image principale pour la présente recette.",
    "Cannot parse non-POST multipart encoding. This is a bug." : "Ne peut pas traiter les documents non POST en encodage multipart. Il s'agit d'un bug.",
    "Cannot detect type of transmitted data. This is a bug, please report it." : "Ne peut pas détecter le type de données transmises. C'est une erreur, merci de le signaler.",
    "Invalid URL-encoded string found. Please report a bug." : "Détecté une chaîne d'encodage d'URL invalide. Merci de signaler un bug.",
    "The user is not logged in. No user configuration can be obtained." : "L'utilisateur est déconnecté. Aucune configuration ne peut être obtenue.",
    "Recipes" : "Recettes",
    "The user folder cannot be created due to missing permissions." : "Le dossier utilisateur ne peut être créé à cause de permissions manquantes.",
    "The configured user folder is a file." : "Le dossier utilisateur configuré est un fichier.",
    "User cannot create recipe folder" : "L'utilisateur ne peut pas créer le dossier des recettes",
    "in %s" : "dans %s",
    "The JSON file in the folder with ID %d does not have a valid name." : "Le fichier JSON dans le dossier avec l'ID %d n'a pas un nom valide.",
    "Could not parse URL" : "Impossible d'analyser l'URL",
    "Exception while downloading recipe from %s." : "Erreur rencontrée lors du téléchargement de la recette depuis %s.",
    "Download from %s failed as HTTP status code %d is not in expected range." : "Le téléchargement depuis %s a échoué car le code HTTP %d n'est pas dans la plage attendue.",
    "Could not find a valid encoding when parsing %s." : "Encodage valide introuvable lors de l'analyse de %s.",
    "No parser found for the given import." : "Pas d'interpréteur trouvé pour l'import donné.",
    "No recipe name was given. A unique name is required to store the recipe." : "Aucun nom de recette n'a été donné. Un nom unique est nécessaire pour enregistrer la recette. ",
    "Another recipe with that name already exists" : "Une autre recette avec ce nom existe déjà",
    "No recipe data found. This is a bug" : "Pas de données de recette trouvées. Ceci est un bogue",
    "Recipe with ID %d not found." : "Recette avec identifiant %d non trouvée.",
    "Image size \"%s\" is not recognized." : "Taille d'image \"%s\" inconnue.",
    "The full-sized image is not a thumbnail." : "L'image pleine taille n'est pas une vignette.",
    "The thumbnail type %d is not known." : "Le type de vignette %d est inconnu.",
    "Cookbook" : "Livre de recettes",
    "An integrated cookbook using schema.org JSON files as recipes" : "Un livre de recettes intégré utilisant les fichiers JSON de schema.org pour stocker les recettes",
    "A library for all your recipes. It uses JSON files following the schema.org recipe format. To add a recipe to the collection, you can paste in the URL of the recipe, and the provided web page will be parsed and downloaded to whichever folder you specify in the app settings." : "Un gestionnaire pour toutes vos recettes. Utilise des fichiers JSON suivant les modèles de recettes de schema.org. Pour ajouter une recette à la collection, vous pouvez coller l'URL de la recette, et la page Web fournie sera analysée et téléchargée dans n'importe quel dossier que vous spécifiez dans les paramètres de l'application.",
    "Editing recipe" : "Modification de la recette",
    "Viewing recipe" : "Consultation de la recette",
    "All recipes" : "Toutes les recettes",
    "None" : "Aucune",
    "Loading app" : "Chargement de l'application",
    "Loading recipe" : "Chargement de la recette",
    "Recipe not found" : "Recette non trouvée",
    "Page not found" : "Page non trouvée",
    "Creating new recipe" : "Créer une nouvelle recette",
    "Edit" : "Modifier",
    "Save" : "Enregistrer",
    "Search" : "Rechercher",
    "Reload recipe" : "Recharger la recette",
    "Abort editing" : "Abandonner l'édition",
    "Print recipe" : "Imprimer la recette",
    "Delete recipe" : "Effacer la recette",
    "Filter" : "Filtrer",
    "Category" : "Catégorie",
    "Recipe name" : "Nom de la recette",
    "Tags" : "Étiquettes",
    "Search for recipes" : "Rechercher des recettes",
    "Are you sure you want to delete this recipe?" : "Êtes-vous sûr de vouloir effacer cette recette ?",
    "Delete failed" : "Échec de la suppression",
    "Cannot access recipe folder." : "Accès au dossier des recettes impossible",
    "You are logged in with a guest account. Therefore, you are not allowed to generate arbitrary files and folders on this Nextcloud instance. To be able to use the Cookbook app as a guest, you need to specify a folder where all recipes are stored. You will need write permission to this folder." : "Vous êtes connecté en tant qu'invité. De ce fait, vous ne pouvez pas créer de fichiers et dossiers dans cette instance Nextcloud. Pour pouvoir utiliser l'application CookBook, Vous devez indiquer un dossier où les recettes seront stockées. Vous devez avoir les droits d'écriture dans ce dossier.",
    "Select recipe folder" : "Choisir le dossier dans lequel stocker les recettes",
    "Path to your recipe collection" : "Chemin vers votre collection de recettes",
    "Create recipe" : "Créer une recette",
    "Uncategorized recipes" : "Recettes non catégorisées",
    "Categories" : "Catégories",
    "Rename" : "Renommer",
    "Enter new category name" : "Saisir le nom de la nouvelle catégorie",
    "Cookbook settings" : "Paramètres du livre de cuisine",
    "Download recipe from URL" : "Télécharger la recette depuis l'URL",
    "Failed to load category {category} recipes" : "Impossible de charger les recette de la catégorie {category}",
    "The server reported an error. Please check." : "Le serveur a signalé une erreur. Merci de vérifier.",
    "Could not query the server. This might be a network problem." : "Requête au serveur impossible. Cela peut être dû à un problème réseau.",
    "Loading category recipes …" : "Chargement des recettes de la catégorie ...",
    "Failed to fetch categories" : "Impossible de récupérer les catégories",
    "Enter URL or select from your Nextcloud instance on the right" : "Saisir l'URL ou sélectionner sur la droite depuis votre instance Nextcloud",
    "Pick a local image" : "Choisir une image locale",
    "Path to your recipe image" : "Chemin vers votre image d'illustration",
    "Move entry up" : "Déplacer vers le haut",
    "Move entry down" : "Déplacer vers le bas",
    "Insert entry above" : "Insérer une entrée au dessus",
    "Delete entry" : "Supprimer l'entrée",
    "Add" : "Ajouter",
    "Close" : "Fermer",
    "The page was not found" : "La page n'a pas été trouvée",
    "Name" : "Nom",
    "Description" : "Description",
    "URL" : "URL",
    "Image" : "Image",
    "Preparation time (hours:minutes)" : "Durée de préparation (heures:minutes)",
    "Cooking time (hours:minutes)" : "Durée de cuisson (heures:minutes)",
    "Total time (hours:minutes)" : "Durée totale (heures:minutes)",
    "Choose category" : "Sélectionnez une catégorie",
    "Keywords" : "Mots-clefs",
    "Choose keywords" : "Sélectionner des mots-clefs",
    "Servings" : "Portions",
    "Toggle if the number of servings is present" : "Changer si le nombre de portions est présent.",
    "Nutrition Information" : "Informations nutritionnelles",
    "Pick option" : "Choisir une option",
    "Tools" : "Ustensiles",
    "Ingredients" : "Ingrédients",
    "Instructions" : "Instructions",
    "You have unsaved changes! Do you still want to leave?" : "Vous avez des modifications non enregistrées. Voulez-vous malgré tout quitter ?",
    "Calories" : "Calories",
    "E.g.: 450 kcal (amount & unit)" : "Par ex. : 450 kcal (quantité et unité)",
    "Carbohydrate content" : "Teneur en glucides",
    "E.g.: 2 g (amount & unit)" : "Par ex. : 2 g (quantité et unité)",
    "Cholesterol content" : "Teneur en cholestérol",
    "Fat content" : "Teneur en matières grasses",
    "Fiber content" : "Teneur en fibres",
    "Protein content" : "Teneur en protéines",
    "Saturated-fat content" : "Teneur en acides gras saturés",
    "Serving size" : "Taille de la portion",
    "Enter serving size (volume or mass)" : "Saisir la taille des portions (volume ou poids)",
    "Sodium content" : "Teneur en sel",
    "Sugar content" : "Teneur en sucres",
    "Trans-fat content" : "Teneur en acides gras trans",
    "Unsaturated-fat content" : "Teneur en acides gras insaturés",
    "Failed to fetch keywords" : "Impossible de récupérer les mots-clef",
    "Loading recipe failed" : "Erreur lors du chargement de la recette",
    "Unknown answer returned from server. See logs." : "Réponse du serveur inconnu. Voir les logs.",
    "No answer for request was received." : "Pas de réponse reçue pour cette requête",
    "Could not start request to save recipe." : "Impossible de démarrer une requête pour sauvegarder la recette.",
    "Recipe image" : "Image de la recette",
    "Select order" : "Choisir l'ordre",
    "No recipes created or imported." : "Aucune recette créée ou importée.",
    "To get started, you may use the text box in the left navigation bar to import a new recipe. Click below to create a recipe from scratch." : "Pour commencer, vous pouvez utiliser la zone de texte dans la barre de navigation de gauche pour importer une nouvelle recette. Cliquez ci-dessous pour créer une recette de zéro.",
    "No recipes" : "Aucune recette",
    "No recipes matching the selected category found." : "Aucune recette n'a été trouvée dans à la catégorie sélectionnée.",
    "Try selecting a category from the left navigation bar." : "Essayez de sélectionner une catégorie dans la barre de navigation de gauche.",
    "Creation date" : "Date de création",
    "Modification date" : "Date de modification",
    "Toggle keyword" : "Choisir le mot-clef",
    "Keyword not contained in visible recipes" : "Mot-clef absent des recettes affichées",
    "Toggle keyword area size" : "Basculer la taille de la zone des mots-clefs",
    "Order keywords by number of recipes" : "Organiser les mots-clefs par nombre de recette",
    "Order keywords alphabetically" : "Organiser les mots clefs par ordre alphabétique",
    "Cooking time is up!" : "La cuisson est terminée !",
    "Search recipes with this keyword" : "Rechercher des recettes avec ce mot-clef",
    "Date created" : "Date de création",
    "Last modified" : "Dernière modification",
    "Preparation time (H:MM)" : "Durée de préparation (H:MM)",
    "Cooking time (H:MM)" : "Durée de cuisson (H:MM)",
    "Total time (H:MM)" : "Durée totale (H:MM)",
    "Serving Size" : "Taille des portions",
    "Energy" : "Énergie",
    "Sugar" : "Sucres",
    "Carbohydrate" : "Glucides",
    "Cholesterol" : "Cholestérol",
    "Fiber" : "Fibres",
    "Protein" : "Protéines",
    "Sodium" : "Sodium",
    "Fat total" : "Total matières grasses",
    "Saturated Fat" : "Acides gras saturés",
    "Unsaturated Fat" : "Acides gras insaturés",
    "Trans Fat" : "Acides gras trans",
    "Source" : "Source",
    "Copy ingredients" : "Copier les ingrédients",
    "The ingredient cannot be recalculated due to incorrect syntax. Please change it to this syntax: amount unit ingredient. Examples: 200 g carrots or 1 pinch of salt" : "L’ingrédient ne peut pas être recalculé en raison d’une syntaxe incorrecte. Veuillez la changer pour la suivante : quantité unité ingrédient. Par exemple : 200 g carottes ou 1 pincée de sel",
    "Loading…" : "Chargement...",
    "Failed to load recipes with keywords: {tags}" : "Impossible de charger les recettes avec les mots-clés : {tags}",
    "Failed to load search results" : "Impossible d'afficher les résultats de la recherche",
    "Recipe folder" : "Dossier des recettes",
    "Please pick a folder" : "Veuillez choisir un dossier",
    "Recipe display settings" : "Paramètres d'affichage de la recette",
    "Info blocks" : "Blocs d'infos",
    "Frontend debug settings" : "Paramètres de débogage de l'interface",
    "Rescan library" : "Rescanner la bibliothèque",
    "Update interval in minutes" : "Intervalle de mise à jour en minutes",
    "Print image with recipe" : "Imprimer l'image avec la recette",
    "Show keyword cloud in recipe lists" : "Afficher le nuage de mots-clefs dans les listes de recettes",
    "Control which blocks of information are shown in the recipe view. If you do not use some features and find them distracting, you may hide them." : "Contrôle quels blocs d'informations sont affichés dans la vue recette. Si vous n'utilisez pas certaines fonctionnalités et les trouvez gênantes, vous pouvez les cacher.",
    "Preparation time" : "Durée de préparation",
    "Cooking time" : "Durée de cuisson",
    "Total time" : "Temps total",
    "Nutrition information" : "Informations nutritionnelles",
    "This allows to temporarily enable logging in the browser console in case of problems. You will not need these settings by default." : "Ceci permet de temporairement activer l'enregistrement de la console du navigateur en cas de problème. Vous n'aurez pas besoin de ces paramètres par défaut.",
    "Could not set preference for image printing" : "Impossible de définir le paramètre d'impression des images",
    "Could not set recipe update interval to {interval}" : "Impossible de définir l'intervalle de mise à jour à {interval}",
    "Could not save visible info blocks" : "Impossible d'enregistrer les blocs d'infos visibles",
    "Could not set recipe folder to {path}" : "Impossible de définir {path} comme dossier de recette ",
    "Loading config failed" : "Erreur lors du chargement de la configuration",
    "Dismiss" : "Abandonner",
    "Cancel" : "Annuler",
    "OK" : "OK"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
