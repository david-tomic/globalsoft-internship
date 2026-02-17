// 19. Editiraj html ubaci neke elemente e.g. <p id=“mojParagraf”>test paragraph</p> . Kreiraj metodu zacrveniParagraph, koja će pronaći po idu točno taj paragraph, i promjeniti tekst i boju u JaSamCrven

function zacrveniParagraph(id) {
    paragraph = document.getElementById(id)
    paragraph.textContent = "JaSamCrven"
    paragraph.style.color = "red"
}

paragraph = document.createElement("p");
paragraph.id = "mojParagraf"
document.body.append(paragraph)

zacrveniParagraph("mojParagraf")