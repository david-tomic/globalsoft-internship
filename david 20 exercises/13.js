// 13. Napravi metodu dodaj task, koja će primati naziv taska, i postavljati mu inicijalno vrijednost na false, e.g. “napravi ručak”, i nakon toga pozovi opet ispis taskova


tasks =[
    { id: 1, text: "todo laundry", done: false},
    { id: 1, text: "finish lecture", done: false},
    { id: 1, text: "play videogames", done: true},
]


function dodajTask (tasks, imeTaska) {
    tasks.push(
        { id: 1, text: imeTaska, done: false},
    )
}

dodajTask(tasks, "napravi ručak")
console.table(tasks)