// 8. Zelis mockati podatke sa backenda npr promijeniti ocjenu Peri Periću ili nekom drugom liku u tom nizu studenata. Napravi metodu koja će primiti id i postavljati mu najveću moguću ocjenu, i pozovi ju prije ispisa najboljeg učenika

function postaviNajvećuOcjenu (id, ucenici) {
    ucenici[id].zakljucnaOcjena = 5
}

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


postaviNajvećuOcjenu(3, ucenici);

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

printNajboljiUcenik(ucenici);