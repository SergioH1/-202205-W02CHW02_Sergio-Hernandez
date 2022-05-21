function boardGame(f, c) {
  let obj = new Array(f);
  for (let y = 0; y < f; y++) {
    obj[y] = new Array(c);
  }

  return obj;
}

console.log(boardGame(10, 10));
