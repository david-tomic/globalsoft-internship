// 10. Napravi metodu koja će vratiti niz studenata sortirano abecedno po prezimenima, kao u dnevniku


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

function sortirajDnevnik(ucenici) {
    ucenici.sort((a, b) => a.prezime.localeCompare(b.prezime));
    return ucenici;
}

ucenici_sortirani = sortirajDnevnik(ucenici);
ucenici_sortirani.map(n => console.log(n));