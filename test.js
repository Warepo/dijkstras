const dijkstras = require('./dijkstras');

var g = dijkstras.createGraph();

g.addVertex('A', {
    B: 7,
    C: 8
});

g.addVertex('B', {
    A: 7,
    F: 2
});

g.addVertex('C', {
    A: 8,
    F: 6,
    G: 4
});

g.addVertex('D', {
    F: 8
});

g.addVertex('E', {
    H: 1
});

g.addVertex('F', {
    B: 2,
    C: 6,
    D: 8,
    G: 9,
    H: 3
});

g.addVertex('G', {
    C: 4,
    F: 9
});

g.addVertex('H', {
    E: 1,
    F: 3
});


// operações
var pathStart = 'A';
var pathEnd = 'H';

var shortestPath = g.shortestPath(pathStart, pathEnd);
var distance = g.calcDistance(shortestPath);

console.log('Caminho mais curto de ' + pathStart + ' à ' + pathEnd + ': [ ' + shortestPath.toString().replace(/\,/g, ' => ') + ' ]');
console.log('A distância/peso do caminho é: ' + distance);
