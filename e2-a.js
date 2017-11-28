const dijkstras = require('./dijkstras');

var g = dijkstras.createGraph();

g.addVertex('1', {
    2: 3,
    6: 1,
    5: 8,
    3: 5,
});

g.addVertex('2', {
    1: 3,
    3: 2,
    7: 1,
});

g.addVertex('3', {
    2: 2,
    4: 1,
    8: 2,
    1: 5,
});

g.addVertex('4', {
    3: 1,
    5: 4,
});

g.addVertex('5', {
    4: 4,
    8: 1,
    1: 8,
    6: 6,
});

g.addVertex('6', {
    1: 1,
    7: 5,
    5: 6,
});

g.addVertex('7', {
    2: 1,
    8: 1,
    6: 5,
});

g.addVertex('8', {
    7: 1,
    3: 2,
    5: 1,
});


// operações
var pathStart = '2';
var pathEnd = '5';

var shortestPath = g.shortestPath(pathStart, pathEnd);
var distance = g.calcDistance(shortestPath);

console.log('Caminho mais curto de ' + pathStart + ' à ' + pathEnd + ': [ ' + shortestPath.toString().replace(/\,/g, ' => ') + ' ]');
console.log('A distância/peso do caminho é: ' + distance);
