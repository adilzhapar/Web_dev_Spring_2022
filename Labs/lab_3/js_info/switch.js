// 1
// let browser = prompt()
// if(browser == 'Edge'){
//     alert("You've got the Edge!");
// }else if(browser in ["Chrome", 'Firefox', 'Safari', 'Opera']){
//     alert('Okay we support therse browsers too');
// }else{
//     alert('We hope this page looks ok');
// }

// 2
let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');

    default:
        break;
}

