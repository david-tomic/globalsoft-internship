// 16. Napravi metodu koja će ispisati sve propertye koje jedan task object ima

tasks =[
    { id: 1, text: "todo laundry", done: false},
    { id: 1, text: "finish lecture", done: false},
    { id: 1, text: "play videogames", done: true},
]

function taskProperties (task) {
    console.log(Object.keys(task))
}

taskProperties(tasks[0])