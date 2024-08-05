function distanceCheck(n, nextRoads, source) {
  const distances = Array.from({length: n + 1}, () => -1);
  const q = [source];
  distances[source] = 0;

  while (q.length > 0) {
    const node = q.shift();
    const currentDistance = distances[node];
    
    for (let i = 0; i < nextRoads[node].length; i++) {
      const next = nextRoads[node][i];
      if (distances[next] === -1) {
        distances[next] = currentDistance + 1;
        q.push(next);
      }
    }
  }
  return distances;
}

function solution(n, roads, sources, destination) {
 
  const nextRoads = Array.from({length: n + 1}, () => []);
  
  for (const road of roads) {
    nextRoads[road[0]].push(road[1])
    nextRoads[road[1]].push(road[0])
  }
  
  const distances = distanceCheck(n, nextRoads, destination);
  let ans = [];
  for (const source of sources) ans.push(distances[source]);
  return ans;
}