var s_name="Student 1"

function hi(){
    console.log('Hi ' + s_name);
}
hi()

// "let" variable makes variable inside a block

let arr = [1, 2, 3, 4];
arr.push(5)
arr.pop()

for(let v of arr){
    console.log(v)
}
console.log('\n')

arr.forEach(function (v){
    console.log(v);
})
