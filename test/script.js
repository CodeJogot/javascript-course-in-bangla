function forOutput() {
  const a = [20, 10 , 3, 19, 2, 19, 763, 23, 234];
  let sm = 0;
  for(let i = 0; i<a.length; i++) {
    if(a[i]>sm) sm = a[i];
  }
  document.getElementById("ab").innerHTML = sm;
}
