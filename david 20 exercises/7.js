// 7. Kreiraj metode , printNajboljiUcenik, printNajstariji , koje primaju taj niz učenika, koja će iz tog niza objekata pronaći onog koji ima najveću ocjenu / kojem je datum rođena najstariji

let imena = ["Pero", "Marko", "Roko", "Ivano", "Niko", "Marin", "Fran", "Ivan", "Ahmed", "Ivo"];
let prezimena = ["Šunjić", "Ivanković", "Matić", "Marić", "Vidović", "Pejković"];
const godista = [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013];
const zakljucne = [4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0];


let ucenici = imena.map(n => {
    return {
        ime: n,
        prezime: prezimena[Math.floor(Math.random()*prezimena.length)],
        godiste: godista[Math.floor(Math.random()*godista.length)],
        zakljucnaOcjena: zakljucne[Math.floor(Math.random()*zakljucne.length)],
    }
})




function printNajboljiUcenik(ucenici) {
    let ocjene = [];
    ucenici.map(ucenik => {ocjene.push(ucenik.zakljucnaOcjena)});

    let max = ocjene[0];
    let max_index = 0;
    for (let i = 1; i<ocjene.length; i++) {
        if (ocjene[i] > max) {
            max_index = i;
            max = ocjene[i]
        }
    }
    console.log("Najbolji ucenik:")
    console.log(ucenici[max_index]);
    return(ucenici[max_index]);
}

function printNajstariji(ucenici) {
    let godista = [];
    ucenici.map(ucenik => {godista.push(ucenik.godiste)});

    let min = godista[0];
    let min_index = 0;
    for (let i = 1; i<godista.length; i++) {
        if (godista[i] < min) {
            min_index = i;
            min = godista[i]
        }
    }
    console.log("Najstariji ucenik:")
    console.log(ucenici[min_index]);
    return(ucenici[min_index]);
}

ucenici.map(n => console.log(n));
printNajboljiUcenik(ucenici);
printNajstariji(ucenici);

