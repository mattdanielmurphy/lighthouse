var remove = function (list, callback) {
  var result = [];
  for(i in list){
    if(!callback(list[i])) {
      result.push(list[i]);
    }
  }
  return result;
}

var newList = remove([1,2,3,4,5], function(x) {
  return x > 2;
})

console.log(newList);

// newList is [1,2]