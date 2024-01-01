function openMenu(){
    let p = document.querySelector("#menu").firstChild;
    if(document.getElementById("change").style.display==="grid"){
        document.getElementById("change").style.display="none";
        p.classList.remove("fa-xmark");
    }else{
        document.getElementById("change").style.display="grid";
        p.classList.add("fa-xmark");
    }
    
}