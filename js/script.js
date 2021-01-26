let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    const x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

class Outfit {
    constructor(bezeichnung, preis) {
        this.bezeichnung = bezeichnung;
        this.preis = preis;
    }
}

let myOutfit = new Outfit("Kleiderstück1", "99.90 CHF");
document.getElementById("information").innerHTML = "Bezeichnung: " + myOutfit.bezeichnung + ", Preis: " + myOutfit.preis;

const text = '{"outfits": [' +
'{"bezeichnung": "rotes Kleid", "preis":  "CHF 99.90"},' +
'{"bezeichnung": "blaues Kleid", "preis":  "CHF 109.90"},' +
'{"bezeichnung": "schwarzes Kleid", "preis":  "CHF 79.90"},' +
'{"bezeichnung": "grünes Kleid", "preis":  "CHF 89.90"}]}';

obj = JSON.parse(text);
obj.outfits = undefined;
document.getElementById("information").innerHTML = obj.outfits[1].bezeichnung + " " + obj.outfits[1].preis;