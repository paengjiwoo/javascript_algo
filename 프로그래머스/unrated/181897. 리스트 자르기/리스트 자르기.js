function solution(n, slicer, num_list) {
  if (n===1) {
    return num_list.slice(0, slicer[1] + 1)
  } else if (n===2) {
    return num_list.slice(slicer[0])
  } else if (n===3) {
    return num_list.slice(slicer[0], slicer[1] + 1)
  } else if (n===4) {
    let selectedElements = [];
    for (let i = slicer[0]; i <= slicer[1]; i += slicer[2]) {
      if (i < num_list.length) {
        selectedElements.push(num_list[i]);
      }
    }
    return selectedElements;
  }
}