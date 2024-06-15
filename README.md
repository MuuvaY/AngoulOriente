# Salut, bienvenue sur notre projet de course d'orientation intéractive

## Introduction

Ce projet est une application web progressive (PWA) qui offre une expérience utilisateur semblable à celle des applications natives tout en utilisant des technologies web modernes. Les fonctionnalités clés incluent l'accès hors ligne, le géolocalisation et l'utilisation de la caméra en guise de lecteur de qr code.

## Description

Cette application vous fait vivre une course d'orientation intéractive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visible sur la carte ainsi que votre position en temp réel. Attention ! Il est important de respecter l'ordre des points en commencant par le point n°1 et en finissant par le points n°8. A chaque points, vous trouverez un qr code que vous pourrez scanner en clique sur le ping correspondant au points sur la carte. Une fois le qr scanné, une lettre vous sera donnée. Récuperez les 8 lettres pour former un mot. A noté que la dernière balise n'est pas une lettre mais un nombre qui représente la clé d'un chiffrement de César afin de ne pas pouvoir deviner le mot avant d'avoir fais toutes les balises (plus d'infos sur le chiffrement de César: https://e-nsi.forge.aeif.fr/pratique/N1/421-code_cesar/sujet/). Une fois le mot final trouvé et déchiffré, il vous suffit de l'écrire dans le champ prévu a cet effet pour terminer la course et arréter le chrono !

## Installation sur Écran d'Accueil

Les utilisateurs peuvent installer cette application sur leur écran d'accueil pour une expérience pleine écran et sans barre d'adresse, comme une application native.

- Manifest JSON configuré avec icônes et écran de lancement
- Détection et invitation à l'installation

## Installation du projet

Forker le projet

1. `git clone https://github.com/MuuvaY/AngoulOriente.git `

Installer les dépendances 2. `npm install `

Démarrarez l'application 3. `npm run dev`

L'application sera accessible à http://localhost:5173/.

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre ces étapes pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (git checkout -b fonctionnalité/amélioration)
3. Commitez vos changements (git commit -m 'Ajout d'une fonctionnalité')
4. Poussez votre branche (git push origin fonctionnalité/amélioration)
5. Ouvrez une Pull Request

Application réalisée en React et Sass par Marius Yvart et Eliot Pouplier.
