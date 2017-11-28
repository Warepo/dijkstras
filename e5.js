const dijkstras = require('./dijkstras');

var g = dijkstras.createGraph();

g.addVertex('A', {
    B: 1,
    C: 3,
});

g.addVertex('B', {
    A: 1,
    C: 1,
    F: 1
});

g.addVertex('C', {
    A: 3,
    D: 2,
    B: 1,
    E: 4,
});

g.addVertex('D', {
    C: 2,
    E: 1,
    F: 2,
});

g.addVertex('E', {
    F: 1,
    D: 1,
    C: 4,
});

g.addVertex('F', {
    D: 2,
    E: 1,
    B: 1,
});


// operações
var pathStart = 'A';
var pathEnd = 'F';

var shortestPath = g.shortestPath(pathStart, pathEnd);
var distance = g.calcDistance(shortestPath);

console.log('Caminho mais curto de ' + pathStart + ' à ' + pathEnd + ': [ ' + shortestPath.toString().replace(/\,/g, ' => ') + ' ]');
console.log('A distância/peso do caminho é: ' + distance);
