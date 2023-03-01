const listaDom = [
    "pasta",
    "uova",
    "funghi",
    "olive",
    "crackers"
];

console.log(listaDom);

let prodottoLista = 0;

let internoLista = document.querySelector(".lista");

while (prodottoLista < listaDom.length) {
    
    internoLista.innerHTML += 
    `
        <li class="list_element">
            ${listaDom[prodottoLista]}             
        </li>
    `
    prodottoLista++;
};