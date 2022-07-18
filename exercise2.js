function reverse(str){
    //store de reverse 
  let reversedStr = []
  // start in last character and going append like first character in the reversedStr array
  for (let i = str.length-1; i >= 0; i--){
    reversedStr.push(str[i])
  }
  // return reversed array into string
  return reversedStr.join("");
}

console.log("augA oreuQ")
console.log(reverse("Quero Agua"))