function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      output.push(arr[i]);
    }
  }

  return output;
}
