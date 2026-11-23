# Modeler Toolkit

Modeler Toolkit est un plugin Blockbench pour optimiser les textures, ajouter des contours aux modèles et personnaliser les rendus GIF.

## Installation

1. Dans Blockbench 5.2 ou plus récent, ouvrez **Fichier > Plugins**.
2. Cliquez sur l’icône en forme de nuage **Charger un plugin via une URL**.
3. Cliquez sur l’icône de copie en haut à droite du bloc ci-dessous, puis collez l’adresse dans le champ **URL** de Blockbench.

   ```text
   https://raw.githubusercontent.com/RushLd/ModelerToolkit/main/modeler_toolkit.js
   ```

4. Validez, confirmez l’installation, puis relancez Blockbench.

## Fonctionnalités

- **Optimiser la texture et les UV** - Réutilise les mêmes pixels pour les faces identiques, même retournées, et masque les faces entièrement transparentes. Compatible avec les textures animées.
- **Optimiser les variantes de texture** - Réorganise ensemble les textures interchangeables pour qu’elles continuent de s’appliquer aux mêmes faces.
- **Fusionner les textures en un atlas** - Regroupe les textures du modèle dans une seule image, animée si nécessaire.
- **Créer une texture avec des UV indépendants** - Donne à chaque face sa propre zone pour la peindre séparément.
- **Restaurer les textures et UV d’origine** - Revient à la dernière sauvegarde des textures et de leur placement sur le modèle.
- **Restaurer les UV d’origine** - Rétablit le placement de la texture sur les faces sélectionnées si une sauvegarde existe.
- **Créer des cubes inversés** - Duplique les cubes sélectionnés pour rendre leurs faces visibles de l’intérieur.
- **Créer des contours** - Ajoute un contour réglable autour des éléments sélectionnés.
- **Afficher / masquer les calques** - Affiche ou masque les éléments dont le nom contient `_layer`, avec un raccourci configurable.
- **Modèles d’aperçu personnalisés** - Importez vos fichiers `.bbmodel` et leurs textures dans les paramètres, puis affichez-les depuis le clic droit dans la vue 3D. La bibliothèque reste en place après redémarrage.
- **Enregistrer un GIF** - Choisissez une ou plusieurs animations dans la fenêtre d’enregistrement, même en dehors du mode Animer.
- **Aperçu du rendu GIF** - Affiche une image fixe avec le cadrage et les réglages de la capture.
- **Ombre dynamique / Rendu propre** - Projette une ombre réglable et limite les bavures de pixels sur les bords des faces.
- **Éclairage personnalisé** - Règle la direction, la hauteur, la teinte et l’intensité de la lumière, ainsi que l’éclairage ambiant.
- **Sol de rendu** - Ajoute un sol temporaire uni ou en dalles pour recevoir l’ombre.
- **Afficher les images de référence** - Inclut les images de référence visibles dans l’aperçu et le GIF.
- **Filigrane** - Ajoute une ligne de texte avec une police, une couleur, une taille et une position au choix.
- **Paramètres de Modeler Toolkit** - Choisissez le français ou l’anglais et définissez vos réglages de rendu par défaut. La fenêtre GIF mémorise vos choix et permet de reprendre les valeurs du plugin.

## Guide rapide

### Optimiser, fusionner ou séparer les textures

- **Optimiser la texture et les UV** réorganise les zones utilisées et partage les motifs identiques. Le plugin conserve la résolution UV et laisse au moins 1 pixel transparent entre les zones distinctes.
- **Optimiser les variantes de texture** applique la même disposition à plusieurs versions interchangeables d’une texture. Chaque version conserve sa propre image.
- **Fusionner les textures en un atlas** rassemble plusieurs textures dans une seule image. Si elles sont animées, la fusion est possible lorsque le plugin peut reproduire leurs boucles d’origine.
- **Créer une texture avec des UV indépendants** donne à chaque face une zone à peindre. Cette option est utile si une retouche doit s’appliquer à une seule face.

Après un changement, **Restaurer les textures et UV d’origine** remonte d’une étape. Le fichier `.bbmodel` conserve les sauvegardes lorsque vous enregistrez le projet.

### Préparer et enregistrer un GIF

Dans la fenêtre d’enregistrement GIF, choisissez les animations à jouer et réglez le cadrage, le fond, l’éclairage, le sol et le filigrane. **Aperçu du rendu GIF** montre une image fixe avec ces réglages. Si une animation est sélectionnée, il affiche sa première pose. Pour intégrer les images de référence visibles, cochez **Afficher les images de référence**.

Le plugin mémorise vos réglages de capture après fermeture de Blockbench. **Reprendre les réglages du plugin** réapplique les valeurs par défaut du rendu, de l’éclairage et du sol.

### Afficher un modèle de référence dans la vue 3D

Dans **Fichier > Plugins > Modeler Toolkit > Settings**, ouvrez **Modèles d’aperçu personnalisés** et importez un fichier `.bbmodel` avec ses textures. Faites ensuite un clic droit sur une zone vide de la vue 3D et sélectionnez votre référence dans **Modèles d’aperçu**. Vous pouvez l’utiliser pour comparer les proportions avec celles de votre modèle. La bibliothèque reste disponible après redémarrage.

## Licence

Vous pouvez utiliser, modifier et redistribuer Modeler Toolkit sous [licence MIT](LICENSE). Toute copie ou partie substantielle du plugin doit conserver la mention de copyright et le texte de la licence.
