// 12. Napravi metodu koja će provjeravati ima li ijedan task koji nije done

tasks =[
    { id: 1, text: "todo laundry", done: false},
    { id: 1, text: "finish lecture", done: false},
    { id: 1, text: "play videogames", done: true},
]

function checkCompletion(tasks) {
    let filtered = tasks.filter(task => task.done == false)
    console.log(`There are ${filtered.length} unfinished tasks!`)
    return filtered;
}

checkCompletion(tasks)