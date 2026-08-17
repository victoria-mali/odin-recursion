function fibs(n) {
  if (n <= 0) {
    return "Please, input a positive integer";
  } else if (n === 1) {
    return [0];
  }

  let sequence = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    let currentNum = sequence[i];
    let nextNum = sequence[i + 1];
    let num = currentNum + nextNum;
    sequence.push(num);
  }
  return sequence;
}
