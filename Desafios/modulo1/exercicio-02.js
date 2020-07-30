// 2.1
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const map = usuarios.map(function (item) {
    return item.idade;
});

console.log(map);

// 2.2
const filter = usuarios.filter(function (item) {
    return item.empresa === "Rocketseat" && item.idade >= 18;
});

console.log(filter);

// 2.3
const find = usuarios.find(function (item) {
    return item.empresa === "Google";
});

console.log(find);

// 2.4
const calculo = usuarios.map(function (item) {
    return ({ ...item, idade: item.idade * 2 })
}).filter(function (item) {
    return item.idade <= 50
});

console.log(calculo);