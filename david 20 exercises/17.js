// 17. Koristeći dom metode kreiraj neki paragraph i dodaj mu tekst “ja sam paragraph” i ubaci ga u document body .

const paragraph = document.createElement("p");
paragraph.innerText = "ja sam paragraph";
document.body.append(paragraph);
