function frankenSplice(arr1, arr2, n) {
  const output = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    output.splice(n + i, 0, arr1[i]);
  }

  return output;
}
