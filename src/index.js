module.exports = function reverse (n) {
  let result=0;
  if(n < 0) n = -n;
  while(n>0){
  result = (n % 10) + (result * 10);  
  n= (n - (n % 10)) / 10; 
  }
  return result;
}
