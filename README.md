# Modeler Toolkit

Des outils de textures, d’UV, de modélisation et de capture pour **Blockbench 5.2 ou plus récent**. Les paramètres et les messages propres au plugin sont en français, quelle que soit la langue de Blockbench.

## Installation

1. Ouvrez **Fichier > Plugins** dans Blockbench.
2. Choisissez **Charger un plugin depuis une URL** et collez cette adresse :

   ```text
   https://raw.githubusercontent.com/RushLd/ModelerToolkit/main/modeler_toolkit.js
   ```

3. Retrouvez les outils dans le menu **Modeler Toolkit**. Les options de capture apparaissent également dans la fenêtre d’enregistrement GIF.

Vous pouvez aussi télécharger [modeler_toolkit.js](https://github.com/RushLd/ModelerToolkit/blob/main/modeler_toolkit.js), puis utiliser **Charger un plugin depuis un fichier**. Installez une seule copie. Ce dépôt est distribué indépendamment du catalogue officiel de Blockbench.

## À quoi sert chaque bouton ?

| Bouton | Fonction |
| --- | --- |
| **Optimiser la texture et les UV** | Reconstruit les textures compatibles en carrés et fait partager une même zone aux faces dont les pixels sont identiques, y compris après rotation ou miroir. Le rembourrage détecté et la transparence sont pris en compte. La texture peut devenir plus petite, mais la réduction de taille n’est pas obligatoire. |
| **Avancé > Partager les UV sans modifier la texture** | Regroupe les coordonnées UV des faces identiques sans redessiner l’image ni changer ses dimensions. Les zones devenues inutilisées restent dans la texture. |
| **Nettoyer les bords UV** | Réduit légèrement les zones UV des éléments sélectionnés pour limiter les couleurs voisines qui débordent sur leurs bords. Sauvegarde les UV avant le nettoyage. Ne fusionne pas les doublons. |
| **Restaurer les UV d’origine** | Apparaît uniquement si la sélection contient une sauvegarde compatible. Annule le nettoyage des bords sur les éléments concernés. Pour annuler une optimisation, utilisez la restauration des textures et UV décrite plus bas. |
| **Avancé > Créer des cubes inversés** | Crée des copies des cubes sélectionnés avec des faces orientées vers l’intérieur, nommées `<name>_inverted`. Utile pour rendre visibles des surfaces depuis l’intérieur. |
| **Créer des contours** | Ajoute une enveloppe agrandie avec des faces inversées autour de la sélection pour produire un contour visible. L’épaisseur et la couleur ou la texture sont réglables. Les objets créés sont nommés `<name>_outline`. |
| **Aperçu du rendu GIF** | Lance un aperçu animé avec les réglages de capture actuels : dimensions, cadrage, zoom, fond, animation, éclairage, sol, ombre et filigrane. Le temps de génération dépend de la durée choisie et de l’encodage. |
| **Paramètres de Modeler Toolkit** | Configure les modules disponibles, l’optimisation, le nettoyage UV, l’éclairage, les ombres, le sol et le filigrane. Permet aussi de rétablir les valeurs par défaut. |
| **Visibilité > Afficher / masquer les calques** | Masque les éléments et groupes dont le nom contient `_layer`, ainsi que leur contenu. Un second clic rétablit ce que le bouton a masqué. |
| **Visibilité > Afficher uniquement les calques** | Isole ces mêmes éléments et groupes `_layer` en masquant le reste. Un second clic rétablit la visibilité précédente. |

Les sous-menus **Avancé** et **Visibilité** apparaissent lorsqu’au moins un de leurs outils est disponible. Les deux boutons de calques agissent sur la hiérarchie du modèle, pas sur les calques de peinture des textures. Ils restent accessibles depuis la barre d’outils de la hiérarchie. Aucun raccourci clavier ne leur est attribué par défaut.

Le raccourci **Créer une texture (Blockbench)** a été retiré de Modeler Toolkit. L’outil natif de Blockbench reste disponible dans son interface habituelle.

Lorsque plusieurs faces partagent les mêmes UV, peindre sur cette zone de texture modifie l’apparence de toutes ces faces.

## Sauvegardes et restauration

Deux boutons supplémentaires apparaissent lorsque le projet contient des données de récupération :

- **Restaurer les textures et UV d’origine** revient à l’état précédant la dernière optimisation. Chaque restauration remonte d’une étape dans la chaîne des sauvegardes.
- **Exporter les sauvegardes des textures et UV** enregistre cette chaîne en JSON, avec les images d’origine, y compris les sauvegardes devenues incompatibles.

L’optimisation accepte **Annuler** et **Rétablir**. Les sauvegardes sont conservées dans le fichier `.bbmodel` après enregistrement et réouverture. Vous pouvez réoptimiser les textures actuelles sans perdre les sauvegardes précédentes.

Un changement de géométrie, de textures, de format ou de résolution UV peut rendre une ancienne sauvegarde incompatible. Le plugin refuse alors de l’appliquer et propose de l’exporter. Une nouvelle optimisation reste possible et crée une nouvelle étape de récupération.

## Enregistrement, éclairage, sol et ombres

Choisissez l’animation à enregistrer directement dans la fenêtre GIF, même en dehors du mode Animer.

L’ombre dynamique est calculée à partir du modèle animé et projetée sur un mur ou un sol invisible, ou sur le sol visible de rendu. Sa couleur, son opacité, sa netteté et la direction de la lumière sont réglables.

Activez **Éclairage personnalisé** dans la fenêtre GIF pour éclairer le modèle et le sol. Les valeurs par défaut se règlent aussi dans **Paramètres de Modeler Toolkit**.

- **Direction de la lumière** : 0° correspond au côté de la caméra, -90° à la gauche, 90° à la droite et 180° à l’arrière.
- **Hauteur de la lumière** : de 5° pour une lumière rasante à 90° pour une lumière au-dessus du modèle.
- **Teinte de la lumière** : chaude, neutre, froide ou couleur personnalisée.
- **Intensité de la lumière** : puissance de la source directionnelle.
- **Lumière ambiante** : éclairage neutre des faces moins exposées.

La lumière prend sa direction par rapport à la caméra au début de la capture, puis reste fixe pendant l’animation, y compris lorsque la caméra tourne. L’ombre suit cette même source ; les anciens réglages de direction de l’ombre sont alors masqués. Sans lumière directionnelle, l’ombre portée disparaît. L’éclairage est indépendant de l’activation du sol et du nettoyage UV.

Le cadre de capture, l’aperçu animé et le GIF utilisent le même rendu. Les textures et les matériaux d’origine sont rétablis après chaque image : aucun pixel de texture, UV ou réglage d’éclairage de Blockbench n’est modifié. Les matériaux émissifs et les shaders bruts personnalisés conservent leur rendu propre. Il s’agit d’un éclairage directionnel avec ambiance, sans rebonds de lumière ni calcul physique comparable à Cycles.

Activez **Sol de rendu** pour ajouter une surface temporaire unie ou en dalles. Réglez sa largeur, sa profondeur et la taille des dalles en blocs : **1 bloc = 16 unités du modèle**. Les couleurs, l’épaisseur, la hauteur et les décalages X/Z sont également configurables.

Le sol se place sous le point le plus bas du modèle à la première image enregistrée, puis reste fixe pendant l’animation. L’ombre s’arrête à ses bords. Prévoyez une surface assez grande pour les mouvements et l’ombre. Le sol est retiré à la fin de la capture, lors d’une annulation ou du déchargement du plugin. Il n’est jamais ajouté à la géométrie ni aux textures du modèle.

Le cadre de capture affiche le rendu composé avant le départ, puis les images réellement enregistrées : fond, modèle éclairé, sol, ombre et filigrane. Le cadrage et la caméra restent ajustables avant l’enregistrement.

**Aperçu du rendu GIF** utilise le moteur d’enregistrement natif avec les réglages choisis : résolution, cadrage, zoom, pixelisation, fond couleur ou image, animation, durée, fréquence d’images, rotation de la caméra, repères, éclairage, sol, ombre et filigrane. L’animation est affichée dans ses proportions réelles. La caméra et l’état de l’animation sont ensuite restaurés. Les séquences PNG sont prévisualisées en APNG, sans créer d’archive.

L’aperçu nécessite le temps de capture configuré, puis l’encodage. Il peut être annulé depuis le cadre d’enregistrement.

Le **filigrane** comporte une ligne de texte avec couleur, police, taille, position et marge réglables. Son activation se choisit séparément pour chaque capture. Les polices installées sur l’ordinateur sont proposées lorsque le système permet de les lire.

## Valeurs par défaut et confidentialité

À la première installation, le rendu dynamique, l’éclairage personnalisé, le sol et le nettoyage UV temporaire sont désactivés. Le filigrane est vide et désactivé. L’éclairage personnalisé propose une lumière blanche à 70 % d’intensité avec 30 % de lumière ambiante, venant de la gauche à 45° de hauteur. Lorsque le rendu dynamique est activé, l’ombre utilise initialement un gris neutre à 35 % d’opacité. Avec l’éclairage personnalisé, cette opacité est pondérée par la part de lumière directionnelle. Les valeurs peuvent être réinitialisées dans les paramètres de Modeler Toolkit.

Pour migrer depuis Raven Toolkit ou RavenTool, désinstallez l’ancien plugin avant de charger Modeler Toolkit. Les paramètres existants sont importés automatiquement et les anciennes données de restauration restent prises en charge. L’identifiant du plugin est `modeler_toolkit`.

Le nettoyage UV, l’inversion des cubes et les contours utilisent des implémentations développées pour ce plugin. Aucun code source d’autres plugins n’est embarqué.

Le plugin n’envoie aucun modèle, texture ou enregistrement et ne comporte ni télémétrie ni service de clé d’accès. L’ouverture des paramètres peut rechercher les polices locales. Un navigateur peut demander une autorisation ; sur Windows, la version de bureau peut lire la liste système. Les noms des polices sont conservés localement. Aucune police n’est fournie avec le plugin.

## Compatibilité et limites

- L’optimiseur traite les UV par face des cubes et les UV de maillages compatibles. Il préserve les dispositions UV en boîte, les textures animées, la composition en calques, les matériaux et les éléments incompatibles au lieu de les réorganiser.
- Les doublons sont comparés avec leur bordure détectée. Deux régions dont le rembourrage diffère restent distinctes. Les pixels ne sont ni redimensionnés ni lissés.
- De légères différences d’échantillonnage peuvent apparaître aux limites des pixels après une réorganisation des UV. Utilisez l’annulation ou la restauration si nécessaire. Les fichiers d’images d’origine ne sont pas automatiquement écrasés.
- Les données de récupération sont conservées dans les projets `.bbmodel`, pas dans les formats d’export destinés aux jeux.
- Le GIF ne représente pas les transparences partielles progressives. Pour des ombres douces, utilisez un fond opaque ou un format à transparence complète comme l’APNG.
- La découverte des polices dépend du système et du navigateur. Une police manquante peut modifier l’apparence du texte ; Arial reste disponible comme solution de repli.
- Les fenêtres et les noms de formats fournis directement par Blockbench conservent la langue et les libellés de l’application.

## Licence

Modeler Toolkit est distribué sous [licence MIT](LICENSE). Aucune dépendance d’exécution n’est embarquée : le plugin utilise les interfaces et les bibliothèques fournies par Blockbench.
