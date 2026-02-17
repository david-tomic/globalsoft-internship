// 14. Napravi metodu dodajPriorietni task koja će umjetso na kraj niza ubaciti na početak.

tasks =[
    { id: 1, text: "todo laundry", done: false},
    { id: 1, text: "finish lecture", done: false},
    { id: 1, text: "play videogames", done: true},
]


function dodajPrioretniTask (tasks, imeTaska) {
    tasks.unshift(
        { id: 1, text: imeTaska, done: false},
    )
}

dodajPrioretniTask(tasks, "napravi ručak")
console.table(tasks)