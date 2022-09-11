const bs = (a, n) => {
  let left = 0;
  let right = a.length - 1;
  let i = 1;

  while (left <= right) {
    console.log("cycle it - ", i, left, right);
    i++;
    const m = Math.floor((left + right) / 2);
    if (a[m] === n) return m;
    if (a[m] > n) right = m - 1;
    if (a[m] < n) left = m + 1;
  }
};

console.log(bs([0, 1, 2, 3, 4], 1));
