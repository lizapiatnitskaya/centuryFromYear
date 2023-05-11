function century(year) {
  if(Number.isInteger(year/100)){
    return year/100;
  } else {
    return Math.ceil(year/100);
  }
  return;
}