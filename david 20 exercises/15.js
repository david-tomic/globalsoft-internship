// 15. Koristeći slice napravi metodu koja vraća prva 2 taska, e.g. dajNajbitnije

tasks =[
    { id: 1, text: "todo laundry", done: false},
    { id: 1, text: "finish lecture", done: false},
    { id: 1, text: "play videogames", done: true},
]


function dajNajbitnije(tasks) {
    return tasks.slice(0,2);
}


console.table(dajNajbitnije(tasks))