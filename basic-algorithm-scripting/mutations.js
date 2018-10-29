function mutation(arr) {
  let isSame = true;
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      isSame = false;
    }
  }
  return isSame;
}
