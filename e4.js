const dijkstras = require('./dijkstras');

var g = dijkstras.createGraph();

g.addVertex('A', {
    O: 2,
    D: 7,
    B: 2,
});

g.addVertex('B', {
    D: 4,
    E: 3,
    C: 1,
    O: 5,
    A: 2,
});

g.addVertex('C', {
    B: 1,
    O: 4,
    E: 4,
});

g.addVertex('D', {
    T: 5,
    B: 4,
    A: 7,
    E: 1,
});

g.addVertex('E', {
    T: 7,
    D: 1,
    E: 3,
    C: 4,
});

g.addVertex('O', {
    A: 2,
    B: 5,
    C: 4,
});

g.addVertex('T', {
    D: 5,
    E: 7,
});


// operações
var pathStart = 'O';
var pathEnd = 'T';

var shortestPath = g.shortestPath(pathStart, pathEnd);
var distance = g.calcDistance(shortestPath);

console.log('Caminho mais curto de ' + pathStart + ' à ' + pathEnd + ': [ ' + shortestPath.toString().replace(/\,/g, ' => ') + ' ]');
console.log('A distância/peso do caminho é: ' + distance);
