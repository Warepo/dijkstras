/**
 * Basic priority queue implementation. If a better priority queue is wanted/needed,
 * this code works with the implementation in google's closure library (https://code.google.com/p/closure-library/).
 * Use goog.require('goog.structs.PriorityQueue'); and new goog.structs.PriorityQueue()
 */
function PriorityQueue() {

    this._nodes = [];

    this.enqueue = (priority, key) => {
        
        this._nodes.push({
            key: key,
            priority: priority
        });

        this.sort();
    };
    
    this.dequeue = () => this._nodes.shift().key;

    this.sort = () => this._nodes.sort((a, b) => a.priority - b.priority);
    
    this.isEmpty = () => !this._nodes.length;
}

/**
 * Pathfinding starts here
 */
function Graph() {

    var INFINITY = 1 / 0;
    
    this.vertices = {};

    this.addVertex = function (name, edges) {
        this.vertices[name] = edges;
    };

    this.getVertex = function (name) {
        return this.vertices[name];
    };

    this.shortestPath = function (start, finish) {

        var nodes = new PriorityQueue();
        var distances = {};
        var previous = {};
        var path = [];

        for (let vertex in this.vertices) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(0, vertex);
            } else {
                distances[vertex] = INFINITY;
                nodes.enqueue(INFINITY, vertex);
            }

            previous[vertex] = null;
        }

        while (!nodes.isEmpty()) {
            let smallest = nodes.dequeue();

            if (smallest === finish) {
                path = [];

                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }

                break;
            }

            if (!smallest || distances[smallest] === INFINITY) continue;

            for (let neighbor in this.vertices[smallest]) {
                let alt = distances[smallest] + this.vertices[smallest][neighbor];

                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = smallest;

                    nodes.enqueue(alt, neighbor);
                }
            }
        }

        return path.concat(start).reverse();
    };

    this.calcDistance = function(path) {
        let distance = 0;

        for (let i = 0; i < path.length; i++) {
            let nextVertexName = path[i + 1];

            if (!nextVertexName) break;

            let vertexName = path[i];

            distance += this.getVertex(vertexName)[nextVertexName];
        }

        return distance;
    };
}

module.exports = {
    priorityQueue: PriorityQueue,
    graph: Graph,
    createPriorityQueue: () => new PriorityQueue(),
    createGraph: () => new Graph(),
};
