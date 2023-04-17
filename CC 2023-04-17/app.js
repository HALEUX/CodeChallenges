//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

// What I did:
//function solution(str){
//    let array = str.split("");
//    array.reverse();
//    return array.join("");
// }
//
// solution('world');
// solution('word');

//Better answer:

function solution(str) {
    return str.split('').reverse().join('');  
  }