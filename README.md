# Projet final

## Guide Utilisateur

l'application permet de convertir une donnée saisit par l'utilisateur selon le choix qu'il fait parmi les 3 types de conversion. 

Voici le liste des fonctionnalités:

1 Page d'acceuil 
2 Formulaire de conversion
3 Gestion des erreurs
4 Convertisseur de monnaie 
5 Convertisseur de longueur 
6 Convertisseur de poids 
....
1- La page d'acceuil sert à indiquer la marche à suivre pour l'utilisation du convertisseur.

2- Le formulaire a deux utilités très imporante: 
    1- il permets à l'utilisateur de saisir ses données 
    2- il permets de faire le pont entre les éléments HTML et le JavaScript pour la déclaration des variables, la création d'événements, la création des fonctions .

3- La gestion d'erreur sert à aviser l'utilisateur s'il a commit une erreur dans son formulaire  à la saisie des données, on valide ces erreurs: 
    1- Si le valeur saisit est un nombre décimal 
    2- Si l'utilisateur a sélectionner la même option à convertir. Par exemple, si choisit monnaie, saisit un nombre de 20.50, mais il choisit de la monnaie CAD  vers la monnaie CAD 

4- Le convertisseur de monnaie, permets de convertir un montant monaitaire en 6 possibilité: 
    1- CAD => USD 
    2- CAD => EURO
    3- USD => CAD 
    4- USD => EURO 
    5- EURO => CAD 
    6- EURO => USD 
 
5- Le convertisseur de longeur, permets de convertir une valeur en 4 possibilités: 
    1- Pouces => Centimètres 
    2- Centimètres => Pouces
    3- Kilomètres => Miles
    4- Miles => Kilomètres

6- Le convertisseur de poids, permets de convertir une valeur en 2 possibilités: 
    1- Livres => Kilogrammes
    2- Kilogrammes => Livres


....

### Avantage de Javascript

J'ai utilise Javascript car: 

1- Il est relativement facile à apprendre
2- Il est rapide: il n'attends pas une réponse du serveur pour agir.
3- Il est versatile: il ne requiert pas de programme spéciale pour l'interpréter. 
4- Il est pragmatique: on peut l'utiliser pour la validation de formulaire, calculs simples, moteur de recherche, animations graphiques et m^me pour la création de jeux vidéo.


### Fonction Javascript

Dans L'application j'ai utilisé les fonctions conversionCurrency, conversionLength et conversionWeight.

Elles permettent d'effectuer la validation des données saisie  par l'utilisateur pour retourner le résultat de la conversion et la gestion des erreurs. 

Ces trois fonctions ont chacune leur variables, qui sont liées champs d'input et de select du formulaire. Elles contiennent aussi un bloc conditionnel pour assurer la validation et la gestion des erreurs.

Ces fonctions sont appelées dans leur formulaire  respectif par un événement onClick.

