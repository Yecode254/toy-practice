function speedDetector(s) {
  // Declare required variables
  const maxDp = 12;
  const speedBracketsInKm = 5;
  const speedlimit = 70;
  let result;
  const Dp = Math.floor((s - speedlimit) / speedBracketsInKm);
  // output when speed is null
  if (((s = null), s < 0)) {
    result = "put in a valid speed";
    return result;
    // speed is less than 70km/h
  } else if (s < 70) {
    result = "ok";
    return result;
    // Max demianer points has been reached
  } else if (Dp > maxDp) {
    result = "License suspended.";
    return result;
  }
  // return number of points
  else {
    return `${Dp}`;
  }
}
console.log(speedDetector());
