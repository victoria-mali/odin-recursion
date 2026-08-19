# Fibonacci & Merge Sort

Two small JavaScript exercises: generating Fibonacci sequences (iteratively and recursively), and sorting an array using recursive merge sort.

## Fibonacci

### `fibs(n)`

Returns an array containing the first `n` numbers of the Fibonacci sequence, built iteratively.

```javascript
fibs(8); // [0, 1, 1, 2, 3, 5, 8, 13]
fibs(1); // [0]
fibs(0); // "Please, input a positive integer"
```

**How it works:** starts with the base sequence `[0, 1]`, then loops `n - 2` times, each time adding the sum of the previous two numbers to the array.

### `fibsRec(position)`

Same result as `fibs`, but built recursively using an inner helper function.

```javascript
fibsRec(8); // [0, 1, 1, 2, 3, 5, 8, 13]
```

**How it works:** the public `fibsRec(position)` function only exposes a single argument. Internally, it delegates to a nested `innerFibs(currentNum, nextNum, sequence)` helper that carries the running state (the last two numbers and the sequence so far) through each recursive call, stopping once `sequence.length === position`. Keeping the helper nested means callers can't pass in or tamper with that internal state.

## Merge Sort

### `mergeSort(arr)`

Returns a new array sorted in ascending order, using a recursive merge sort.

```javascript
mergeSort([5, 3, 8, 1, 9, 2]); // [1, 2, 3, 5, 8, 9]
```

**How it works:**
1. **Base case** — an array of length 0 or 1 is already sorted, so it's returned as-is.
2. **Split** — the array is divided into two halves using `.slice()`.
3. **Recurse** — `mergeSort` is called on each half until every piece is broken down to the base case.
4. **Merge** — sorted halves are combined back together, one element at a time, always taking the smaller of the two "front" elements, until one side runs out — at which point the rest of the other side is appended.

The actual sorting happens at the merge step; splitting alone doesn't sort anything.
