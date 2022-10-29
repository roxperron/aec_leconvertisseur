// CONVERTISSEUR DE MONNAIE


//Déclaration des variables qu'on aura besoin pour la conversion et les lier aux éléments HTML par ID
let amountToConvert = document.getElementById("amount");
let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");
let resultCurrency;




// Créer la fonction pour exécuter la conversion et gérer les erreurs possibles 
function conversionCurrency() {

    // Déclarer les variables à utiliser et appliquer la méthode .value pour récupérer leur valeur 
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;
    const amountToConvertValue = parseFloat(amountToConvert.value);


    if (amountToConvertValue === "" || isNaN(amountToConvertValue)) {
        document.getElementById("divErrorMoney").innerHTML = "Erreur:  Veuiller saisir un montant";
        document.getElementById("divErrorMoney").style.backgroundColor = "crimson";
        console.log("Error handle empty field or NaN");


    } else {

        if (fromCurrencyValue === "CAD" && toCurrencyValue === "USD") {
            resultCurrency = amountToConvertValue * 0.79921;
            document.getElementById("divResultMoney").innerHTML = `Résultat: ${amountToConvertValue} $CAD est égal à ${resultCurrency.toFixed(2)} $USD.`
            document.getElementById("divResultMoney").style.backgroundColor = "darkcyan";


        } else if (fromCurrencyValue === "CAD" && toCurrencyValue === "EURO") {
            resultCurrency = (amountToConvertValue * 0.69776);
            document.getElementById("divResultMoney").innerHTML = `Résultat: ${amountToConvertValue} $CAD est égal à ${resultCurrency.toFixed(2)} EURO.`
            document.getElementById("divResultMoney").style.backgroundColor = "darkcyan";

        } else if (fromCurrencyValue === "EURO" && toCurrencyValue === "CAD") {
            resultCurrency = (amountToConvertValue * 1.43315);
            document.getElementById("divResultMoney").innerHTML = `Résultat: ${amountToConvertValue} EURO est égae à ${resultCurrency.toFixed(2)} $CAD.`
            document.getElementById("divResultMoney").style.backgroundColor = "darkcyan";

        } else if (fromCurrencyValue === "EURO" && toCurrencyValue === "USD") {
            resultCurrency = (amountToConvertValue * 1.14515);
            document.getElementById("divResultMoneyt").innerHTML = `Résultat: ${amountToConvertValue} EURO est égal à ${resultCurrency.toFixed(2)} $USD.`
            document.getElementById("divResultMoney").style.backgroundColor = "darkcyan";

        } else if (fromCurrencyValue === "USD" && toCurrencyValue === "CAD") {
            resultCurrency = (amountToConvertValue * 1.25124);
            document.getElementById("divResultMoney").innerHTML = `Résultat: ${amountToConvertValue} $USD est égal à ${resultCurrency.toFixed(2)} à $CAD.`
            document.getElementById("divResultMoney").style.backgroundColor = "darkcyan";

        } else if (fromCurrencyValue === "USD" && toCurrencyValue === "EURO") {
            resultCurrency = (amountToConvertValue * 0.87325);
            document.getElementById("divResultMoney").innerHTML = `Résultat: ${amountToConvertValue} $USD est égal à ${resultCurrency.toFixed(2)} EURO.`
            document.getElementById("divResultMoney").style.backgroundColor = "darkcyan";

        } else {
            document.getElementById("divErrorMoney").innerHTML = "Erreur: Vous ne pouvez pas convertir la même devise.";
            document.getElementById("divErrorMoney").style.backgroundColor = "crimson";
            console.log("Select same currency");
        }
    }
}


// Afficher les choix des menus select from dynamiquement

let moneyFrom = ["Sélectionner un choix", "CAD", "USD", "EURO"];

let fromMoneySelect = document.getElementById("fromCurrency");


for (const valMoneyFrom of moneyFrom) {
    let optionMoneyFrom = document.createElement("option");
    optionMoneyFrom.text = valMoneyFrom;
    fromMoneySelect.appendChild(optionMoneyFrom);
}

// Afficher les choix des menus select to dynamiquement

let moneyTo = ["Sélectionner un choix", "CAD", "USD", "EURO"];

let toMoneySelect = document.getElementById("toCurrency");


for (const valMoneyTo of moneyTo) {
    let optionMoneyTo = document.createElement("option");
    optionMoneyTo.text = valMoneyTo;
    toMoneySelect.appendChild(optionMoneyTo);
}


// CONVERTISSEUR DE LONGEURS 


//Déclaration des variables qu'on aura besoin pour la conversion et les lier aux éléments HTML par ID
let lengthToConvert = document.getElementById("valueLength");
let fromLength = document.getElementById("fromLength");
let toLength = document.getElementById("toLength");
let resultLength;




