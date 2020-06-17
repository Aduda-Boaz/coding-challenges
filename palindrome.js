function palindrome(str) {
    var peg = /[\W_]/g;

    var smallStr = str.toLowerCase().replace(peg, "");


    var reversed = smallStr.split("").reverse().join("");
    if (reversed === smallStr) return true;
    return false;
}

palindrome("eye");