export class Graph {
    neighbors: any;

    constructor() {
        this.neighbors = {};
    }

    addEdge(u: string, v: string) {
        if (!this.neighbors[u]) this.neighbors[u] = []
        this.neighbors[u].push(v);
    };

    bfs(start: string) {
        if (!this.neighbors[start] || !this.neighbors[start].length) {
            return [start];
        };

        let results: any = { nodes: [] };
        let queue = this.neighbors[start];
        let count = 1;        

        while (queue.length) {
            let node: string = queue.shift();
            if (!results[node] || !results[node].visited) {
                results[node] = { visited: true, steps: count};
                results["nodes"].push(node);
                if (this.neighbors[node]) {
                    if (this.neighbors[node].length) {
                        count++;
                        queue.push(...this.neighbors[node]);
                    } else {
                        continue;
                    }
                }
            }
        }
        return results;
    }

    shortestPath(start: string, end: string) {
        if (start == end) {
            return [start, end];
        }

        let queue = [start];
        let visited: any = {};
        let predecessor: any = {};
        let tail = 0;
        let path;

        while (tail < queue.length) {
            let u = queue[tail++];
            if (!this.neighbors[u]) {
                continue;
            }

            let neighbors = this.neighbors[u];
            for (let i = 0; i < neighbors.length; ++i) {
                let v = neighbors[i];
                if (visited[v]) {
                    continue;
                }
                visited[v] = true;
                if (v === end) {   
                    path = [v]; 
                    while (u !== start) {
                        path.push(u);
                        u = predecessor[u];
                    }
                    path.push(u);
                    path.reverse();
                    return path;
                }
                predecessor[v] = u;
                queue.push(v);
            }
        }
        return path;
    }
}

export const createGraph = (input: Array<Array<string>>) => {
    input = input.concat(reverseConnections(input));

    let g = new Graph();
    input.forEach(([first, second]) => g.addEdge(first, second));

    return g;
}

const reverseConnections = (connections: Array<Array<string>>) => connections.map(([first, second]) => [second, first]);