// Créer la fonction pour exécuter la conversion et gérer les erreurs possibles 
function conversionLength() {

    // Déclarer les variables à utiliser et appliquer la méthode .value pour récupérer leur valeur 
    const fromLengthValue = fromLength.value;
    const toLengthValue = toLength.value;
    const lengthToConvertValue = parseFloat(lengthToConvert.value);


    if (lengthToConvertValue === "" || isNaN(lengthToConvertValue)) {
        document.getElementById("divErrorLength").innerHTML = "Erreur:  Veuiller saisir une valeur";
        document.getElementById("divErrorLength").style.backgroundColor = "crimson";
        console.log("Error handle empty field or NaN");


    } else {

        if (fromLengthValue === "Pouces" && toLengthValue === "Centimètres") {
            resultLength = (lengthToConvertValue * 2.54);
            document.getElementById("divResultLength").innerHTML = `Résultat: ${lengthToConvertValue} pouces est égal à ${resultLength.toFixed(2)} centimètres.`
            document.getElementById("divResultLength").style.backgroundColor = "darkcyan";


        } else if (fromLengthValue === "Centimètres" && toLengthValue === "Pouces") {
            resultLength = (lengthToConvertValue / 2.54);
            document.getElementById("divResultLength").innerHTML = `Résultat: ${lengthToConvertValue} centimètres est égal à ${resultLength.toFixed(2)} pouces.`
            document.getElementById("divResultLength").style.backgroundColor = "darkcyan";

        } else if (fromLengthValue === "Kilomètres" && toLengthValue === "Miles") {
            resultLength = (lengthToConvertValue * 0.62137);
            document.getElementById("divResultLength").innerHTML = `Résultat: ${lengthToConvertValue} kilomètres est égae à ${resultLength.toFixed(2)} miles.`
            document.getElementById("divResultLength").style.backgroundColor = "darkcyan";

        } else if (fromLengthValue === "Miles" && toLengthValue === "Kimomètres") {
            resultLength = (lengthToConvertValue / 0.62137);
            document.getElementById("divResultLength").innerHTML = `Résultat: ${lengthToConvertValue} miles est égal à ${resultLength.toFixed(2)} kilomètres.`
            document.getElementById("divResultLength").style.backgroundColor = "darkcyan";

        } else {
            document.getElementById("divErrorLength").innerHTML = "Erreur: Vous ne pouvez pas convertir le même type de longeurs.";
            document.getElementById("divErrorLength").style.backgroundColor = "crimson";
            console.log("Select same length");
        }
    }
}



// Afficher les choix des menus select from dynamiquement

let lengthFrom = ["Sélectionner un choix", "Pouces", "Centimètres", "Kilomètres", "Miles"];

let fromLengthSelect = document.getElementById("fromLength");


for (const valLengthFrom of lengthFrom) {
    let optionLengthTo = document.createElement("option");
    optionLengthTo.text = valLengthFrom;
    fromLengthSelect.appendChild(optionLengthTo);
}

// Afficher les choix des menus select to dynamiquement

let lengthTo = ["Sélectionner un choix", "Pouces", "Centimètres", "Kilomètres", "Miles"];

let toLengthSelect = document.getElementById("toLength");


for (const valLengthTo of lengthTo) {
    let optionLengthTo = document.createElement("option");
    optionLengthTo.text = valLengthTo;
    toLengthSelect.appendChild(optionLengthTo);
}



// CONVERTISSEUR DE POIDS


//Déclaration des variables qu'on aura besoin pour la conversion et les lier aux éléments HTML par ID
let weightToConvert = document.getElementById("valueWeight");
let fromWeight = document.getElementById("fromWeight");
let toWeight = document.getElementById("toWeight");
let resultWeight;




// Créer la fonction pour exécuter la conversion et gérer les erreurs possibles 
function conversionWeight() {

    // Déclarer les variables à utiliser et appliquer la méthode .value pour récupérer leur valeur 
    const fromWeightValue = fromWeight.value;
    const toWeightValue = toWeight.value;
    const weightToConvertValue = parseFloat(weightToConvert.value);


    if (weightToConvertValue === "" || isNaN(weightToConvertValue)) {
        document.getElementById("divErrorWeight").innerHTML = "Erreur:  Veuiller saisir une valeur";
        document.getElementById("divErrorWeight").style.backgroundColor = "crimson";
        console.log("Error handle empty field or NaN");


    } else {

        if (fromWeightValue === "Livres" && toWeightValue === "Kilogrammes") {
            resultWeight = (weightToConvertValue / 2.2046);
            document.getElementById("divResultWeight").innerHTML = `Résultat: ${weightToConvertValue } livres est égal à ${resultWeight.toFixed(2)} kilogramemes.`
            document.getElementById("divResultWeight").style.backgroundColor = "darkcyan";


        } else if (fromWeightValue === "Kilogrammes" && toWeightValue === "Livres") {
            resultWeight = (weightToConvertValue * 2.2046);
            document.getElementById("divResultWeight").innerHTML = `Résultat: ${weightToConvertValue } kilogrammes est égal à ${resultWeight.toFixed(2)} livres.`
            document.getElementById("divResultWeight").style.backgroundColor = "darkcyan";

        } else {
            document.getElementById("divErrorWeight").innerHTML = "Erreur: Vous ne pouvez pas convertir le même type de poids.";
            document.getElementById("divErrorWeight").style.backgroundColor = "crimson";
            console.log("Select same weight");
        }
    }
}



// Afficher les choix des menus select from dynamiquement

let weightFrom = ["Sélectionner un choix", "Livres", "Kilogrammes"];

let fromWeightSelect = document.getElementById("fromWeight");


for (const valWeightFrom of weightFrom) {
    let optionWeightFrom = document.createElement("option");
    optionWeightFrom.text = valWeightFrom;
    fromWeightSelect.appendChild(optionWeightFrom);
}

// Afficher les choix des menus select to dynamiquement

let weightTo = ["Sélectionner un choix", "Livres", "Kilogrammes"];

let toWeightSelect = document.getElementById("toWeight");


for (const valWeightTo of weightTo) {
    let optionWeightTo = document.createElement("option");
    optionWeightTo.text = valWeightTo;
    toWeightSelect.appendChild(optionWeightTo);
}