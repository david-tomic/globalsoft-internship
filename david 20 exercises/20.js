// 20. Ili editiraj html ili ga ubaci kroz JS Dom createElement, koji ima tekst “Stavi random boju”. Koji kada se klikne postavi pozadinu boje od stranice u neku po tvom izboru ili neku od random boja, mozes predefinirati niz boja npr plava zuta crvena bla bla, pa nek random vrati neku

function getRandomColor () {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}

div = document.createElement("div");
div.textContent = "Stavi random boju"
div.addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
})

document.body.append(div)
