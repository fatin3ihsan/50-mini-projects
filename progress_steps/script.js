const prog = document.getElementById("progress-bar");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".step");

let current_active = 1;

next.addEventListener('click', () =>{
    current_active ++
    if(current_active > circles.length){
        current_active = circles.length
    }
    update();
})

prev.addEventListener("click", () =>{
    current_active --
    if(current_active < 1){
        current_active = 1;
    }
    update();
})

const update= () =>{
    circles.forEach((circle, index) => {
        if(current_active > index){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    })

    active = document.querySelectorAll(".active");
    prog.style.width = (active.length -1) / (circles.length -1) * 100 + '%';
    if(current_active === circles.length){
        next.disabled =true;
    }
    else if(current_active ===1 ) {
        prev.disabled = true;
    }
    else{
    
        prev.disabled = false;
        next.disabled = false;
    }
}

