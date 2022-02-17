// 1
// let i = 3;

// while (i) {
//   alert( i-- );
// }
// Answer: 1

// 2
// let i = 0;
// while (++i < 5) alert( i );
// 1 2 3 4

// let i = 0;
// while (i++ < 5) alert( i );
// 1 2 3 4 5 


// 3
// for (let i = 0; i < 5; i++) alert( i );
// for (let i = 0; i < 5; ++i) alert( i );
// Answer: 0 1 2 3 4

// 4
// for(let i = 2; i < 10; i++){
//     if( i % 2 == 0){
//         alert(i);
//     }
// }

// 5
// let i = 0;
// while(i < 3){
//     alert(`number ${i++}`)
// }

// 6
// let num = prompt('Input number:')
// while(1){
//     if (num > 100){
//         alert("Good");
//         break;
//     }
//     else{
//         num = prompt('Input again:');
//     }
// }


// 7
function isPrime(n){
    if(n == 2){
        return true;
    }
    for(let i = 2; i <= n / 2 + 1; i++){
        if(n % i == 0) return false;
    }
    return true;
}

let n = prompt("Input number")
for(let i = 2; i <= n; i++){
    if(isPrime(i)){
        alert(i);
        // console.log(i);
    }
}