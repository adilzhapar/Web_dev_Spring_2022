// alert( null || 2 || undefined ); 2

// alert( alert(1) || 2 || alert(3) );  1 and 2

// alert( 1 && null && 2 ); null

// alert( alert(1) && alert(2) ); 1 and undefined

// alert( null || 2 && 3 || 4 );  3

// if( age >= 14 && age <= 90) 

// if !( age >= 14 && age <= 90) 
// if( age < 14 || age > 90)

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );  first and third



let name = prompt("Who's there?");

if(name == 'Admin'){
    let pass = prompt('Password?');
    if(pass == 'TheMaster'){
        alert('Welcome!');
    }else if(pass = "" || name == null){
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
}else if(name == "" || name == null){
    alert("Canceled");

}else{
    alert("I don't know you");
}


