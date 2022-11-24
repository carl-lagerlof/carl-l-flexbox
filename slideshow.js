// Här lägger jag till alla bilder som jag vill ha i min slideshow
var imgArray = [
    './img/cola.png',
    './img/colavanilla.png',
    './img/colazero.png',
    './img/fanta.png',
    './img/fantaexotic.png'

];

var curIndex = 0;
// Här bestämmer jag hur länge varje bild ska visas innan det byts
var imgDuration = 1800;

function slideShow() {
    // Här sätter jag så att ID image1 sätts på positionen som curIndex säger
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;
    
    // Detta gör så att slideshowen börjar om efter den har gått igenom alla bilder
    if (curIndex == imgArray.length) { curIndex = 0; }
    
    // Denna är det som får en ny bild komma fram efter tiden satt i imgDuration
    setTimeout("slideShow()", imgDuration);
}
// Påbörjar slideshowen
slideShow();