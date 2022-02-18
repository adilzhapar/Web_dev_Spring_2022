let list = document.querySelector(".list");

function add(){
    let v = document.createElement("div")
    v.className = "task"
    let input = document.querySelector("#in");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "nura";

    let p = document.createElement("p");
    p.innerHTML = input.value;
    
    let img = document.createElement("img");
    img.id = "trash";
    img.src = "https://i.ibb.co/hFHdy3D/Pngtree-black-trash-can-free-illustration-4601444.png";
    img.style.width = "50px";
    

    v.appendChild(checkbox);
    v.appendChild(p);
    v.appendChild(img);
    list.appendChild(v);
    input.value = "";

    img.addEventListener("click", remove);
    // document.getElementById("trash").onclick = function() {
    //     this.parentNode.remove();
    // }
}

function remove(){
    this.parentNode.remove();
}

function adding(){
    if(event.key == 'Enter'){
        add();
    }
}