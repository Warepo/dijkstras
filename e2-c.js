const dijkstras = require('./dijkstras');

var g = dijkstras.createGraph();

g.addVertex('A', {
    B: 4,
    C: 2,
});

g.addVertex('B', {
    A: 4,
    C: 1,
    D: 5,
});

g.addVertex('C', {
    D: 8,
    B: 1,
    A: 2,
    E: 10,
});

g.addVertex('D', {
    B: 5,
    F: 6,
    E: 2,
    C: 8,
});

g.addVertex('E', {
    C: 10,
    F: 2,
    D: 2,
});

g.addVertex('F', {
    D: 6,
    E: 2
});


// operações
var pathStart = 'A';
var pathEnd = 'D';

var shortestPath = g.shortestPath(pathStart, pathEnd);
var distance = g.calcDistance(shortestPath);

console.log('Caminho mais curto de ' + pathStart + ' à ' + pathEnd + ': [ ' + shortestPath.toString().replace(/\,/g, ' => ') + ' ]');
console.log('A distância/peso do caminho é: ' + distance);
