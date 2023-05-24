//Lista spesa
let list = [
    'Mandarini',
    'Spinaci',
    'Zucchine',
    'Pasta',
    'Patatine',
    'Limoni'
]

const stampa = document.getElementById('list');
let i = 0;

//Ciclo while
while(i < list.length){
    let lista = list[i]
    let list_stampa = document.createElement('li')
    stampa.append(list_stampa)
    list_stampa.innerHTML = lista
    i++; 
}
