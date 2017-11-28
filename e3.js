const dijkstras = require('./dijkstras');

var g = dijkstras.createGraph();

g.addVertex('A', {
    B: 8,
    D: 5,
    E: 4,
});

g.addVertex('B', {
    A: 8,
    C: 3,
    E: 12,
    F: 4,
});

g.addVertex('C', {
    B: 3,
    G: 11,
    F: 9,
});

g.addVertex('D', {
    A: 5,
    E: 9,
    H: 6,
});

g.addVertex('E', {
    A: 4,
    B: 12,
    D: 9,
    F: 3,
    J: 5,
    I: 8,
});

g.addVertex('F', {
    B: 4,
    C: 9,
    E: 3,
    G: 1,
    K: 8,
});

g.addVertex('G', {
    C: 11,
    F: 1,
    K: 8,
    L: 7,
});

g.addVertex('H', {
    I: 2,
    D: 6,
    M: 7,
});

g.addVertex('I', {
    M: 6,
    J: 10,
    E: 8,
    H: 2,
});

g.addVertex('J', {
    E: 5,
    K: 6,
    N: 9,
    I: 10,
});

g.addVertex('K', {
    P: 7,
    L: 5,
    G: 8,
    F: 8,
    J: 6,
});

g.addVertex('L', {
    P: 6,
    K: 5,
    G: 7,
});

g.addVertex('M', {
    N: 2,
    I: 6,
    H: 7,
});

g.addVertex('N', {
    P: 12,
    J: 9,
    M: 2,
});

g.addVertex('P', {
    L: 6,
    K: 7, // foi mesmo
    N: 12,
});


// operações
var pathStart = 'A';
var pathEnd = 'P';

var shortestPath = g.shortestPath(pathStart, pathEnd);
var distance = g.calcDistance(shortestPath);

console.log('Caminho mais curto de ' + pathStart + ' à ' + pathEnd + ': [ ' + shortestPath.toString().replace(/\,/g, ' => ') + ' ]');
console.log('A distância/peso do caminho é: ' + distance);
