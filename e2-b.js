const dijkstras = require('./dijkstras');

var g = dijkstras.createGraph();

g.addVertex('A', {
    B: 6,
    D: 5,
    G: 8,
});

g.addVertex('B', {
    A: 6,
    C: 7,
    D: 1
});

g.addVertex('C', {
    B: 7,
    D: 4,
    E: 11,
    F: 2
});

g.addVertex('D', {
    A: 5,
    B: 1,
    C: 4,
    E: 6,
    H: 3
});

g.addVertex('E', {
    C: 11,
    F: 2,
    D: 6,
    G: 10,
});

g.addVertex('F', {
    E: 2,
    C: 2,
    H: 4,
});

g.addVertex('G', {
    A: 8,
    E: 10,
    H: 2,
});

g.addVertex('H', {
    F: 4,
    D: 3,
    G: 2,
});


// operações
var pathStart = 'A';
var pathEnd = 'F';

var shortestPath = g.shortestPath(pathStart, pathEnd);
var distance = g.calcDistance(shortestPath);

console.log('Caminho mais curto de ' + pathStart + ' à ' + pathEnd + ': [ ' + shortestPath.toString().replace(/\,/g, ' => ') + ' ]');
console.log('A distância/peso do caminho é: ' + distance);
