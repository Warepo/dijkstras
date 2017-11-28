const dijkstras = require('./dijkstras');

var g = dijkstras.createGraph();

g.addVertex('A', {
    B: 5,
    C: 6,
    D: 10,
});

g.addVertex('B', {
    A: 5,
    E: 13,
});

g.addVertex('C', {
    A: 6,
    D: 3,
    E: 11,
});

g.addVertex('D', {
    A: 10,
    C: 3,
    E: 6,
    F: 4,
});

g.addVertex('E', {
    B: 13,
    C: 11,
    G: 3,
    D: 6,
});

g.addVertex('F', {
    G: 8,
    C: 6,
    D: 4,
});

g.addVertex('G', {
    E: 3,
    F: 8,
});


// operações
var pathStart = 'A';
var pathEnd = 'G';

var shortestPath = g.shortestPath(pathStart, pathEnd);
var distance = g.calcDistance(shortestPath);

console.log('Caminho mais curto de ' + pathStart + ' à ' + pathEnd + ': [ ' + shortestPath.toString().replace(/\,/g, ' => ') + ' ]');
console.log('A distância/peso do caminho é: ' + distance);
