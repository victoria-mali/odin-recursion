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

function fibsRec(position) {
  function innerFibs(currentNum, nextNum, sequence) {
    if (sequence.length === position) {
      return sequence;
    }
    let num = currentNum + nextNum;
    let newSequence = sequence.concat(num);
    return innerFibs(nextNum, num, newSequence);
  }

  if (position <= 0) {
    return "Please, input a positive integer";
  } else if (position === 1) {
    return [0];
  }

  return innerFibs(0, 1, [0, 1]);
}
