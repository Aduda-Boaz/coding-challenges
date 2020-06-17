function reverseString(str) {
    // solution one
    var strArr = str.split("");
    var reverseStrArray = strArr.reverse();
    var reversedString = reverseStrArray.join("");
    return reversedString


    // solution two
    return str.split("").reverse().join("");

    // solution three from scratch

    var final = "";
    for (var i = str.length - 1; i >= 0; i--) {
        final += str[i];
    }
    return final;
}

console.log(reverseString("Hello")); //olleh