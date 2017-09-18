/**
 *  WOD
 *  Nolan Laranio
 */

const nums = [1, 2, 3, 4, 5];

function sumFor(list) {
  let ret = 0;
  for(let i = 0; i < list.length; i++) {
    ret += list[i];
  }
  return ret;
}

function sumWhile(list) {
  let ret = 0;
  let i = 0;
  while(i < list.length) {
    ret += list[i];
    i++;
  }
  return ret;
}

function sumRecursion(list) {
  if(list.length > 0) {
    return list.pop() + sumRecursion(list);
  }
  return 0;
}

function sumUnderscore(list) {
  return _.reduce(list, function(memo, num) {
    return memo + num;
  }, 0);
}

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumUnderscore(nums));
