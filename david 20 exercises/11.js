// 11. Dolazi sa backenda npr lista taskova, koji izgledaju ovako npr : [{id:1, text: “todo laundry”, done:false}, {id:1, text: “finish lecture”, done:false}, {id:1, text: “play videogames”, done:true}] . Napravi metodu koja će pisati tekst Completed items (brojCompleted / brojTaskova) => 33% . Također napravi checkAllMetodu koja vraća drugi niz a da ne mutira taj (napravi kopiju input niza, i editiraj kopiju i vrati kopiju) , mozes uz map object spread


tasks =[
    { id: 1, text: "todo laundry", done: false},
    { id: 1, text: "finish lecture", done: false},
    { id: 1, text: "play videogames", done: true},
]


function checkAll (tasks) {
    let completed_tasks = 0;
    tasks.forEach(element => {completed_tasks += element.done});
    console.log(`Completed items: ${(completed_tasks/tasks.length*100).toFixed(3)}%`);
}

checkAll(tasks)

// Također napravi checkAllMetodu koja vraća drugi niz a da ne mutira taj (napravi kopiju input niza, i editiraj kopiju i vrati kopiju) , mozes uz map object spread

// Nisam bas skontao sto tocno treba ovdje

